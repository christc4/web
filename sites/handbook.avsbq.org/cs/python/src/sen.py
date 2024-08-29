def LongestWord(sen): 
    test = sen.split(" ")
    greatest = test[0]
    
    for word in test:
        if len(word) > len(greatest):
            greatest = word
    print(greatest)

# Example usage:
LongestWord("I love tyranosaurus")  # Outputs: programming

