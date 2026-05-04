"""Render all three portfolio PDFs (bilingual + HU + EN)."""
from weasyprint import HTML
import pathlib

base = pathlib.Path(__file__).parent

for src, dst in [
    ("portfolio.html", "grn35_portfolio.pdf"),
    ("portfolio_hu.html", "grn35_portfolio_HU.pdf"),
    ("portfolio_en.html", "grn35_portfolio_EN.pdf"),
]:
    HTML(str(base / src)).write_pdf(str(base / dst))
    print(f"Rendered {dst}")
