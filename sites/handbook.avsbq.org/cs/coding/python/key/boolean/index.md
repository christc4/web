# Boolean

<details><summary>Sources used:</summary>
[Xah Lee, Python Tutorial](http://xahlee.info/python/true_false.html)
</details>

<hr>

True and false are literal values of boolean type

	print(type(True))  # <class 'bool'> print(type(False))  # <class 'bool'>

<hr>

What Value evaluates to True?

In a if statement,

- non-empty things, and number 1, eval to True
- None, zero and empty things eval to False

The following evaluates to False:

- False: A builtin literal expression
- None: A builtin literal expression
- 0
- 0.0: Zero, float  
- "": Empty string
- []: Empty list
- (): Empty tuple
- {}: Empty dictionary
- set([]): Empty set
- frozenset([]): Empty frozen set

.

<hr>

You can use the function 'bool' to test

<object data=".txt/bool_test_true_false.txt" width="255" height="172"></object>
