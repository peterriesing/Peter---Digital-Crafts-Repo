# Letter Summary: Write a letter_histogram program that asks the user for input,
# and prints a dictionary containing the tally of how many times each letter in the alphabet was used in the word. For example:

# $ python letter_histogram.py Please enter a word: banana {'a': 3, 'b': 1, 'n': 2}

# In this exercise, are you using dynamic keys or fixed keys?

# userWord = input('Enter your word: ')

# userInput = {}

# for letter in userWord:
#     userInput[letter] = userWord.count(letter)

# print(userInput)

# Word Summary: Write a word_histogram program that asks the user for a sentence as its input, and prints a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:

# $ python word_histogram.py Please enter a sentence: To be or not to be {'to': 2, 'be': 2, 'or': 1, 'not': 1} 
# In this exercise, are you using dynamic keys or fixed keys?

word = input('enter your sentence: ')

my_dict = {}

print(word.split())

for letter in word.split():
    my_dict[letter] = word.count(letter)

print(my_dict)