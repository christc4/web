# List

Last update: 2024/09/27

<details><summary>Sources used:</summary>
[pynative](https://pynative.com/python-list-exercise-with-solutions/#h-exercise-1-reverse-a-list-in-python), [Bro Code](https://youtu.be/gOMW_n2-2Mw?si=IiLTo-hlEzSLWDEC)
</details>

## Basics

A collection is a single "variable" used to store *multiple* values

List = [] ordered and changeable. Duplicates OK

A list looks like this

	fruits = ["apple", "orange", "banana", "coconut"]

To access one of the elements found in 'fruits'

First element.. would be

	print(fruits[0])

and so on...

If you try to access a non-existant value say

	print(fruits[4])

You'll get the error, "IndexError: list item out of range"

With the index operator you could set a beginning, ending and step index

	print(fruits[0:3])

Technically, you can omit '0'

For a step, every second element beginning from index 0

	print(fruits[::2])

Would return, "['apple', 'banana']"

Going backwards,

	print(fruits[::-1])

Would return, "['coconut', 'banana', 'orange', 'apple']"

To iterate over a list,

	for fruit in fruits:

*note*: 'fruit' can be named anything, 'x', 'thing' etc. fruit is descriptive and isn't mandatory but a common naming convention

Get length of a list,

	print(len(fruits))

'4' would be returned

Using the "in" operator we could find if a value was in a collection

	print("apple" in fruits)

Returns "True", whereas

	print("pineapple" in fruits)

Returns "False" as it isn't a value in the list

Remember the very beginning, what we said about lists...

Lists are ordered and changeable. Duplicates OK

We can change one of the values even after we create our list

	fruits[0] = "pineapple"

If you iterate over the list now and print, you'll see pineapple is now the first value in the list

To add an element to the end of the list use the append method

	fruits.append("pineapple")

To remove an element use the remove method

	fruits.remove("apple")

To insert a value at a given index use the insert method

	fruits.insert(0, "pineapple")

To sort in alphabetical order

	fruits.sort()

To reverse a list, non alphabetically but in the order we placed them

	fruits.reverse()

If you'd like reverse *alphabetical* order you can first sort then reverse

To clear a list use the clear method

	fruits.clear()

To return the index of a value,

	fruits.index("apple")

Which would be 0. If we don't find a value we get an error, "ValueError: "pineapple" is not in the list"

Duplicates are OK,

	fruits.count("pineapple")

Would return 0




## Examples

Reverse list

<object data=".txt/reverse_list.txt" width="264px" height="60px"></object>

Alternate solution, using slicing

<object data=".txt/negative_slicing_list.txt" width="264px" height="60px"></object>

<hr>

Add two lists index-wise. Create a new list that contains the 0th index item from both the list, then the 1st index item, and so on till the last element. any leftover items will get added at the end of the new list.

<object data=".txt/cat_lists_index_wise.txt" width="360px" height="80px"></object>

	['My', 'name', 'is', 'Kelly']

This is the output

<hr>

Given a list of numbers. write a program to turn every item of a list into its square

<object data=".txt/list_to_square.txt" width="256px" height="100px"></object>

Alternate solution, using list comprehension

<object data=".txt/list_comprehension_square.txt" width="288px" height="60px"></object>

<hr>

<object data=".txt/cat_2_lists_in_following_order.txt" width="344px" height="80px"></object>
