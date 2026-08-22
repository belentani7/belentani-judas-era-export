#!/usr/bin/env bash
set -euo pipefail
OUT=/home/ubuntu/webdev-static-assets/judas-zip/gallery
mkdir -p "$OUT"
cat > "$OUT/source-links.tsv" <<'EOF'
01	venom.jpg	https://files.catbox.moe/rt1p03.jpg
02	gaze.png	https://files.catbox.moe/943t1r.png
03	archive-03.jpg	https://files.catbox.moe/rt1p03.jpg
04	warrior-angel.jpg	https://files.catbox.moe/kmtlco.jpg
05	judas-rain.jpg	https://files.catbox.moe/h0wamv.jpg
06	st-peter-jacket.jpg	https://files.catbox.moe/d2c8e5.jpg
07	judas-trinity.jpg	https://files.catbox.moe/y8kuk4.jpg
08	neon-tubes.jpg	https://files.catbox.moe/8s1v5g.jpg
09	snake-kiss.jpg	https://files.catbox.moe/tf46wf.jpg
10	space-ship.jpg	https://files.catbox.moe/xryj7d.jpg
11	face-model.png	https://files.catbox.moe/iobmrn.png
12	sci-fi-lab.jpg	https://files.catbox.moe/kmtlco.jpg
EOF
while IFS=$'\t' read -r id filename url; do
  [ -z "$id" ] && continue
  if [ ! -s "$OUT/$filename" ]; then
    curl -fL --retry 2 --connect-timeout 15 --max-time 90 "$url" -o "$OUT/$filename"
  fi
done < "$OUT/source-links.tsv"
for f in "$OUT"/*.{jpg,png}; do
  [ -e "$f" ] || continue
  printf '%s\t' "$(basename "$f")"
  file -b "$f"
done > "$OUT/download-manifest.tsv"
cat "$OUT/download-manifest.tsv"
