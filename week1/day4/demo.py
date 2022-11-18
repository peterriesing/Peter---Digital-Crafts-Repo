print('Peter Riesing')

# DATA TYPES
# string - inside of "" or '' or sometimes ``
name = "peter"

# integer - whole numbers (2, 233, 3300393993)
age = 34

# float - decimal number (3.14, currency 0.00)
# rounding is difficult apparently (12.33333333334)
GPA = 3.85

# boolean - True or False (truthy or falsy)
joeIsCool = False

# tuple - multiple items that cannot be modified
coordinates = (1212312, 4328344)

# list - also called array [built in square brackets] can contain any data type including another list. First item is counted at 0
listThings = ['Peter', 2.22, ['dad', 'mom'], 'cats', 69420, False]
# print(listThings[3]) will print 'dad', 'mom'

#loops
# 'for' - goes through each item in a list
# there is a variable after for that gets assigned to each value from start to finish

# for student in listOfStudents:
# use singular and plural for variable

# 'while' - goes on forever if the condition in the () is truthy
# will only stop when condition is false
# break kills the loop when read in the line of code
counter = 0
while(counter < 4):
    print('joe is tall')
    counter+= 1
    # shorthand for 'counter = counter + 1'
    # will print 'joe is tall' 4 times

addresses = ['123 main', '234 east', '345 west']


while(counter < len(addresses)):
    print(addresses[counter])
    counter = counter + 1


# = assignment operator
