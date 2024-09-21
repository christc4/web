# Python Practice for Coding Assessment

*Last update: 2024/09/08*

<details><summary>Sources used:</summary>
[zemadi (coderbyte)](https://gist.github.com/zemadi/11071837)
</details>

#### Remove all exclamatory signs

<object data=".txt/remove_exclam.txt" width="255" height="72"></object>

#### Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

<object data=".txt/check_if_odd_or_even.txt" width="190" height="140"></object>

#### DNA 

<object data=.txt/dna1.txt></object>

You can also do...

<object data=.txt/dna2.txt></object>

#### Count duplicate no.

that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example:

<object data=.txt/count_duplicate_example.txt></object>

Program:

<object data=".txt/count_duplicate1.txt" width="500" height="320"></object>

<hr>

Double letters

Analyze a string to check if it contains two of the same letter in a row. For example, the string "hello" has l twice in a row, while the string "nono" does not have two identical letters in a ro

Function must return True if there are two identical letters in a row in the string, and False otherwise.

<object data=".txt/count_duplicate2.txt" width="248px" height="100px"></object>

#### Have a function take the `str` parameter being passed and return the string in reverse order

<object data=.txt/reverse_string.txt></object>

<details><summary>Explanation:</summary>

`str[::-1]`:  is the slicing operation

Slicing is a way to extract parts of sequences like strings, lists and tuples.

A general form of slicing is:

`sequence[start:stop:step]`

- `start`: index where the slice starts. If omitted, it defaults to the beginning of the sequence
- `stop`: index where the slice ends. If omitted, it defaults to the end of the sequence
- `step`: step (or stride) of the slicing. If omitted, it defaults to `1`

Back to `str[::-1]`

`start` is unspecified so it defaults to the string's beginning, nor is `stop`
so it defaults to the end of the string. `step` beeing `-1` means slicing is in reverse order    

Complete example

Calling the function such that `FirstReverse("Hello")`, `str[::-1]` reverses the string, producing `"olleH"`
</details>

#### Have a function take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18

<object data=.txt/factorial.txt></object>


<details><summary>Explanation:</summary>

What is a factorial?

The factorial of a number is the product of all positive integers from 1 up to that number. It's representation is (!).

The factorial of 4 (written as `4!`) is calculated as:

`4! = 4 x 3 x 2 x 1 = 24`

Initial setup

    sum = 1
    count = 1

- `sum`: variable is initialized to `1`, it'll store the reesult of the factorial calculation
- `count`: variable is initialized to `1`, it'll be used to keep track of the current number being multiplied in the loop

While loop

`while count <= num:`

This loop runs as long as `count` is less than or equal to `num`

Inside the loop

    sum = sum * count
    count += 1

- `sum = sum * count`: in each iteration of the loop, `sum` is multiplied by `count` and then updated with the new value, thus building up the factorial product

For example if `num = 4`, the operation goes through these steps:

- Initially, `sum = 1`
- When `count = 1`: `sum = 1 * 1 = 1`
- When `count = 2`: `sum = 1 * 2 = 2`
- When `count = 3`: `sum = 2 * 3 = 6`
- When `count = 4`: `sum = 6 * 4 = 24`

`count += 1`: after each multiplication, `count` is increased by `1`. This ensures that the loop eventually stops when `count` exceeds `num`

Example Usage

If you call the function such that `FirstFactorial(4)`

The loop will calculate

`4 * 3 * 2 * 1 = 24`

If you want the function to return the factorial instead of printing it, replace `print(sum)` with `return sum`
</details>

#### Return longest word

Have a function take the sen paramater and return the longest word in the string. If there are two or more words the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty

<object data=".txt/return_longest_word.txt" width="295" height="195"></object>

<details><summary>Explanation:</summary>

`Sen` is a string (sentence)

Splitting the sentence into words

`test = sen.split(" ")`: splits the sentence (`sen`) into a list of words using a space (`" "`) as the delimiter

For example: if `sen` is `"I love programming"`, then `test` will be `['I', 'love', 'programming']`

This variable now holds the list of words that were split from the sentence.

Initializing the longest word

`greatest = test[0]`

- `test[0]`: this refers to the first word in the list `test`
- `greatest`: variable iniatilized to the first word in the list. It'll be used to keep track of the longest word found so far

Looping through the words

    for word in test:
        if len(word) > len(greatest):
            greatest = word

`for word in test`: this loop iterates over each word in the `test` list

- `if len(word) > len(greatest)`: this checks if the current word (`word`) is longer than the word stored in `greatest`
    - `len(word`: this function returns the length of the current word
    - `len(greatest)`: this function returns the length of the longest word found so far
    - `greatest = word`: if the current word is longer than the word in `greatest`, the variable `greatest` is updated to the current word
</details>

#### Replace letter with next alphabetical letter

Have a function take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string and finally return this modified string

<object data=".txt/replace_letter_with_next_letter.txt" width="500" height="420"></object>

<details><summary>Explanation:</summary>
to-do
</details>

#### Have a function add up all the numbers from 1 to num. 

<object data=".txt/add_up_all_from_one_to_num.txt" width="400" height="110"></object>

#### Add one and divide by two

<object data=".txt/add_1_divide_by_2_v1.txt" width="240" height="110"></object>

You can do this with a single expression like...

<object data=".txt/add_1_divide_by_2_v2.txt" width="255" height="72"></object>

#### Typecasting

	my_string = "five" + str(2)

#### Tell length

	print(f"Your name is {len(my_name)} characters long")

# Exercises

#### Display even numbers from 1 to 10 and count how many even numbers

<object data=".txt/even_number_1_to_10.txt" width="255" height="120"></object>
