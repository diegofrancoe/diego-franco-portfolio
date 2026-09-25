import json
import re
from pathlib import Path
from shutil import copyfile

from PIL import Image
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.graphics import renderPDF
from reportlab.graphics.shapes import Drawing, Group
from reportlab.graphics.svgpath import SvgPath


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
PUBLIC = ROOT / "public"
TMP = ROOT / "tmp" / "pdfs"
PAGE_W, PAGE_H = 650, 900

INK = HexColor("#252824")
MUTED = HexColor("#6f746d")
GREEN = HexColor("#2e8b72")
MINT = HexColor("#b8efd6")
SURFACE = HexColor("#faf8f2")
GRID = HexColor("#e7e6df")
BUTTON = HexColor("#e7ebe4")

REPORTLAB_FONTS = Path(__import__("reportlab").__file__).resolve().parent / "fonts"
pdfmetrics.registerFont(TTFont("CVRegular", str(REPORTLAB_FONTS / "Vera.ttf")))
pdfmetrics.registerFont(TTFont("CVBold", str(REPORTLAB_FONTS / "VeraBd.ttf")))

ICON_LIBRARY = {
    "OpenAI": ("bs", "BsOpenai", "#10a37f"),
    "React": ("si", "SiReact", "#00a9d6"),
    "TypeScript": ("si", "SiTypescript", "#3178c6"),
    "Next.js": ("si", "SiNextdotjs", "#111111"),
    "Vercel": ("si", "SiVercel", "#111111"),
    "PostgreSQL": ("si", "SiPostgresql", "#4c86a8"),
    "Supabase": ("si", "SiSupabase", "#3ecf8e"),
    "n8n": ("si", "SiN8N", "#ed5a7d"),
    "Make": ("si", "SiMake", "#6d19d3"),
}
_ICON_CACHE = {}


def page_y(top):
    return PAGE_H - top


def draw_text(c, x, top, text, size=9, color=INK, font="CVRegular"):
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawString(x, page_y(top + size), text)


def wrap_text(text, font, size, width):
    lines = []
    for paragraph in text.split("\n"):
        words = paragraph.split()
        current = ""
        for word in words:
            test = word if not current else f"{current} {word}"
            if pdfmetrics.stringWidth(test, font, size) <= width:
                current = test
            else:
                if current:
                    lines.append(current)
                current = word
        if current:
            lines.append(current)
    return lines


def draw_paragraph(c, x, top, text, width, size=9, leading=12, color=MUTED, font="CVRegular", max_lines=None):
    lines = wrap_text(text, font, size, width)
    if max_lines:
        lines = lines[:max_lines]
    for index, line in enumerate(lines):
        draw_text(c, x, top + index * leading, line, size, color, font)
    return top + len(lines) * leading


def round_panel(c, x, top, width, height, radius=16, shadow=True, fill=SURFACE):
    if shadow:
        c.setFillColor(HexColor("#dfe0da"))
        c.roundRect(x, page_y(top + height + 2), width, height, radius, fill=1, stroke=0)
    c.setFillColor(fill)
    c.roundRect(x, page_y(top + height), width, height, radius, fill=1, stroke=0)


def section_label(c, x, top, number, title):
    draw_text(c, x, top, f"{number} / {title}", 8.3, GREEN, "CVBold")


def load_brand_icon(label):
    if label in _ICON_CACHE:
        return _ICON_CACHE[label]

    package, symbol, color = ICON_LIBRARY[label]
    source = ROOT / "node_modules" / "react-icons" / package / "index.mjs"
    content = source.read_text(encoding="utf-8")
    pattern = rf"export function {re.escape(symbol)} \(props\) \{{\s*return GenIcon\((\{{.*?\}})\)\(props\);\s*\}};"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        raise RuntimeError(f"Could not load {symbol} from {source}")

    tree = json.loads(match.group(1))
    view_box = [float(value) for value in tree["attr"]["viewBox"].split()]
    paths = [child["attr"]["d"] for child in tree.get("child", []) if child.get("tag") == "path"]
    _ICON_CACHE[label] = (view_box, paths, HexColor(color))
    return _ICON_CACHE[label]


