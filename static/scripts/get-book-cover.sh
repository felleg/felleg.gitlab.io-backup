BOOK=$1
pdftoppm -png -f 1 -l 1 books/$BOOK.pdf output-images
mv output-images* img/books/$BOOK.png
