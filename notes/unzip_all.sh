#!/bin/bash
DIR="/home/ubuntu/extracted_judas"
while [ "$(find "$DIR" -name "*.zip" | wc -l)" -gt 0 ]; do
    find "$DIR" -name "*.zip" -exec unzip -o "{}" -d "$(dirname "{}")" \; -exec rm "{}" \;
done
find "$DIR" -type f