def draw_brand_icon(c, label, x, y, size):
    if label == "Figma":
        unit = size / 3.15
        left = x + (size - unit * 2) / 2
        bottom = y + (size - unit * 3) / 2
        c.setFillColor(HexColor("#0acf83"))
        c.circle(left + unit / 2, bottom + unit / 2, unit / 2, fill=1, stroke=0)
        c.setFillColor(HexColor("#a259ff"))
        c.roundRect(left, bottom + unit, unit, unit, unit / 2, fill=1, stroke=0)
        c.setFillColor(HexColor("#f24e1e"))
        c.roundRect(left, bottom + unit * 2, unit, unit, unit / 2, fill=1, stroke=0)
        c.setFillColor(HexColor("#ff7262"))
        c.roundRect(left + unit, bottom + unit * 2, unit, unit, unit / 2, fill=1, stroke=0)
        c.setFillColor(HexColor("#1abcfe"))
        c.circle(left + unit * 1.5, bottom + unit * 1.5, unit / 2, fill=1, stroke=0)
        return

    view_box, paths, color = load_brand_icon(label)
    view_x, view_y, view_width, view_height = view_box
    scale = size / max(view_width, view_height)
    drawing = Drawing(size, size)
    group = Group()
    group.transform = (
        scale,
        0,
        0,
        -scale,
        -view_x * scale + (size - view_width * scale) / 2,
        (view_y + view_height) * scale + (size - view_height * scale) / 2,
    )
    for path_data in paths:
        group.add(SvgPath(path_data, fillColor=color, strokeColor=None))
    drawing.add(group)
    renderPDF.draw(drawing, c, x, y)


def prepare_photo():
    TMP.mkdir(parents=True, exist_ok=True)
    source = Image.open(PUBLIC / "diego-franco-cutout-final.webp").convert("RGBA")
    background = Image.new("RGBA", source.size, (231, 223, 211, 255))
    background.alpha_composite(source)
    crop = background.crop((540, 0, 1480, 1024)).convert("RGB")
    target = TMP / "cv-photo.jpg"
    crop.resize((940, 1024), Image.Resampling.LANCZOS).save(target, quality=91, optimize=True)
    return target


def draw_photo(c, photo_path):
    x, top, width, height = 30, 30, 182, 194
    path = c.beginPath()
    path.roundRect(x, page_y(top + height), width, height, 12)
    c.saveState()
    c.clipPath(path, stroke=0, fill=0)
    c.drawImage(ImageReader(photo_path), x, page_y(top + height), width=width, height=height, preserveAspectRatio=False, mask="auto")
    c.restoreState()


def draw_link_button(c, top, label, url, fill=BUTTON):
    x, width, height = 34, 162, 25
    c.setFillColor(fill)
    c.roundRect(x, page_y(top + height), width, height, 12.5, fill=1, stroke=0)
    draw_text(c, x + 12, top + 7, label, 7.5, INK, "CVBold")
    arrow_x = x + width - 18
    arrow_y = page_y(top + 16)
    c.setStrokeColor(INK)
    c.setLineWidth(.8)
    c.line(arrow_x, arrow_y, arrow_x + 7, arrow_y + 7)
    c.line(arrow_x + 2.5, arrow_y + 7, arrow_x + 7, arrow_y + 7)
    c.line(arrow_x + 7, arrow_y + 7, arrow_x + 7, arrow_y + 2.5)
    c.linkURL(url, (x, page_y(top + height), x + width, page_y(top)), relative=0)


