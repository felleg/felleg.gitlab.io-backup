---
date: 2024-06-24T03:23:26-04:00
exclude_from_star_quotes: true
title: "(Read 87) Star Quotes"
cover: img/reads/star-quotes.png
amzcover: /img/reads/star-quotes.png
author: Félix Léger
tags:
  - 'reads'
  - 'nonfiction'
  #- 'fiction'
aliases:
  - '/87'
draft: true
number: 87
rating: 🙋🏻‍♂️


---

Release year: 2024

Author: [Félix Léger](/)

---

# Review

# [Link to free full text](/star-quotes/)

This is a pretty self-explanatory concept. This "book" is a compilation
of all the star quotes you can find on my website
(https://felixleger.com/books). I don't expect much people to read
this in its entirety: it might feel like trying to drink from a
fire hose. Attempt at your own peril! :smile: It's a convenient way
for me to quickly `Ctrl-F` information. Feel free to try it out too,
you might find something useful!

The full text of the book is
actually created using GitLab's CI/CD and a little bash script of my
own creation:

```bash
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
	echo "\n# #$number: $title" >> "$output_file"
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
```

{{< myrating rating="🙋🏻‍♂️ " >}}
