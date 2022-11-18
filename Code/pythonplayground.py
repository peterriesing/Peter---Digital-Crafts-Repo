# Create a list with the name of every person in this class.
# Anyone who has a name that starts a vowel print to the terminal "This person cannot be trusted".
# if the name starts with a consonant, print "This person is awesome"
# To get the first letter: NAME_OF_STRING[0]

classroom = ['Peter', 'Adam', 'Mauro', 'Jaye', 'Jessika', 'Corey', 'Kenneth', 'Meg', 'Rokhaya', 'Vinny', 'Mike', 'Dre', 'Ethan']
vowels = ['A','E', 'I', 'O', 'U']

# This doesn't work
#for name in classroom:
#    if name[0] == ['A', 'E', 'I', 'O', 'U']:
#        print(name + " is not to be trusted")
#    else:
#        print(name + " is awesome!")

# This works
#for name in classroom:
#    if (name[0] == 'A') or (name[0] == 'E') or (name[0] == 'I') or (name[0] == 'O') or (name[0] == 'U'):
#        print(name + ' is not to be trusted')
#    else:
#        print(name + ' is awesome')


#things = ['cheese', 'chowder','salsa','beer']

#for item in things:
#    if (item[0] == 'c') or (item[0] == 'b'):
#        print(item + " is delicious")
#    else:
#        print(item + " is amazing")

#for name in classroom:
#    if name[0] == vowels:
#        print(name + ' is cool')
#    else:
#        print(name + ' is cool too')

for name in classroom:
# defines the values in classroom
    for letter in vowels:
# defines the values in vowels
        if letter == name[0]:
            print(name + ' begins with a vowel')
#        if letter != name[0]:
#            print(name + ' does not begin with a vowel')

# this works in the first "if"
# in the second it calls on every other vowel and prints 4 ' does not begin with a vowel' for names that start with vowel
# & prints 5 ' does not begin with a vowel' for the other names

    