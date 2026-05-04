"""Render the two monolingual PDFs (HU + EN) in the same visual style."""
from weasyprint import HTML
import pathlib

base = pathlib.Path(__file__).parent

for src, dst in [
    ("portfolio_hu.html", "grn35_portfolio_HU.pdf"),
    ("portfolio_en.html", "grn35_portfolio_EN.pdf"),
]:
    HTML(str(base / src)).write_pdf(str(base / dst))
    print(f"Rendered {dst}")
