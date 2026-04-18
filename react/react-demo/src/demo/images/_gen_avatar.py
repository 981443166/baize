from PIL import Image, ImageDraw, ImageFont
import os

size = 200
img = Image.new('RGBA', (size, size), (0, 174, 236, 255))
draw = ImageDraw.Draw(img)

# Draw a simple "bo" text avatar
try:
    font = ImageFont.truetype("arial.ttf", 80)
except:
    font = ImageFont.load_default()

text = "bo"
bbox = draw.textbbox((0, 0), text, font=font)
text_w = bbox[2] - bbox[0]
text_h = bbox[3] - bbox[1]
draw.text(((size - text_w) / 2, (size - text_h) / 2 - 5), text, fill="white", font=font)

output = os.path.join(os.path.dirname(__file__), "bozai.png")
img.save(output, "PNG")
print(f"Saved: {output}")
