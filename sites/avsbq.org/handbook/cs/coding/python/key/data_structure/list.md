# List

Last update: 2024/09/18

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

Would return, "['apple', 'banana']







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
