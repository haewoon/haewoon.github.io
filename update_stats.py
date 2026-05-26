#!/usr/bin/env python3
"""Refresh the citation/h-index numbers on index.html from the SoDA Lab cache.

Reads the lab repo's scholar_cache.json (which the lab's weekly cron keeps up
to date via the `scholarly` library) and rewrites the <strong data-stat="...">
spans on this site so the personal page stays in sync without its own
Google-Scholar fetch.

Usage:
    python3 update_stats.py             # print diff, write if changed
    python3 update_stats.py --dry-run   # show what would change, no write

Paths are resolved relative to this script, so it just works from anywhere
as long as the lab repo sits next to this one (Projects/soda-labo-astro/).
"""
import json
import re
import sys
from datetime import date
from pathlib import Path

HERE = Path(__file__).resolve().parent
INDEX = HERE / "index.html"
LAB_CACHE = (HERE / ".." / "soda-labo-astro" / "web" / "src" / "data" /
             "scholar_cache.json").resolve()
SCHOLAR_KEY = "haewoon_kwak"

MONTHS = ("January February March April May June July August September October"
          " November December").split()


def format_int(n: int) -> str:
    return f"{n:,}"


def replace_stat(html: str, name: str, value: str) -> tuple[str, bool]:
    """Rewrite the inner text of <... data-stat="name">OLD</...>."""
    pattern = re.compile(
        rf'(<[^>]*\bdata-stat="{re.escape(name)}"[^>]*>)([^<]*)(</[^>]+>)'
    )
    changed = [False]
    def sub(m):
        old = m.group(2)
        if old == value:
            return m.group(0)
        changed[0] = True
        return f"{m.group(1)}{value}{m.group(3)}"
    return pattern.sub(sub, html, count=1), changed[0]


def main() -> int:
    dry = "--dry-run" in sys.argv
    if not LAB_CACHE.exists():
        print(f"ERROR: lab cache not found at {LAB_CACHE}", file=sys.stderr)
        return 1

    info = json.loads(LAB_CACHE.read_text()).get(SCHOLAR_KEY)
    if not info:
        print(f"ERROR: {SCHOLAR_KEY} missing in lab cache", file=sys.stderr)
        return 1

    citations = info.get("total_citations") or 0
    h_index = info.get("h_index") or 0
    today = date.today()
    updated = f"{MONTHS[today.month - 1]} {today.year}"

    html = INDEX.read_text()
    html, c1 = replace_stat(html, "citations", format_int(citations))
    html, c2 = replace_stat(html, "h_index", str(h_index))
    html, c3 = replace_stat(html, "updated", updated)

    if not (c1 or c2 or c3):
        print(f"No change. Current: {citations:,} citations, h-index {h_index} ({updated})")
        return 0

    print(f"New stats: {citations:,} citations, h-index {h_index} ({updated})")
    if dry:
        print("(dry-run) index.html NOT modified. Pass without --dry-run to write.")
        return 0

    INDEX.write_text(html)
    print(f"✓ Wrote {INDEX.relative_to(HERE.parent)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
