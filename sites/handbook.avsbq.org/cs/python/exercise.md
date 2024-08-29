# Exercises

#### Display even numbers from 1 to 10 and count how many even numbers

    count = 0
    for number in range(1, 10):
        if number % 2 == 0:
            count += 1
            print(number)
    print(f"We have {count} numbers")
