# While loops

<details><summary>While loops</summary>
[w3schools](https://www.w3schools.com/python/python_while_loops.asp)
</details>

There are two varieties of control flows, `for` and `while` loops

    i = 1
    while i < 6:
        print(i)
        i += 1

> *NOTE:* remember to increment i (`i += 1`), or else the loop will continue forever

    i = 0
    while i < 10
        print(f"The number is now {i}")
        i = i + 1

`i = 0` is the counter variable

The `while` loop is like an `if`, in that it takes an expression that evaluates to True or False, and then executes its block of code if the condition is True. However, the `while` loop is different in that it keeps repeatedly executing the block for as long as the condition is True.

## The break statement

With a `brake` statement the loop can be stopped even if the `while` condition is true:

Exit the loop when `i` is 3:

i = 1
while i < 6:
    print(i)
    if i == 3:
        break
    i += 1


## Cats

    print("")
    print("Function: add_cats_repeatedly")

    # Write a function that adds the item "cats" to the given
    # word_list, repeatedly, a number of times defined by the
    # given count parameter.
    # Example:
    #    add_cats_repeatedly([], 3)
    # => ['cats', 'cats', 'cats']

    def add_cats_repeatedly(word_list, count):
        for _ in range(count):
            word_list.append("cats")
        return word_list

    # Test cases
    print(add_cats_repeatedly([], 3))  # ['cats', 'cats', 'cats']
    print(add_cats_repeatedly(['dogs'], 2))  # ['dogs', 'cats', 'cats']
    print(add_cats_repeatedly([], 0))  # []

