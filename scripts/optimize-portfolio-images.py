"""Produce responsive WebP assets without changing the source artwork.

Run with a Python environment containing Pillow and WebP support.
Input JSON: {"artwork": {visual_key: "/source.png"}, "hero": "/portrait.png"}.
"""
import json
import sys
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
public = root / "public"
output = public / "optimized"
output.mkdir(exist_ok=True)
input_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).with_name("portfolio-image-sources.json")
inputs = json.loads(input_path.read_text())
manifest = {}
totals = {"before": 0, "after": 0}
seen = set()

def optimize(source, portrait=False):
    path = public / source.lstrip("/")
    with Image.open(path) as image:
        image = image.convert("RGBA")
        variants = []
        for width in (480, 960):
            resized = image.copy()
            resized.thumbnail((width, round(width * image.height / image.width)), Image.Resampling.LANCZOS)
            target = output / f"{path.stem}-{width}.webp"
            resized.save(target, "WEBP", quality=85 if portrait else 82, method=6, exact=True)
            variants.append({"src": f"/optimized/{target.name}", "width": resized.width, "height": resized.height})
        if source not in seen:
            seen.add(source)
            totals["before"] += path.stat().st_size
            totals["after"] += (public / variants[-1]["src"].lstrip("/")).stat().st_size
        return {"src": variants[-1]["src"], "srcSet": ", ".join(f"{v['src']} {v['width']}w" for v in variants), "width": variants[-1]["width"], "height": variants[-1]["height"]}

for key, source in inputs["artwork"].items():
    manifest[key] = optimize(source)
hero = optimize(inputs["hero"], portrait=True)
(root / "src" / "optimizedArtwork.json").write_text(json.dumps({"artwork": manifest, "hero": hero}, indent=2) + "\n")
print(json.dumps({**totals, "reductionPercent": round(100 * (1 - totals["after"] / totals["before"]), 1), "uniqueImages": len(seen)}, indent=2))
