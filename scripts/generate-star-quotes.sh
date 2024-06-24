output_file=content/posts/star-quotes.md
trigger_str="# :star: Star quotes"
source_files=content/reads/*.md
cat <<EOF > $output_file
---
title: "Star Quotes"
date: $(date +"%Y-%m-%dT%H:%M:%S")
toc: true
cover: img/reads/star-quotes.png
tags:
  - untagged
aliases:
  - /star-quotes
description: Here are the best quotes I came across in my lectures.
---

# Introduction

Star Quotes is what I am left when I finish reading a book. Whenever I
add a new book in my [bookshelf](/bookshelf), I make sure to
include the star quotes from that book in there, next to a review ([example](/latest)).

This "book" is a compilation
of all the star quotes you can currently find on my website
(https://felixleger.com/books) as of today. I don't expect much people to read
this in its entirety: it might feel like trying to drink from a
fire hose. Attempt at your own peril! :smile: It's a convenient way
for me to quickly \`Ctrl-F\` information. Feel free to try it out too,
you might find something useful!

I hope you will get enjoyment from this dynamic collection!

=L

$(date)

## P.S.

Yes, rather unconventionally, this book begins on chapter 11. That's
the results of my constantly evolving learning system. I unfortunately did
not start keeping useful notes of my lectures until into book 11, which
happens to be Team Topologies. Technically, I could have begun at chapter
1, but I wanted to keep the same numeration as the one from my
[bookshelf](/bookshelf), the reason being that, for any book on my
bookshelf, if you visit \`https://felixleger.com/##\`, where \`##\` is the
number of the book, you will directly be taken to the review I wrote for
it, including its star quotes. :smile: I hope this feature makes the confusion
slightly more worth it. Another reason why a number got skipped is because I
was not able to identify a star quote in the book related to that number.

---

EOF

for input in $(ls $source_files); do
	echo $input
	input_file="$input"
	number=${input_file#*-}
	number=${number%%-*}



	if [[ $(grep "exclude_from_star_quotes: true" $input) ]]; then
	continue;
	fi

	title=$(grep "title:" "$input_file" | awk '{$1=""; print substr($0,2)}')
	title=$(echo "$title" | cut -d ')' -f 2)
	cover=$(grep "^cover:" "$input_file")
	cover=$(echo "$cover" | cut -d ' ' -f 2)
	echo -e "\n# #$number: $title" >> "$output_file"
	echo "{{< figure src=\"/$cover\" position=\"center\" caption=\"[Link to review](/$number)\" style=\"height: 400px; width: auto;\" >}}" >}} >> "$output_file"

	# Flag to indicate whether to start writing to output_file
	write_to_output=false

	# Read the input file line by line
	while IFS= read -r line; do
		# Check if the line contains the specific string
		if [[ $(echo "$line" | grep "$trigger_str") ]]; then
			write_to_output=true
			continue
		fi

		# If the flag is set, write the line to the output file
		if $write_to_output; then
			echo "$line" >> "$output_file"
		fi
	done < "$input_file"
done


