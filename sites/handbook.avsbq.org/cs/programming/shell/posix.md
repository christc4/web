# Learn & Understand POSIX shell

*Last update: 2024/09/05*

<details><summary>Please read:</summary>
All credit goes to: [grymoire.com](https://www.grymoire.com/Unix/Sh.html#uh-3), [drewdevault.com](https://drewdevault.com/2018/02/05/Introduction-to-POSIX-shell.html), [standard](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html)

These are my personal study notes, I do not claim the examples or definitions below as originally authored by myself. 
</details>

## What is POSIX?

POSIX (Portable Operating System Interface) is *the* standard UNIX shell - standard as in formally defined and shipped in a published standard, making shell scripts written for it portable. POSIX, is essentially a formalized version of Bourne.

It is found in /bin/sh, although it may be symlinked to bash

### Command substitution

Back quotes aren't used to prevent interpretation of special characters it *instead* has a special use - _command substitution_. The string between backquotes is executed by the shell, and the results *replace* the backquoted string:

	$ echo 'The current directory is `pwd`'
	The current directory is `pwd`
	---
	$ echo 'The current directory is \`pwd\`'
	The current directory is \`pwd\`
	---
	$ echo "The current directory is `pwd`"
	The current directory is /home/avsbq
	---
	$ echo "The current directory is \`pwd\`"
	The current directory is `pwd`

This feature hail from earlier shells (C and Bourne). This has a major problem - command substitution cannot be nested. A new mechanism was created for command substitution, which replaces the back quotes:

`$(command)`

Using the above, the previous examples would be:

	$ echo 'The current directory is $(pwd)'
	The current directory is $(pwd)
	---
	$ echo "The current directory is $(pwd)"
	The current directory is /home/avsbq
	---
	$ echo "The current directory is \$(pwd)"
	The current directory is $(pwd)

An example command substitution of adding one to the current year.

	YEAR="$(date +%Y)"
	YEAR="$(expr $YEAR + 1)"
	echo "next year is $YEAR"

Alternatively we can use nest expressions:

	echo "next year is $(expr $(date +%Y) + 1)"

This was *not* possible using back quotes
