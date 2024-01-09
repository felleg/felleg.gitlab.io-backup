#!/bin/bash

# Output HTML file
mkdir -p static/allbooks
output_file="static/allbooks/index.html"

# Create the HTML file with a basic structure
echo "<html><head><title>All Books</title></head><body>" > "$output_file"

# Loop over files in content/books in order of creation
for file in $(ls -r content/books/*); do
    # Extract the line containing "cover:"
    covers_line=$(grep "cover:" "$file")

    # Extract the cover image path
    cover_path=$(echo "$covers_line" | awk '{print $2}')

    # Extract the book title
    title=$(grep "title:" "$file" | awk '{$1=""; print substr($0,2)}')

    # Extract the post link from the file name (assuming YYYY-MM-DD-title.md format)
    post_link=/books/$(basename ${file%%.md})

    # Append HTML content for each book cover with adjusted image size and inferred link
    echo "<a href=\"$post_link\"><img src=\"/$cover_path\"
    alt=\"$title\" style=\"width: auto; max-height: 200px;\"></a>" >> "$output_file"
done

# Close the HTML file
echo "</body></html>" >> "$output_file"

echo "HTML file generated: $output_file"