def draw_sidebar(c, lang, photo_path):
    t = DATA[lang]
    round_panel(c, 18, 18, 206, 864, radius=16)
    draw_photo(c, photo_path)
    draw_text(c, 34, 244, t["brand"], 8.2, GREEN, "CVBold")
    draw_text(c, 34, 270, "DIEGO", 33, INK, "CVBold")
    draw_text(c, 34, 309, "FRANCO", 33, INK, "CVBold")
    for i, line in enumerate(t["role"]):
        draw_text(c, 34, 361 + i * 16, line, 12.2, INK)

    c.setFillColor(MINT)
    c.roundRect(34, page_y(408 + 24), 162, 24, 12, fill=1, stroke=0)
    draw_text(c, 45, 415, t["chip"], 8.2, INK, "CVBold")
    draw_paragraph(c, 34, 450, t["profile"], 162, size=9.1, leading=13.2, color=MUTED)

    draw_text(c, 34, 562, t["connect"], 8.2, GREEN, "CVBold")
    draw_text(c, 34, 584, "Bogotá, Colombia", 8.4, INK)
    draw_text(c, 34, 599, "+57 311 396 4114", 8.4, INK)
    draw_text(c, 34, 621, "diegofrancoecheverri", 8.0, INK)
    draw_text(c, 34, 634, "@gmail.com", 8.0, INK)
    c.linkURL("mailto:diegofrancoecheverri@gmail.com", (34, page_y(648), 178, page_y(618)), relative=0)

    draw_link_button(c, 654, "LinkedIn / diegofrancoe", "https://www.linkedin.com/in/diego-franco-338433364/")
    draw_link_button(c, 687, "www.diegofrancoe.com", "https://www.diegofrancoe.com/")
    draw_link_button(c, 720, "GitHub / diegofrancoe", "https://github.com/diegofrancoe")
    draw_link_button(c, 753, t["demo"], "https://ceniza-crm.vercel.app/", fill=MINT)

    draw_text(c, 34, 805, t["languages"], 8.2, GREEN, "CVBold")
    draw_text(c, 34, 826, t["spanish_label"], 8.5, INK, "CVBold")
    draw_text(c, 87, 826, t["spanish_level"], 8.5, INK)
    draw_text(c, 34, 842, t["english_label"], 8.5, INK, "CVBold")
    draw_text(c, 83, 842, t["english_level"], 8.5, INK)


def draw_header(c, lang):
    t = DATA[lang]
    round_panel(c, 238, 18, 394, 94, radius=16)
    draw_text(c, 254, 35, t["header_label"], 8.1, GREEN, "CVBold")
    draw_text(c, 254, 57, t["headline"], 20.5, INK, "CVBold")
    draw_text(c, 254, 86, t["subtitle"], 8.5, MUTED)


def draw_experience(c, lang):
    t = DATA[lang]
    round_panel(c, 238, 124, 394, 304, radius=16)
    section_label(c, 254, 141, "1", t["experience_title"])
    draw_text(c, 254, 164, t["job_title"], 13.6, INK, "CVBold")
    draw_text(c, 254, 184, t["independent"], 8.4, MUTED)
    draw_paragraph(c, 254, 203, t["job_copy"], 354, size=8.6, leading=11.2, color=INK)

    project_tops = [245, 306, 367]
    for index, (name, description) in enumerate(t["projects"], start=1):
        top = project_tops[index - 1]
        draw_text(c, 260, top, str(index), 9.4, GREEN, "CVBold")
        draw_text(c, 286, top - 1, name, 10.1, INK, "CVBold")
        draw_paragraph(c, 286, top + 17, description, 326, size=8.0, leading=10.2, color=MUTED, max_lines=3)


def draw_business(c, lang):
    t = DATA[lang]
    round_panel(c, 238, 440, 394, 146, radius=16)
    section_label(c, 254, 456, "2", t["business_title"])
    draw_text(c, 254, 478, t["hudson_title"], 10.2, INK, "CVBold")
    draw_text(c, 254, 495, "Malta · Sep 2023 - Feb 2025", 8.1, MUTED)
    draw_paragraph(c, 254, 511, t["hudson_copy"], 354, size=8.1, leading=10.5, color=MUTED)
    draw_text(c, 254, 539, t["zara_title"], 9.8, INK, "CVBold")
    draw_text(c, 254, 555, "Malta · May 2022 - Sep 2023", 8.1, MUTED)
    draw_text(c, 254, 570, t["zara_copy"], 7.8, MUTED)


def draw_tools(c, lang):
    t = DATA[lang]
    round_panel(c, 238, 598, 394, 134, radius=16)
    section_label(c, 254, 614, "3", t["tools_title"])
    tools = ["OpenAI", "React", "TypeScript", "Next.js", "Vercel", "PostgreSQL", "Supabase", "Figma", "n8n", "Make"]
    start_x, cell_w = 250, 74
    for i, label in enumerate(tools):
        row, col = divmod(i, 5)
        x = start_x + col * cell_w
        top = 637 + row * 46
        tile_x = x + 13
        tile_y = page_y(top + 29)
        c.setFillColor(HexColor("#eef0ea"))
        c.roundRect(tile_x, tile_y, 29, 29, 7, fill=1, stroke=0)
        draw_brand_icon(c, label, tile_x + 6.5, tile_y + 6.5, 16)
        label_width = pdfmetrics.stringWidth(label, "CVRegular", 6.4)
        draw_text(c, x + 27.5 - label_width / 2, top + 33, label, 6.4, INK)


