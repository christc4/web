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

# Example usage:
LetterChanges("Hello, World!")  # Outputs: "Ifmmp, XpsmE!"

