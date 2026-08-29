import json, re
from pathlib import Path
from docx import Document

source = Path("/Users/erer/Documents/我的网站项目/日本知名动漫全景目录_优化版_393部.docx")
output = Path(__file__).resolve().parents[1] / "public" / "anime.json"
doc = Document(source)
items = []
for table in doc.tables[1:]:
    for row in table.rows[1:]:
        year, title, genres, rank, note = [cell.text.strip() for cell in row.cells]
        if year.isdigit() and title:
            items.append({"id": len(items)+1, "year": int(year), "title": title,
                "genres": [x.strip() for x in re.split(r"[·／/]", genres) if x.strip()],
                "rank": rank, "note": note, "watch": int(year) >= 2025})
output.write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"wrote {len(items)} records")
