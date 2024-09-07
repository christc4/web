from lib.helpers import check_that_these_are_equal

def add_two(num):
    return num + 2

print("Function: add_two")

check_that_these_are_equal(
  add_two(6),
  8
)

# When you're done, move on to 014_multiply_numbers.py
