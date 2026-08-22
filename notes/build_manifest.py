#!/usr/bin/env python3
from pathlib import Path
import hashlib, json, mimetypes, subprocess

root = Path('/home/ubuntu/judas-extracted')
records = []
by_hash = {}
for p in sorted(root.rglob('*')):
    if not p.is_file():
        continue
    if p.name in {'INVENTORY.tsv', 'SHA256SUMS.txt', 'UNIQUE_FILES.tsv', 'TEXT_UNIQUE.tsv', 'IMAGE_UNIQUE.tsv', 'OTHER_UNIQUE.tsv'}:
        continue
    if p.name.endswith('.zip.processed'):
        continue
    data = p.read_bytes()
    digest = hashlib.sha256(data).hexdigest()
    try:
        kind = subprocess.check_output(['file', '-b', '--mime-type', str(p)], text=True).strip()
    except Exception:
        kind = mimetypes.guess_type(p.name)[0] or 'application/octet-stream'
    rec = {'path': str(p), 'size': len(data), 'sha256': digest, 'mime': kind}
    records.append(rec)
    by_hash.setdefault(digest, rec)

unique = sorted(by_hash.values(), key=lambda r: r['path'])
(root / 'MANIFEST.json').write_text(json.dumps({'total_files': len(records), 'unique_files': len(unique), 'files': records, 'unique': unique}, ensure_ascii=False, indent=2), encoding='utf-8')
with (root / 'UNIQUE_MANIFEST.tsv').open('w', encoding='utf-8') as f:
    f.write('sha256\tsize\tmime\tpath\n')
    for r in unique:
        f.write(f"{r['sha256']}\t{r['size']}\t{r['mime']}\t{r['path']}\n")
for name, predicate in [
    ('TEXT_MANIFEST.tsv', lambda r: r['mime'].startswith('text/') or r['mime'] in {'application/json', 'application/javascript', 'application/xml', 'text/x-diff'}),
    ('IMAGE_MANIFEST.tsv', lambda r: r['mime'].startswith('image/')),
    ('OTHER_MANIFEST.tsv', lambda r: not (r['mime'].startswith('text/') or r['mime'].startswith('image/') or r['mime'] in {'application/json', 'application/javascript', 'application/xml', 'text/x-diff'})),
]:
    with (root / name).open('w', encoding='utf-8') as f:
        f.write('sha256\tsize\tmime\tpath\n')
        for r in unique:
            if predicate(r):
                f.write(f"{r['sha256']}\t{r['size']}\t{r['mime']}\t{r['path']}\n")
print(json.dumps({'total_files': len(records), 'unique_files': len(unique), 'text_or_code': sum(1 for r in unique if r['mime'].startswith('text/') or r['mime'] in {'application/json','application/javascript','application/xml','text/x-diff'}), 'images': sum(1 for r in unique if r['mime'].startswith('image/')), 'other': sum(1 for r in unique if not (r['mime'].startswith('text/') or r['mime'].startswith('image/') or r['mime'] in {'application/json','application/javascript','application/xml','text/x-diff'}))}, ensure_ascii=False))
