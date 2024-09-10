# Lambda λ

*Last update: 2024/09/10*

*Note to reader:* lambda *MUST* be in a single line

<details><summary>Sources used:</summary>
[Xah Lee, Python Tutorial](http://xahlee.info/python/python_lambda.html), [w3schools](https://www.w3schools.com/python/python_lambda.asp)
</details>

<hr>

## Lambda by example

Lambda with one arg, a function that adds 1

	print((lambda x: x + 1)(3))

<hr>

Add 10 to argument and return result

	x = lambda a : a + 10

Lambda with two args, a function that adds two numbers

	print((lambda x, y: x + y)(3, 4))

<hr>

Summarize argument a, b, and c and return the result:

	x = lambda a, b, c : a + b + c

Giving lambda a name

	ff = lambda x: x + 1

<hr>

Add two nummbers

	ff = lambda x, y: x + y

<hr>

Lambda used with filter

<object data=".txt/lambda_filter1.txt" width="320" height="84"></object>

<hr>

## Why use lambda?

The power of lambda is better shown when you use them as an anonymous function inside another function. Say you have a function definition that takes one argument, and that argument will be multiplied with an unknown number:

<object data=".txt/lambda_doubler.txt" width="225" height="160"></object>
