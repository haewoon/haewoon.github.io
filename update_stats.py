#!/usr/bin/env python3
"""Refresh the citation/h-index numbers from the SoDA Lab cache.

Reads the lab repo's scholar_cache.json (which the lab's weekly cron keeps up
to date via the `scholarly` library) and rewrites src/data/scholar.json, which
the home page renders. The page markup is never touched.

Usage:
    python3 update_stats.py             # print diff, write if changed
    python3 update_stats.py --dry-run   # show what would change, no write

Paths are resolved relative to this script, so it just works from anywhere
as long as the lab repo sits next to this one (Projects/soda-labo-astro/).
"""
import json
import sys
from datetime import date
from pathlib import Path

HERE = Path(__file__).resolve().parent
STATS = HERE / "src" / "data" / "scholar.json"
LAB_CACHE = (HERE / ".." / "soda-labo-astro" / "web" / "src" / "data" /
             "scholar_cache.json").resolve()
SCHOLAR_KEY = "haewoon_kwak"

MONTHS = ("January February March April May June July August September October"
          " November December").split()


def main() -> int:
    dry = "--dry-run" in sys.argv
    if not LAB_CACHE.exists():
        print(f"ERROR: lab cache not found at {LAB_CACHE}", file=sys.stderr)
        return 1

    info = json.loads(LAB_CACHE.read_text()).get(SCHOLAR_KEY)
    if not info:
        print(f"ERROR: {SCHOLAR_KEY} missing in lab cache", file=sys.stderr)
        return 1

    today = date.today()
    fresh = {
        "citations": info.get("total_citations") or 0,
        "h_index": info.get("h_index") or 0,
        "updated": f"{MONTHS[today.month - 1]} {today.year}",
    }

    current = json.loads(STATS.read_text()) if STATS.exists() else {}
    summary = (f"{fresh['citations']:,} citations, h-index {fresh['h_index']}"
               f" ({fresh['updated']})")

    if current == fresh:
        print(f"No change. Current: {summary}")
        return 0

    print(f"New stats: {summary}")
    if dry:
        print(f"(dry-run) {STATS.name} NOT modified. Pass without --dry-run to write.")
        return 0

    STATS.write_text(json.dumps(fresh, indent=2) + "\n")
    print(f"✓ Wrote {STATS.relative_to(HERE)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
