
import os
import sys

def optimize_image(path):
    try:
        from PIL import Image
    except ImportError:
        print("Pillow not installed. Skipping image optimization.")
        return

    try:
        if not os.path.exists(path):
            print(f"File not found: {path}")
            return

        print(f"Optimizing {path}...")
        with Image.open(path) as img:
            print(f"Original size: {img.size}")
            
            # Resize if too large (e.g., width > 1000)
            if img.width > 900:
                new_height = int(img.height * (900 / img.width))
                img = img.resize((900, new_height), Image.Resampling.LANCZOS)
                print(f"Resized to: {img.size}")

            # Save with optimization
            output_path = path.replace(".png", "_optimized.png")
            img.save(output_path, "PNG", optimize=True)
            
            # Compare sizes
            orig_size = os.path.getsize(path)
            new_size = os.path.getsize(output_path)
            print(f"Original: {orig_size} bytes, New: {new_size} bytes")
            
            if new_size < orig_size:
                # Replace original
                os.replace(output_path, path)
                print("Image optimized and replaced.")
            else:
                os.remove(output_path)
                print("Optimization didn't reduce size. Kept original.")

    except Exception as e:
        print(f"Error optimizing image: {e}")

if __name__ == "__main__":
    target_file = r"c:\work\Jewellery website AA & Sons\assets\images\welcome_lady_graphic.png"
    optimize_image(target_file)
