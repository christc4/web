# Range

<details><summary>Sources used:</summary>
[w3schools](https://www.w3schools.com/python/ref_func_range.asp), [freecodecamp](https://www.freecodecamp.org/news/python-range-function-example/)
</details>

The `range()` function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number

`range()` is mainly used when working with `for` loops - you can use it to loop through certain blocks of code a specified number of times

Negative values *can* be passeed to `range()` however float values *can not*

## Syntax

range(_start,  stop, step_)

## Parameter Values

- _start_
    - optional, an integer number specifying at which position to start, default is 0
- _stop_
    - required, an integer number specifying at which position to stop (not inculded
- _step_
    - optional, an integer number specifying the incrementation, default is 1

## Examples

#### A basic example

    x = range(6)
    for n in x:
        print(n)

#### Sequence of no. from 3-5, print each item in seq.

    x = range(3, 6)
    for n in x:
        print(n)

#### Seq. of no. from 3-19, but increment by 2 instead of 1

    x = range(3, 20, 2)
    for n in x:
        print(n)


#### Counting

    for num in range(3):
        print(num)
    # Output
    # 0
    # 1
    # 2
    # 3
    # 4

The function starts counting from 0, incremented by 1 on each iteration and ended at 4

#### How to Use the range() Function with the start And stop Arguments

    for num in range(5, 11):
        print(num)   
    # output
    # 5
    # 6
    # 7
    # 8
    # 9
    # 10

#### Create a list of numbers using the `range()` function

You can create a list of numbers by passing the `range()` function as an argument to the `list()` constructor,

    number_list = list(range(5))
    print(number_list)

### Use the `len()` function with `range()` 

Say you've got a list of items and want to do something to the items depending on how long the list is,

