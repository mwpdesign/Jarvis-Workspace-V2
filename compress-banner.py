#!/usr/bin/env python3
from PIL import Image

# Open the 4K image
img = Image.open('/Users/michaelparson/Desktop/linkedin-banner-4k-clean.png')

# Save with optimized compression (quality 85-90 is usually good enough)
output_path = '/Users/michaelparson/Desktop/linkedin-banner-optimized.png'
img.save(output_path, 'PNG', optimize=True, compress_level=9)

print(f"Optimized banner saved to: {output_path}")

# Check file size
import os
size_mb = os.path.getsize(output_path) / (1024 * 1024)
print(f"File size: {size_mb:.2f} MB")
