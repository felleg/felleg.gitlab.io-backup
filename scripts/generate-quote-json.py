import json
import re

def generate_quotes_json(markdown_file, output_json_file):
    with open(markdown_file, 'r') as file:
        content = file.read()

    books = re.findall(r'# #\d+:  (.+?)\n{{< figure src="(.+?)" position="center" caption="\[Link to review .+?\]\((.+?)\)"', content)
    book_quotes = {}

    for book, img_src, link in books:
        quotes_section = re.split(r'# #\d+:  .+?\n{{< figure', content)[1:]
        for section in quotes_section:
            print(section)
            if book in section:
                quotes = re.findall(r'\d+\. \(p\. (\d+)\) (.+?)(?=\n\d+\. \(p\. \d+\)|$)', section, re.S)
                formatted_quotes = [{"page": page, "quote": text.strip()} for page, text in quotes]
                book_quotes[book] = {
                    "link": link,
                    "image": img_src,
                    "quotes": formatted_quotes
                }
                break

    with open(output_json_file, 'w') as json_file:
        json.dump(book_quotes, json_file, indent=4, ensure_ascii=False)

generate_quotes_json('content/posts/star-quotes.md', 'static/quote/quotes.json')

