#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont

# Banner dimensions (LinkedIn standard)
WIDTH = 1584
HEIGHT = 396

# Create new image with navy blue gradient (dark to lighter)
banner = Image.new('RGB', (WIDTH, HEIGHT))
pixels = banner.load()

# Create gradient from dark navy on left to lighter navy-teal on right
for x in range(WIDTH):
    # Progress from 0 to 1 across width
    progress = x / WIDTH
    
    # Start color (dark navy): RGB(15, 33, 66)
    # End color (lighter teal): RGB(35, 75, 115)
    r = int(15 + (20 * progress))
    g = int(33 + (42 * progress))
    b = int(66 + (49 * progress))
    
    for y in range(HEIGHT):
        pixels[x, y] = (r, g, b)

# Add text - ALL ON ONE HORIZONTAL LINE
draw = ImageDraw.Draw(banner)

# Try to use a clean sans-serif font
try:
    font_name = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 50)
    font_title = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 38)
except:
    try:
        font_name = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 50)
        font_title = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 38)
    except:
        font_name = ImageFont.load_default()
        font_title = ImageFont.load_default()

# Text content - horizontal format: "MICHAEL PARSON | Solutions Architect"
# Position on right side, vertically centered
text_x = WIDTH - 750  # Right side with padding
text_y = HEIGHT // 2 - 30  # Centered vertically

# Draw name in white
draw.text((text_x, text_y), "MICHAEL PARSON", fill=(255, 255, 255), font=font_name)

# Draw separator and title
separator_x = text_x + 420  # After name
draw.text((separator_x, text_y), "|", fill=(200, 200, 200), font=font_name)

title_x = separator_x + 30
draw.text((title_x, text_y + 5), "Solutions Architect", fill=(200, 200, 200), font=font_title)

# Save the banner
output_path = '/Users/michaelparson/.clawdbot/workspace/linkedin-banner-horizontal.png'
banner.save(output_path, 'PNG', quality=95)
print(f"Banner saved to: {output_path}")
