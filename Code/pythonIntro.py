print("Hello World!")

# this i how you make comments

# Data Tyoes in Python
# String(str)
# A string is a set of human readable letters such as cat, dog, etc.
# strings are denoted by both single '' and double quotes ""

# Numbers
# -Integer
# integers are whole numbers like 1,2,3,etc
# -Float
# float (floating point integer) are numbers with a decimal point like 3.14, 10.5

# Boolean
# true or false value
# in python Boolean must start with uppercase (True)
isRaining = False

# to create a  string:
name = "Peter Riesing"

# Variables are use to store data (numbers, strings, etc)
# variables are read from left hand side (LHS)
# values are placed on right hand side (RHS)
print(name)
# will print value of "name" when exectued
# = called assignment operator which is used to assign a value(RHS) to a variable(LHS)
temperature = 48
gpa = 3.85

# student1 = 'Kenneth'
# student2 = 'Michael'
# ^inefficient way of organizing data
# lists can store multiple values
# lists are editable (if i remember correctly)

classroom = ['Kenneth', 'Michael', 'Jaye', 'Peter', 'Vinny', 'Adam', 'Jessika', 'Corey', 'Meg', 'Rokhaya', 'Mauro']
# print(classroom)

# a function runs a specific order of code and exits it once it's done
def sensei():
    print('Karate Kid')
    print('Mr. Miyagi')
    print(name)

sensei()
# ^ to execute function

# Inside the () we can provide functions with values, these are called parameters

def student():
    name2 = 'Johnny Drama'

student()

# name2 will be deleted after execution because it is within a function
# Scope - variables declared in or out of functions, loops,ets
# - Global - outside of function - can be accessed by any function (orloop)
# - Local - inside of function - specific to that function (or loop etc)


# title is the parameter, where parameter is simply a variable that store the parameter
def sensei2(title):
    print(title + '-san')

student()
# name is an arguement being passed to the function
sensei2(name)

# when we call a function any value that is passed is called an arguement
# when the value is received by the function it is called a parameter

# Loops
# loops are useful for iterating through lists

# For Loop: for each element inside a list can execute a block of code

for student in classroom:
    print(student)

odds = [1,3,5,7,9]
for number in odds:
    print(number + 1)
# print(number + 1) prints even numbers from the odds list

# Conditionals
# < less than
# > greater than
# == equal to
# <= less than or equal to
# >= greater than or equal to
# != does not equal
# we can use conditions to selectively execute blocks of code
# if statement is a conditional

if temperature < 32:
    print("It's freezing")

# Check for equality (value only)
if temperature == 72:
    print("It's a perfect day")

# Check multiple conditions on one line
day = 'Friday'

if temperature <= 0 and day == 'Friday':
    print("This is a bad way to end the week!")


students = ['Peter', 'Adam', 'Mauro', 'Jaye', 'Jessika', 'Corey', 'Kenneth', 'Meg', 'Rokhaya', 'Vinny', 'Mike', 'Dre', 'Ethan']

if student[0] == ['a','e','i','o','u']:
    print(students + "This person is not to be trusted")

if students[0] == ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']:
    print(students + "This person is awesome!")



