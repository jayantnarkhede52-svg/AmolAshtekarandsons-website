import os
import shutil
import random

source_dir = r"c:\work\Jewellery website AA & Sons\assets\images\web images"
target_base = r"c:\work\Jewellery website AA & Sons\assets\images\gallery"
categories = ["necklaces", "bangles", "rings"]

# Get all files
files = [f for f in os.listdir(source_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
files.sort() # Sort to be deterministic-ish

# Take top 60 files for now
selected_files = files[:60]

# Distribute 20 to each
chunk_size = 20
items = [selected_files[i:i + chunk_size] for i in range(0, len(selected_files), chunk_size)]

for i, category in enumerate(categories):
    target_dir = os.path.join(target_base, category)
    if i < len(items):
        for filename in items[i]:
            src = os.path.join(source_dir, filename)
            dst = os.path.join(target_dir, filename)
            shutil.copy2(src, dst)
            print(f"Copied {filename} to {category}")
