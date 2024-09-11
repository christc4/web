# Strings

<details><summary>Sources used:</summary>
[Xah Lee, python tutorial](http://xahlee.info/python/quoting_strings.html)
</details>

<hr>

Strings are sequence of characters

In Python 3, they're a sequence of [Unicode](http://xahlee.info/comp/unicode_intro.html) characters

In Python 2 they're a sequence of bytes (representing [ASCII Characters](http://xahlee.info/comp/ascii_chars.html). But if prefixed with 'u', then it's a sequence of Unicode characters.

Python strings are immutable. Any function that works on a string returns a new string

<hr>

note = "The Most Perfect Crab"
print(note)

Access 1st character
    
`print(note[0])`

Access the last character

`print(note[-1])`

If you have four characters, it goes from 0, 1, 2, 3

negativeIndex = originalIndex - len(string)

Middle, not the first or last

`print(note[6])`

`print(note[0:3])`

This gets the portion of the string between index 0 and 3:

## Uppercase

## Convert

    my_string = "Forty" + str(2)
    print(my_string)

## Lists

my_favourite_numbers = [1, 3, 5, 7, 9]
my_friends = ["Victoria", "Mel", "Melanie", "Emma"]

## List indexing

my_list = [44, 35, 21, 63]
my_list[0]   # Evaluates to 44
my_list[-1]  # Evaluates to 63
my_list[1:3] # Evaluates to [35, 21]

## Count uppercase letters


