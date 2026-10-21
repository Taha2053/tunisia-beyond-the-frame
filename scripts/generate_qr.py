#!/usr/bin/env python3
"""Generate print-ready PNG and SVG QR codes.

Install once with: python3 -m pip install \"qrcode[pil]\"
"""

from pathlib import Path

import qrcode
import qrcode.image.svg

URL = "https://tunisia-beyond-the-frame.vercel.app/"
OUTPUT_DIR = Path(__file__).resolve().parents[1] / "public" / "qr"


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=20,
        border=4,
    )
    qr.add_data(URL)
    qr.make(fit=True)

    png_path = OUTPUT_DIR / "tunisia-beyond-the-frame-qr.png"
    qr.make_image(fill_color="black", back_color="white").save(png_path)

    svg_path = OUTPUT_DIR / "tunisia-beyond-the-frame-qr.svg"
    qr.make_image(image_factory=qrcode.image.svg.SvgPathImage).save(svg_path)

    print(f"QR code URL: {URL}")
    print(f"PNG: {png_path}")
    print(f"SVG: {svg_path}")


if __name__ == "__main__":
    main()
