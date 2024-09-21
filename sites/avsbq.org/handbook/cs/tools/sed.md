# Sed

Tested on OpenBSD 7.5

## Removing all instances of the "<" sign

	sed -i 's/>//g' yourfile.md

- `-i` tells sed to edit the file, rather than output modified text to standard outputA
- `s` stands for substitution
- `//` The replacement string is between the second and third slashes. Since there is nothing between these slashes, sed replaces > with nothing 
- `g` stands for global, replacing every instance

## Change all instances of a string

	sed -i 's/webp/avif/g' filename

Creates backup

	sed -i.bak 's/webp/avif/g' filename

## Remove the pattern "../"

	sed -i 's/\.\.\///g' filename.html

## Misc

	sed -i 's/\<str\>/gif/g' filename.html

s/\<str\>/gif/g: Substitute (s) str with gif, where \< and \> ensure that only the exact word str is replaced, not occurrences where str is a part of another word.
