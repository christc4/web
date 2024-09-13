# Functions

*Last update: 2024/09/12*

<details><summary>Sources used:</summary>
[Bro Code](https://youtu.be/89cGQjB5R4M?si=EIjztJPrvIBNdDoB), [Xah Lee](http://xahlee.info/python/function_def.html), [Makers Academy, Intro-To-Python](https://github.com/makersacademy/intro-to-python/blob/main/011_identity.py)
</details>

<hr>

Functions are reusable blocks of code. Think of them as little machines, taking inputs, processing them in some way and returing an output

Independent functions

    len(my_string)

Method functions

    my_string.replace("h", "w")



## Happy Birthday

Tutorial from [Bro Code](https://youtu.be/89cGQjB5R4M?si=EIjztJPrvIBNdDoB)

	def happy_birthday(name, age):
		print(f"Happy birthday to {name}!")
		print(f"You are {age} yeas old!")

	happy_birthday("Tom", 10)

## Invoice

	def invoice(username, amount, due_date):
		print(f"Hi {username}")
		print(f"Your bill of ${amount:.2f} is due: {due_date}")

	invoice("Tom", 50.459, "05/02")

`.2f` means round up to 2 decimal places

The `return` keyword is to exit a function and return a value

    def myfunction():
        return 3+3
    print(myfunction())

Statement's after the return line won't be executed

When you call a function some space gets allocated to it in RAM, when you compute the value of numbers that value will only exist while the function is still running, when the function gets deleted, most things in RAM such as integers get deleted

