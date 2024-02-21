#!/bin/bash

# Directory containing your photos
PHOTO_DIR="photos"

# Generate the photos array
PHOTOS=$(find "$PHOTO_DIR" -type f \( -iname \*.png -o -iname \*.jpg \))

# Format the photos array for JavaScript
PHOTO_ARRAY=$(echo "$(basename $PHOTOS)" | sed 's/\(.*\)/"\/name-that-portage-cybertech-employee-243987978423987fsdalksadflqrweoyzv\/photos\/\1",/' | tr '\n' ' ' | sed 's/,$//')

# Replace the photos array in script.js
sed -i "s|let photos.*|let photos = \[$PHOTO_ARRAY\];|" script.js

HOW_MANY_PHOTOS=$(ls $PHOTO_DIR | wc -l)
sed -i "s|let n_photos.*|let n_photos = $HOW_MANY_PHOTOS;|" script.js
