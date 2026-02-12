#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import sys

# Banner dimensions (LinkedIn standard)
WIDTH = 1584
HEIGHT = 396

# Create new image with navy blue gradient
banner = Image.new('RGB', (WIDTH, HEIGHT))
pixels = banner.load()

# Create gradient from dark navy to slightly lighter navy
for y in range(HEIGHT):
    # Gradient from RGB(15, 33, 66) to RGB(25, 50, 95)
    r = int(15 + (10 * y / HEIGHT))
    g = int(33 + (17 * y / HEIGHT))
    b = int(66 + (29 * y / HEIGHT))
    for x in range(WIDTH):
        pixels[x, y] = (r, g, b)

# Load the logo
try:
    logo = Image.open('/Users/michaelparson/.clawdbot/workspace/chp-logo-new.jpg')
    
    # Resize logo to fit nicely on left side (maintain aspect ratio)
    logo_max_height = int(HEIGHT * 0.6)  # 60% of banner height
    aspect_ratio = logo.width / logo.height
    logo_height = logo_max_height
    logo_width = int(logo_height * aspect_ratio)
    
    logo = logo.resize((logo_width, logo_height), Image.Resampling.LANCZOS)
    
    # Position logo on left side (centered vertically, with left padding)
    logo_x = 60
    logo_y = (HEIGHT - logo_height) // 2
    
    # Paste logo onto banner
    banner.paste(logo, (logo_x, logo_y))
    
except Exception as e:
    print(f"Error loading logo: {e}", file=sys.stderr)

# Add text on the right side
draw = ImageDraw.Draw(banner)

# Try to use a clean sans-serif font, fall back to default if needed
try:
    # Try Helvetica/Arial alternatives on macOS
    font_large = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 60)
    font_small = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 42)
except:
    try:
        font_large = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 60)
        font_small = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 42)
    except:
        # Fallback to default
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

# Text content
name_text = "MICHAEL PARSON"
title_text = "Solutions Architect"

# Calculate text positioning (right side, centered vertically)
text_x = WIDTH - 650  # Right side with padding
text_y_name = HEIGHT // 2 - 50
text_y_title = HEIGHT // 2 + 10

# Draw text in white
draw.text((text_x, text_y_name), name_text, fill=(255, 255, 255), font=font_large)
draw.text((text_x, text_y_title), title_text, fill=(200, 200, 200), font=font_small)

# Save the banner
output_path = '/Users/michaelparson/.clawdbot/workspace/linkedin-banner-final.png'
banner.save(output_path, 'PNG', quality=95)
print(f"Banner saved to: {output_path}")
