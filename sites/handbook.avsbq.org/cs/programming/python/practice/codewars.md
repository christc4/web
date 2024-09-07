# Codewars

## Remove all exclamatory signs

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
	
	


