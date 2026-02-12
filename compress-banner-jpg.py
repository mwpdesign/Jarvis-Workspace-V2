#!/usr/bin/env python3
from PIL import Image

# Open the 4K image
img = Image.open('/Users/michaelparson/Desktop/linkedin-banner-4k-clean.png')

# Convert to RGB (JPEG doesn't support transparency)
if img.mode == 'RGBA':
    rgb_img = Image.new('RGB', img.size, (255, 255, 255))
    rgb_img.paste(img, mask=img.split()[3] if len(img.split()) == 4 else None)
    img = rgb_img

# Save as JPEG with high quality
output_path = '/Users/michaelparson/Desktop/linkedin-banner-final.jpg'
img.save(output_path, 'JPEG', quality=92, optimize=True)

print(f"Banner saved to: {output_path}")

# Check file size
import os
size_mb = os.path.getsize(output_path) / (1024 * 1024)
print(f"File size: {size_mb:.2f} MB")

if size_mb < 8:
    print("✅ Under 8MB limit!")
else:
    print("⚠️ Still over 8MB, trying lower quality...")
    img.save(output_path, 'JPEG', quality=85, optimize=True)
    size_mb = os.path.getsize(output_path) / (1024 * 1024)
    print(f"New file size: {size_mb:.2f} MB")
