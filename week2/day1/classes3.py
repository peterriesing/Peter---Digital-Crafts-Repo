# I should be able to type a phone number
# I should be able to view all the phone numbers I have created up to that point 
# I should be able to add phone numbers
# I should be able to see the names of the people attached to each phone number
# I should be able to delete a specific phone number
# I should be able to add phone numbers until I specify a stop and then the game will quit
# The phone number needs to be in this format : 111-111-1111
# You should use classes

# Due tomorrow morning!!!

# Menu
#   - Search
#       - search for a name in the phonebook
#   - Add
#       - append a name and number to the phonebook
#   - Delete
#       - remove a name and number from the phonebook
#   - List
#       - print all entries in phonebook

# Phonebook
#   - Name
#   - Number
#   - All data

class phonebook:
    def __init__(self,name,number):
        self.name = name
        self.number = number
        self.phoneNumbers = []
    def printName(self):
        print(f"{self.name}")
    def printNumber(self):
        print(f"{self.number}")
    def listAppend(self):
        self.phoneNumbers
    def printlist(self):
        for person in self.phoneNumbers:
            print(person)

petersPhonebook = phonebook()

def printMenu():
    print("""
    ====================
    Phonebook Menu
    ====================
    
    1. Search for an Entry
    2. Add an Entry
    3. Delete an Entry
    4. List all Entries
    5. Exit

    ====================
    """)
    choice = input("""
    Choose an option by typing 1, 2, 3, 4, or 5: \n
    """)
    if (choice == "1"):
        nameSearch = input("Search for a Person:\n")
        for entry in phonebook.phoneNumbers:
            if nameSearch == phonebook.name:
                print(phonebook.name, phonebook.number)

    if (choice == "2"):
        newName = input("  Add a New Entry\n Name:")
        newNum = input("Number")
        newEntry = phonebook(newName, newNum)
        self.append(newEntry)



    if (choice == "3"):
        print(Phonebook)
        print("Delete an Entry\n")

    if (choice == "4"):
        print("All Entries\n")
        print(phonebook.printlist)

    if (choice == "5"):
        print("Goodbye")

phonebook.printList()

# for name in phonebook.phoneNumbers:
#     print(f"{phoneNumbers.name} : {phoneNumbers.number}")
