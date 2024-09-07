# Functions

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
