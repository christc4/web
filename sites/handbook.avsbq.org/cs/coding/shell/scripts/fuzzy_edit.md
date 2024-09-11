#  Fuzzily edit files

*Last update: 2024/04/11*

*Dependencies*:

- [bat](https://github.com/sharkdp/bat) (OPTIONAL)
	- a cat(1) clone with wings

- [fd](https://github.com/sharkdp/fd) (OPTIONAL)
	- a simple, fast and user-friendly alternative to 'find'

- [fzf](https://junegunn.github.io/fzf/tips/ripgrep-integration/)
	- a command-line fuzzy finder

A much faster way to edit files

<hr>

<object data=".txt/fuzzy_edit1.txt" width="600" height="210"></object>

## Alternatives

You can change 'vim' to '$EDITOR'

If you want more color in your life, try 'bat' instead of 'cat'

	bat --style=numbers --color=always --line-range :500 {}

## explanation

this script excludes everything that's in a '.git' directory and excludes images or uneditable documents

## Revised v1.1

<object data=".txt/fuzzy_edit2.txt" width="600" height="272"></object>
