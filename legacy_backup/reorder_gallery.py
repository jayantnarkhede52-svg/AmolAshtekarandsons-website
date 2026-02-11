import re

def reorder_gallery():
    file_path = 'c:/work/Jewellery website AA & Sons/gallery.html'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the gallery grid block
    grid_start_marker = '<div class="gallery-grid" data-aos="fade-up">'
    grid_end_marker = '</div>'
    
    # Find the start of the grid
    start_index = content.find(grid_start_marker)
    if start_index == -1:
        print("Gallery grid not found")
        return

    # Find the closing div of the grid. 
    # Since there are nested divs, we need to be careful. 
    # However, looking at the file, the gallery-grid ends before the closing </section>.
    # A simpler approach is to use regex to find all gallery items and then replace the whole block.
    
    # Let's extract all gallery-item divs
    item_pattern = re.compile(r'(<div class="gallery-item" data-category="([^"]+)">.*?</div>)', re.DOTALL)
    items = item_pattern.findall(content)
    
    necklaces = []
    bangles = []
    rings = []
    
    for full_html, category in items:
        if category == 'necklaces':
            necklaces.append(full_html)
        elif category == 'bangles':
            bangles.append(full_html)
        elif category == 'rings':
            rings.append(full_html)
            
    print(f"Found {len(necklaces)} necklaces, {len(bangles)} bangles, {len(rings)} rings.")
    
    new_order = []
    max_len = max(len(necklaces), len(bangles), len(rings))
    
    for i in range(max_len):
        if i < len(necklaces):
            new_order.append(necklaces[i])
        if i < len(bangles):
            new_order.append(bangles[i])
        if i < len(rings):
            new_order.append(rings[i])
            
    # Construct the new grid content
    new_grid_content = '\n'.join(new_order)
    
    # We need to replace the content inside the gallery-grid div.
    # We can use regex to replace the inner content roughly, or just regenerate the file content if we locate the start and end correctly.
    
    # To be safe with regex replacement of a large block:
    # 1. Identify the portion of the string that covers all found items.
    # The findall gives us the items, but not their positions relative to comments etc.
    # The file has comments like <!-- Necklaces (Newly Added) --> which we should probably remove or ignore since we are mixing them.
    
    # Better approach: Find the start of the grid, find the end of the section container or just the last </div> before </section>
    
    # Let's look at the file stricture:
    # <div class="gallery-grid" data-aos="fade-up">
    # ... content ...
    # </div>
    # </div> <!-- end of container -->
    # </section>
    
    # I'll rely on the exact string match of the start marker, and assume the grid ends before the pattern </div>\s+</div>\s+</section>
    
    # Regex to capture the content inside gallery-grid
    # We match <div class="gallery-grid" ...> up to the closing div. 
    # Since capturing balanced tags with regex is hard, and we know the indent structure, maybe we can assume indentation?
    # Or just replace the range from first item start to last item end.
    
    start_match = re.search(r'<div class="gallery-grid" data-aos="fade-up">', content)
    if not start_match:
         return
         
    # Find the range of all items
    # We will assume the grid contains ONLY gallery items and comments.
    # We will replace everything from after grid_start_marker until the closing </div> of that grid.
    
    # A safe heuristic:
    # The grid starts at start_match.end()
    # The next </div> that is at the same indentation level (indent 16 spaces?) might be the end.
    # Let's look at the file content again.
    # line 75: <div class="gallery-grid" ...>
    # line 273: </div>
    
    # I will construct the new block
    new_block = f'{grid_start_marker}\n{new_grid_content}\n{grid_end_marker}'
    
    # Regex designed to match the block:
    # <div class="gallery-grid" data-aos="fade-up">.*?</div>
    # But lazy match `.*?` might stop early at an inner div.
    # We need greedy match but stop at the right </div>.
    
    # Let's try to match from <div class="gallery-grid"...> to the </div> followed by \s+</div>\s+</section>
    
    pattern_block = re.compile(r'(<div class="gallery-grid" data-aos="fade-up">.*?)(\s*</div>\s*</div>\s*</section>)', re.DOTALL)
    
    match = pattern_block.search(content)
    if match:
        pre_block = match.group(1) # This contains the start tag but also the content.. wait.
        # My regex group 1 includes content. The .*? is lazy.
        # It will stop at the first occurrence of group 2.
        
        # We want to replace everything in group 1 EXCEPT the start tag? 
        # No, group 1 includes start tag.
        
        # Actually, let's just make it simpler.
        # We replace the whole match group 1 with "StartTag \n NewContent \n ClosingTag"
        # But wait, group 2 is the boundary.
        
        # Let's recalculate the exact span.
        
        header = match.group(0) # This is the whole thing? No.
        
        # New content
        updated_content = content.replace(match.group(1), new_block)
        
        # Verify if it looks right?
        # A bit risky to do blindly.
        
        # Alternative: Just split by the start marker.
        parts = content.split(grid_start_marker)
        if len(parts) != 2:
            print("Multiple or no grid markers found")
            return
            
        header_part = parts[0]
        rest = parts[1]
        
        # Now find the end of the grid in 'rest'.
        # The grid ends at the line before line 273 basically.
        # line 273 is just </div>.
        # line 274 is </div>.
        # line 275 is </section>.
        
        # Let's search for the closing sequence:
        # </div>\s*</div>\s*</section>
        
        end_sequence = re.compile(r'(\s*</div>\s*</div>\s*</section>)', re.DOTALL)
        end_match = end_sequence.search(rest)
        
        if not end_match:
            print("Could not find end of grid")
            return
            
        footer_part = rest[end_match.start():]
        
        # Reassemble
        final_html = header_part + new_block + footer_part
        
        with open('c:/work/Jewellery website AA & Sons/gallery.html', 'w', encoding='utf-8') as f:
            f.write(final_html)
        
        print("Successfully reordered gallery.html")

if __name__ == '__main__':
    reorder_gallery()
