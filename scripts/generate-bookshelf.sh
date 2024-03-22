#!/bin/bash
cd ..

# Output HTML file
output_file="content/bookshelf.md"

# Create the HTML file with a basic structure
cat > "$output_file" << EOF
---
title: "The Bookshelf"
bookshelf_item:
EOF

# Loop over files in content/reads in order of creation
for file in $(ls -r content/reads/*); do
    # Extract the line containing "cover:"
    covers_line=$(grep "cover:" "$file")

    # Extract the cover image path
    cover_path=$(echo "$covers_line" | awk '{print $2}')

    # Extract the book title
    title=$(grep "title:" "$file" | awk '{$1=""; print substr($0,2)}')

    # Extract the post link from the file name (assuming YYYY-MM-DD-title.md format)
    post_link=/reads/$(basename ${file%%.md})

    # Append HTML content for each book cover with adjusted image size and inferred link
    title_no_read=$(echo "$title" | cut -d ')' -f 2)
    cat >> "$output_file" << EOF
  - title: "${title_no_read%\"}"
    cover_img: /${cover_path%%.*}-scaled.png
    cover_link: $post_link
    author: Author
EOF

    # Create a scaled image
    scaled_path=$(pwd)/public/${cover_path%%.*}-scaled.png
    # Source: https://stackoverflow.com/a/12329592/5565172
    convert static/$cover_path -scale x200 -sharpen 0x1.2 -quality 95 $scaled_path
    ln -f -s $scaled_path static/img/reads
done

# Close the HTML file
cat >> "$output_file" << EOF
---

{{< bookshelf >}}

Thanks to [@bhdicaire](bhdicaire.com),
[@kjrstory](https://github.com/kjrstory/hugo-shortcode-bookshelf) and
[@petargyurov](https://github.com/petargyurov/virtual-bookshelf) for
making this display possible. :heart:
EOF

echo "Bookshelf generated."
cd -
