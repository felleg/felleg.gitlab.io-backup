#!/bin/bash

# Check if a filename is provided as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 filename"
  exit 1
fi

# Read the file and extract words starting with #
# Using grep to find words starting with #
# Using awk to extract those words
# Converting to lowercase using tr
# Excluding words that are numbers using grep
# Using sort to sort them
# Using uniq -c to count occurrences
# Using sort to sort by count in descending order

grep -oE '\#[a-zA-Z0-9_]+' "$1" | tr '[:upper:]' '[:lower:]' | grep -vE '\#[0-9]+' | sort | uniq -c | sort -n

