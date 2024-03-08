#!/bin/bash

# Output HTML file
mkdir -p static/allreads
output_file="static/allreads/index.html"

# Create the HTML file with a basic structure
echo "<html><head><title>All Reads</title></head><body>" > "$output_file"

cat > "$output_file" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Reads</title>
    <style>
        /* Add some basic styling to center the loading spinner */
        #loading-spinner {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    </style>
</head>
<body>
    <!-- Add a container for the loading spinner -->
    <div id="loading-spinner">
        <img src="/img/loading.gif" alt="Loading...">
    </div>

    <div id="image-container" style="display: none;">
    <a href="/"><img src="/img/logo-home.png"></a><br>
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
    echo "<a href=\"$post_link\"><img src=\"/${cover_path%%.*}-scaled.png\" title=$title style=\"width: auto; max-height: 200px;\"></a>" >> "$output_file"

    # Create a scaled image
    scaled_path=$(pwd)/public/${cover_path%%.*}-scaled.png
    # Source: https://stackoverflow.com/a/12329592/5565172
    convert static/$cover_path -scale x200 -sharpen 0x1.2 -quality 95 $scaled_path
    ln -f -s $scaled_path static/img/reads
done

# Close the HTML file
cat >> "$output_file" << EOF
    </div>

    <script>
        // Add an event listener for when all images have finished loading
        window.onload = function () {
            // Hide the loading spinner
            document.getElementById('loading-spinner').style.display = 'none';
            // Show the image container
            document.getElementById('image-container').style.display = 'block';
        }
    </script>
    <a href="/"><img src="/img/logo-home.png"></a><br>
</body>
</html>
EOF

echo "HTML file generated: $output_file"