def draw_education(c, lang):
    t = DATA[lang]
    round_panel(c, 238, 744, 394, 138, radius=16)
    section_label(c, 254, 759, "4", t["education_title"])

    draw_text(c, 254, 780, "IEBS", 8.4, INK, "CVBold")
    draw_text(c, 281, 780, t["masters"], 8.3, INK)
    masters_width = pdfmetrics.stringWidth(t["masters"], "CVRegular", 8.3)
    draw_text(c, 286 + masters_width, 780, t["masters_date"], 8.3, INK)

    c.setStrokeColor(HexColor("#dedfd8"))
    c.setLineWidth(.6)
    c.line(254, page_y(800), 610, page_y(800))
    draw_text(c, 254, 804, "IEBS", 7.9, INK, "CVBold")
    draw_text(c, 281, 804, t["certificate"], 7.6, MUTED)

    draw_text(c, 254, 826, "Javeriana", 7.9, MUTED, "CVBold")
    draw_text(c, 304, 826, t["law"], 7.6, MUTED)
    draw_text(c, 254, 844, t["earlier"], 7.2, MUTED)

    c.setFillColor(MINT)
    c.roundRect(254, page_y(862 + 16), 362, 16, 8, fill=1, stroke=0)
    workflow = t["workflow"]
    workflow_width = pdfmetrics.stringWidth(workflow, "CVBold", 7.4)
    draw_text(c, 254 + (362 - workflow_width) / 2, 866, workflow, 7.4, INK, "CVBold")


