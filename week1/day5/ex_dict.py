# Write code to do the following:

# Print Elizabeth's phone number.
# Add an entry to the dictionary: Kareem's number is 938-489-1234.
# Delete Alice's phone entry.
# Change Bob's phone number to '968-345-2345'.
# Print all the phone entries.
# In this exercise, are you using dynamic keys or fixed keys?

phonebook_dict = { 'Alice': '703-493-1834', 'Bob': '857-384-1234', 'Elizabeth': '484-584-2923' }

#1
print(phonebook_dict['Elizabeth'])
#2
phonebook_dict["Kareem"] = "938-489-1234"
#3
del phonebook_dict['Alice']
#4
phonebook_dict['Bob'] = "968-345-2345"
#5
for num in phonebook_dict.values():
    print(num)

#for name, number in phonebook_dict.items():
#    print(number)
# ^ Meg's notes from teach

# ________________________

# Write a python expression that gets the email address of Ramit.
# Write a python expression that gets the first of Ramit's interests.
# Write a python expression that gets the email address of Jasmine.
# Write a python expression that gets the second of Jan's two interests.
# In this exercise, are you using dynamic keys or fixed keys?




ramit = { 'name': 'Ramit', 'email': 'ramit@gmail.com', 'interests': 
            ['movies', 'tennis'
            ], 'friends':
                [ 
                    { 'name': 'Jasmine', 'email': 'jasmine@yahoo.com', 'interests': 
                        ['photography', 'tennis'
                        ]
                    }, 
                    { 'name': 'Jan', 'email': 'jan@hotmail.com', 'interests': 
                        ['movies','tv'
                        ]
                    }
                ]
        }
#1
print(ramit['email'])
#2
print(ramit['interests'][0])
#3
print(ramit['friends'][0]['email'])
#4
print(ramit['friends'][1]['interests'][1])


#______________

# Letter Summary: Write a letter_histogram program that asks the user for input,
# and prints a dictionary containing the tally of how many times each letter in the alphabet was used in the word. For example:

# $ python letter_histogram.py Please enter a word: banana {'a': 3, 'b': 1, 'n': 2}

# In this exercise, are you using dynamic keys or fixed keys?
