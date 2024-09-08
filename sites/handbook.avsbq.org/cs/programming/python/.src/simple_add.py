def SimpleAdding(num):
    total = 0
    for number in range(1, int(num) + 1):  # Modified to include 'num'
        total += number
    print(total)  # Parentheses required

SimpleAdding(5)