def draw_grid(c):
    c.setFillColor(HexColor("#f7f6f1"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setStrokeColor(GRID)
    c.setLineWidth(.45)
    for x in range(10, PAGE_W, 18):
        c.line(x, 0, x, PAGE_H)
    for y in range(8, PAGE_H, 18):
        c.line(0, y, PAGE_W, y)


def build_pdf(lang, output_path, photo_path):
    c = canvas.Canvas(str(output_path), pagesize=(PAGE_W, PAGE_H), pageCompression=1)
    c.setTitle(DATA[lang]["document_title"])
    c.setAuthor("Diego Franco Echeverri")
    c.setSubject(DATA[lang]["document_subject"])
    draw_grid(c)
    draw_sidebar(c, lang, photo_path)
    draw_header(c, lang)
    draw_experience(c, lang)
    draw_business(c, lang)
    draw_tools(c, lang)
    draw_education(c, lang)
    c.showPage()
    c.save()


DATA = {
    "en": {
        "document_title": "Diego Franco CV - English",
        "document_subject": "AI Solutions Engineer, full-stack development, business systems and AI automation",
        "brand": "IDEAS INTO SYSTEMS",
        "role": ["AI SOLUTIONS", "ENGINEER"],
        "chip": "AI & Automation",
        "profile": "I connect operations, data and AI through useful business systems and applications. I combine full-stack development with UX/UI design to make complex workflows easier to use.",
        "connect": "LET'S CONNECT",
        "demo": "Explore Ceniza demo",
        "languages": "LANGUAGES",
        "spanish_label": "Spanish ·",
        "spanish_level": "Native",
        "english_label": "English ·",
        "english_level": "Advanced",
        "header_label": "AI SOLUTIONS ENGINEER / SELECTED WORK",
        "headline": "Business, data and AI.",
        "subtitle": "Full-stack engineering, business systems, AI integration and workflow automation.",
        "experience_title": "EXPERIENCE & PROJECTS",
        "job_title": "AI Solutions Engineer",
        "independent": "Independent · Oct 2025 - Present",
        "job_copy": "Build React / TypeScript applications, connect APIs and databases, and integrate LLM assistants with RAG and contextual workflows.",
        "projects": [
            ("Ceniza / Full-Stack CRM & AI", "Built a CRM with React, TypeScript and Supabase. Integrated an AI assistant with RAG, shared context and persistent chat for customer and quotation workflows."),
            ("Naval / Business systems", "Developing a modular ERP with TypeScript and Supabase. Built the B2B website and inquiry automation using Make, webhooks and LLM-based request routing."),
            ("40+ / E-commerce & UX/UI", "Built responsive storefront interfaces and product journeys, integrating analytics and marketing tracking with a focus on UX/UI."),
        ],
        "business_title": "BUSINESS & LEADERSHIP",
        "hudson_title": "Store Manager · Hudson Holdings Ltd",
        "hudson_copy": "Led store operations, team performance, sales KPIs and inventory control.",
        "zara_title": "Operations & Warehouse · ZARA",
        "zara_copy": "Assistant Operations Manager / Warehouse Supervisor.",
        "tools_title": "TOOLS I BUILD WITH",
        "education_title": "EDUCATION & APPROACH",
        "masters": "· Master's in AI Applied to Marketing and Sales",
        "masters_date": "2026",
        "certificate": "· AI in Digital Product Management Certificate, 2025",
        "law": "· Law degree, 2019",
        "earlier": "Earlier career: litigation and legal support, 2016-2020.",
        "workflow": "DISCOVER  ->  DESIGN  ->  BUILD  ->  CONNECT",
    },
    "es": {
        "document_title": "CV Diego Franco - Español",
        "document_subject": "Ingeniero de Soluciones de IA, desarrollo full stack, sistemas empresariales y automatización",
        "brand": "IDEAS CONVERTIDAS EN SISTEMAS",
        "role": ["INGENIERO DE", "SOLUCIONES DE IA"],
        "chip": "IA y automatización",
        "profile": "Conecto operaciones, datos e IA mediante sistemas empresariales y aplicaciones útiles. Combino desarrollo full stack con diseño UX/UI para hacer más fáciles de usar los flujos complejos.",
        "connect": "CONECTEMOS",
        "demo": "Explorar demo de Ceniza",
        "languages": "IDIOMAS",
        "spanish_label": "Español ·",
        "spanish_level": "Nativo",
        "english_label": "Inglés ·",
        "english_level": "Avanzado",
        "header_label": "INGENIERO DE SOLUCIONES DE IA / TRABAJO SELECCIONADO",
        "headline": "Negocio, datos e IA.",
        "subtitle": "Ingeniería full stack, sistemas empresariales, integración de IA y automatización.",
        "experience_title": "EXPERIENCIA Y PROYECTOS",
        "job_title": "Ingeniero de Soluciones de IA",
        "independent": "Independiente · Oct 2025 - Presente",
        "job_copy": "Desarrollo aplicaciones con React / TypeScript, conecto APIs y bases de datos e integro asistentes LLM con RAG y flujos contextuales.",
        "projects": [
            ("Ceniza / CRM full stack e IA", "Construí un CRM con React, TypeScript y Supabase. Integré un asistente de IA con RAG, contexto compartido y chat persistente para clientes y cotizaciones."),
            ("Naval / Sistemas empresariales", "Desarrollo un ERP modular con TypeScript y Supabase. Construí la web B2B y la automatización de solicitudes con Make, webhooks y enrutamiento con LLM."),
            ("40+ / Comercio electrónico y UX/UI", "Construí interfaces responsive y recorridos de producto, integrando analítica y seguimiento de marketing con enfoque en UX/UI."),
        ],
        "business_title": "NEGOCIO Y LIDERAZGO",
        "hudson_title": "Gerente de tienda · Hudson Holdings Ltd",
        "hudson_copy": "Lideré operaciones de tienda, desempeño del equipo, KPI de ventas y control de inventario.",
        "zara_title": "Operaciones y bodega · ZARA",
        "zara_copy": "Asistente de gerencia de operaciones / Supervisor de bodega.",
        "tools_title": "HERRAMIENTAS CON LAS QUE CONSTRUYO",
        "education_title": "EDUCACIÓN Y ENFOQUE",
        "masters": "· Maestría en IA aplicada al marketing y ventas",
        "masters_date": "2026",
        "certificate": "· Certificado en IA para la gestión de productos digitales, 2025",
        "law": "· Derecho, 2019",
        "earlier": "Experiencia previa: litigios y apoyo jurídico, 2016-2020.",
        "workflow": "DESCUBRIR  ->  DISEÑAR  ->  CONSTRUIR  ->  CONECTAR",
    },
}


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    PUBLIC.mkdir(parents=True, exist_ok=True)
    photo = prepare_photo()
    outputs = {
        "en": OUT / "Diego_Franco_CV_EN.pdf",
        "es": OUT / "Diego_Franco_CV_ES.pdf",
    }
    for lang, path in outputs.items():
        build_pdf(lang, path, photo)
        copyfile(path, PUBLIC / path.name)
    copyfile(outputs["en"], PUBLIC / "Diego_Franco_CV.pdf")
    for path in outputs.values():
        print(path)


if __name__ == "__main__":
    main()
