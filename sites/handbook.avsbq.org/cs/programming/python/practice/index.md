# Codewars

#### Remove all exclamatory signs

	def remove_exclam(s):
		return s.replace("!", "")

#### Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

	def even_or_odd(number):
	    if number % 2 == 0:
		return "Even"
	    else:
		return "Odd"

	even_or_odd(5)

#### DNA "ATTGC" --> "TAACG" "GTAT" --> "CATA"

	def DNA_strand(dna):
	    # code here
	    complement = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'}
	    return ''.join([complement[base] for base in dna])

	DNA_strand("ATTGC")

You can also do...

	def DNA_strand(dna):
	    translation_table = str.maketrans("ATCG", "TAGC")
	    return dna.translate(translation_table)

	print(DNA_strand("ATTGC"))


#### Count the number of Duplicates that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

*Example:*

	"abcde" -> 0 # no characters repeats more than once
	"aabbcde" -> 2 # 'a' and 'b'
	"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
	"indivisibility" -> 1 # 'i' occurs six times
	"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
	"aA11" -> 2 # 'a' and '1'
	"ABBA" -> 2 # 'A' and 'B' each occur twice

Program:

	def dup_count(s):
		
		# Converting string to lowercase, ensuring case-insensitivity
		s = s.lower()

		# Dictionary to count occurences of each character
		char_count = {}

		# Counting each character in string
		for char in s:
			if char in char_count:
				char_count[char] += 1
			else:
				char_count[char] = 1

		# Count how many characters have more than 1 occurence
		duplicates = 0
		for count in char_count.values():
			if count > 1:
				duplicates += 1
		
		return duplicates
	
	

# Coderbyte Practice

Answers from [zemadi](https://gist.github.com/zemadi/11071837), where answers were incorrect or inefficient I corrected and supplied my own

#### Have a function take the `str` parameter being passed and return the string in reverse order

    def FirstReverse(str):
        print str[::-1]

<details><summary>Explanation:</summary>

- `str[::-1]`:  is the slicing operation

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

    def FirstFactorial(num): 

      sum = 1
      count = 1
      while count <= num:
        sum = sum * count
        count += 1
      print sum

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

#### Have a function take the sen paramater and return the longest word in the string. If there are two or more words the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty

    def LongestWord(sen):
        test = sen.split(" ")
        greatest = test[0]

    for word in test:
        if len(word) > len(greatest):
        greatest = word
        print(greatest)

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

#### Have a function take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string and finally return this modified string

    def LetterChanges(s):
        lower = s.lower()
        
        newstring = ""
        lookup = "abcdefghijklmnopqrstuvwxyz"
        vowels = "aeiou"
        
        for letter in lower:
            if letter.isalpha():  # Only process alphabetic characters
                if letter == "z":
                    newstring += "A"
                else:
                    letter_index = lookup.index(letter)
                    next_letter = lookup[(letter_index + 1)]
                    if next_letter in vowels:
                        newstring += next_letter.upper()
                    else:
                        newstring += next_letter
            else:
                # Keep non-alphabet characters unchanged
                newstring += letter
        
        print(newstring)

    LetterChanges("Hello, World!") 


<details><summary>Explanation:</summary>
to-do
</details>

#### Have a function add up all the numbers from 1 to num. 

    def SimpleAdding(num):
        total = 0
        for number in range(1, int(num) + 1):  # Modified to include 'num'
            total += number
        print(total)  # Parentheses required

<details><summary>Explanation:</summary>
</details>

#### Add one and divide by two

From [021_two_step.py](https://github.com/makersacademy/intro-to-python/blob/main/021_two_step.py),

You can do...

    def two_step(num):
        added = num + 1
        halved = added / 2
        return halved

    print("two_step(5) is:")
    print(two_step(5))

You can do this with a single expression like...

    def two_step(num):
        return(num + 1)/2
    print(two_step(5))


#### Typecasting

    my_string = "five" + str(2)
    print(my_string)

#### Tell length

print(f"Your name is {len(my_name)} characters long")

# Exercises

#### Display even numbers from 1 to 10 and count how many even numbers

    count = 0
    for number in range(1, 10):
        if number % 2 == 0:
            count += 1
            print(number)
    print(f"We have {count} numbers")
