import sys, json
from graphify.detect import detect_incremental
from pathlib import Path

result = detect_incremental(Path('./docs'))
new_total = result.get('new_total', 0)
print(json.dumps(result, indent=2, ensure_ascii=False))
Path('graphify-out/.graphify_incremental.json').write_text(json.dumps(result, ensure_ascii=False), encoding="utf-8")
deleted = list(result.get('deleted_files', []))
if new_total == 0 and not deleted:
    print('\nNo files changed since last run. Nothing to update.')
    sys.exit(0)
if deleted:
    print(f'\n{len(deleted)} deleted file(s) to prune.')
if new_total > 0:
    print(f'\n{new_total} new/changed file(s) to re-extract.')
