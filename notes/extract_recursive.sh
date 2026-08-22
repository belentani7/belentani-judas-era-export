#!/usr/bin/env bash
set -euo pipefail

ROOT_ZIP="${1:?falta ZIP raíz}"
OUT_DIR="${2:?falta directorio de salida}"
rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

unzip -q -o "$ROOT_ZIP" -d "$OUT_DIR/root"

round=0
while true; do
  round=$((round + 1))
  found=0
  while IFS= read -r -d '' zipfile; do
    found=1
    rel="${zipfile#$OUT_DIR/}"
    safe_rel="${rel//\//__}"
    target="$OUT_DIR/_unzipped_${round}_${safe_rel%.zip}"
    mkdir -p "$target"
    if unzip -q -o "$zipfile" -d "$target"; then
      mv "$zipfile" "$zipfile.processed" 2>/dev/null || true
    fi
  done < <(find "$OUT_DIR" -type f -iname '*.zip' -print0)
  if [ "$found" -eq 0 ]; then
    break
  fi
done

find "$OUT_DIR" -type f ! -name '*.zip.processed' -printf '%p\t%k KB\n' | sort > "$OUT_DIR/INVENTORY.tsv"
printf 'rounds=%s\nfiles=%s\ninventory=%s\n' "$round" "$(wc -l < "$OUT_DIR/INVENTORY.tsv")" "$OUT_DIR/INVENTORY.tsv"
