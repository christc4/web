# Fuzzily grep

*Last update: 2024/09/09*

*Note to reader:* This uses 'ripgrep' not traditional unix-grep

<hr>

These are other people's script 

Below are all from: [hackernews](https://news.ycombinator.com/item?id=38471822)

#### zhs

	imakira: I wrote a bash version of this

<object data=".txt/imakira_zsh_fuzzy_grep.txt" width="490" height="250"></object>

#### fish

	aissen: I wrote a fish version, and simplified it:

<object data=".txt/aissen_fish_fuzzy_grep.txt" width="490" height="250"></object>

	Still not a fan of the string-based injections based on the colon and newline characters, but all versions suffer from it. (also: nice that fzf does the right thing and prevents space and quote injection by default).

#### powershell 

	stinos: It's fast indeed. And I can't help keeping promoting the combination with fzf :) For those who want to try it out, this is a Powershell function but the same principle applies in any shell. Does ripgrep then puts fuzzy searching in the resulting files+text on top while showing context in bat:

<object data=".txt/stinos_powershell_fuzzy_grep.txt" width="490" height="220"></object>

	There are other ways to approach this, but for me this is a very fast way of nailing down 'I now something exists in this multi-repo project but don't know where exactly nor the exact name'  edit this comes out of https://github.com/junegunn/fzf/blob/master/ADVANCED.md and even though you might not want to use most of what is in there, it's still worth glancing over it to get ideas of what you could do with it

