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
    def __init__(self):
        # self.name = name
        # self.number = number
        self.phoneNumbers = [{"Peter" : "865-292-2199", "Joe" : "390-848-2939"}]
    # def printName(self):
    #     print(f"{self.name}")
    # def printNumber(self):
    #     print(f"{self.number}")
    def listAppend(self, newEntry):
        self.phoneNumbers.append(newEntry)
        printMenu()
    def printList(self):
        for entry in self.phoneNumbers:
            counter = 1
            print(f"""
            {counter}: {entry["name"]} - {entry["number"]}
            """)
            counter += 1
    def delItem(self, number):
# enumerate method to give values to list
# user input -1 = 
# user input must be integer - int(input("what number yo wanna del?")
        for entry in self.phoneNumbers:
            counter = 1
            print(f"""
            {counter}: {entry["name"]} - {entry["number"]}
            """)
            counter+= 1
        delItem = int(input("Type the name you wish to delete: ")-1)
        self.phoneNumbers.pop(delItem)

petersPhonebook = phonebook()

def printMenu():
    while True: 
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
            nameSearch = input("Search for Entry by Name: \n")
            for entry in petersPhonebook.phoneNumbers:
                if nameSearch == petersPhonebook.name:
                    print(petersPhonebook.name, petersPhonebook.number)

        elif (choice == "2"):
            newName = input("  Add a New Entry\n Name: ")
            newNum = input("Number: ")
            newEntry = {"name": newName, "number":newNum}
            petersPhonebook.listAppend(newEntry)

        elif (choice == "3"):
            print("All Entries\n")
            petersPhonebook.delItem()

        elif (choice == "4"):
            print("All Entries\n")
            petersPhonebook.printList()

        elif (choice == "5"):
            print("Goodbye")
            return False
        else:
            print("Please enter 1-5")

printMenu()

    # for name in petersPhonebook.phoneNumbers:
    #     print(f"{phoneNumbers.name} : {phoneNumbers.number}")
