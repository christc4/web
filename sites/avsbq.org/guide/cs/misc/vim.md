# Vim tutorial

<img src="/.pix/vim_cigarretes.avif" style="width:550px; height: auto;">

This is my .vimrc

<object data=".txt/vimrc.txt" width="255" height="72"></object>

## What you MUST do

### No. 1

Stop using default keybinds to save a file, don't bother with 

To default save a file one has to...

- hold shift
- press ':'
- enter 'w'

if you are not already in escape mode one has to 

- press 'esc'

that is too many keypresses,

even 'ZZ' is no good  

# Useful

- `gj` and `gk`
	- move cursor up and down to wrapped part of a line
- `g0` and `g$`
	- move cursos te first and last letter of wrapped line
- `gq`
	- turn long line into multiple lines
- `gu` and `gU` 
	- uncapitalize and capitalize words/lines
- `~` and `g~`
	- switch capitalization of a letter
- `gf` 
	- open highlighted text as file
- `gv`
	- reselect previous selected text
- `gJ`
	- conjoining lines without leaving spaces
- `g&` 
	- re-run substitute command for all lines

- `<`
	- remove indent, first highlight

- `>` 
	- apply indent, firsh highlight

Vim includes a man page viewer, :Man , in its runtime files. Even better, you can just place your cursor on a word in the buffer and press <Leader>K ( \K ) to see the man page for that word.24 May 2013

## Replacement

	:%s/<B>/\*/g

This replaces all instances of <code><B></code> with <code>*</code>

	%s/

Starts the substitution command and <code>%</code> says it should operate on all lines in the file

	\*: This is the replacement text. Note the use of \ before * to escape it, as * is a special character in Vim's replacement syntax.

g, tells viim to replace all occurences

	:%s/<\/B>/\*/g

<\/B>: This is the text you want to replace. The \/ escapes the / character so that it is treated as a literal part of the text to search for.

:%s/<P>//g
this removes all instances // is replacement text, meaning p will be reeplaced with nothing

:%s/<\/P>//g

:%s/&#9;/ /g

:%s/<\/FONT><FONT FACE="Courier New" SIZE=2>//g
:%s/<\/FONT><FONT \(FACE="Courier New" SIZE=2\|SIZE=2\)//g
:%s/<\/FONT><FONT FACE="Courier New" SIZE=2>//g
:%s/<\/FONT><FONT SIZE=2>//g

