<style>body { background: url(.pix/audrey.avif) no-repeat top left; }</style>

# Journal 

2024/09/22: cbox

I want to write a leaner 'feature-less' version of cbox

- no utf-8
- no user profiles
- no message filtering

Obvious features

- local history

<hr>

2024/09/24: _redacted_ is meeting me at my home to discuss: websites, computing, life amongst other things


- looking at other people's sites
	- [lukesmith](https://lukesmith.xyz/)
		- html entities
			- apostrophe?
			- utf-8, ndash (vim?), whitespace before tags
			- ndash 7 bytes, dash 1 byte
	
- what have I done to minimise?
	- 'minified' html
		- most static/dynamic sites minify *after*, I do not
			- 'echo -n', 'awk, printf'
	- href
		- '//' instead of 'http://'	
	- no ""

- is minification a fruitless endeavour?
	- will images offset any potential gains?
		- compare the favicon of [mo](https://mohdsaed.com) and [luke](https://lukesmith.xyz)
	- [asymptote](handbook/cs/coding/wolfram/asymptote)

- power ploy, coercion
	- https
		- [danluu](https://danluu.com/web-bloat/)
		- [xahlee](http://xahlee.info/w/why_no_https.html)
		- HTTP2 enforces encryption on all connections
		- out of date certs, browser warnings
	- domain registrar
		- TLD sneering
		- nike vs namebrand
		- yellow pages
			- yes... static IPS etc. 

- peeved at _redacted's_ idiot question
	- jog his memory, "Why do you have 1000 pages"
		- set of a chain-reaction
		- [answer](/blog/why/websites)
		- [2nd answer](/blog/offloading_parenting)

- werc
	- caching
		- /tmp/fltr_cache and sitemap.txt
	- suckless, anselm
	- current problem
		- percentage sign 

- things _redacted_ already knows
	- [metadata](http://95.179.238.202/archive/misc/cache/impact_of_metadata_on_image_performance/index)

- am I in a position to lecture
	- looking at my private talk show notes

<hr>

penitential prayer
