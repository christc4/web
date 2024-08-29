age = int(input("Enter age: "))

if age < 18:
	age = 18 - age
	print(f"You must wait {age} years until you are of legal age")
elif age == 18:
	print("Congratulations you're exactly 18")
else:
	print("What")
