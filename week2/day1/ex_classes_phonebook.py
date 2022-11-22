


class Phonebook:
    def __init__(self):
        self.entries = [{}]
    # an empty list does not have to be echoed in the "__init__(self, ****)"
    def entryAdd(self,userEntry):
        self.entries.append(self)
    # a function to add entry to Phonebook
    def printAll(self):
        for name in self.entries:
            print(f"{userEntry}")
    # a funtion to print all names and numbers in list
    def entryDel(self):
        for entry in self.entries:
            print(f"{userEntry}")
            delItem = input("Type the name you wish to delete: ")
            self.entries.remove(delItem)
    # a function to delete a single entry
    # 1 print list of all entries
    # 2 prompt input from user for name to remove
    # 3 remove input value


petersBook = Phonebook()
#instantiate the class^^^ able to call all the functions in Phonebook
userChoice = ""
# assigns a variable to call for user input
while(True):
# as long as the user inputs "y"
    if (userChoice == "y"):
        break
    # ends the loop
    userName = input("Entry Name: ")
    # assigns a variable to users input
    phoneNumber = input("Entry Phone Number: ")
    # assigns a variable to users input
    userEntry = {"name": userName, "number": phoneNumber}
    # assigns and combines user entries into dictionary
    petersBook.entryAdd(userEntry)
    # adds user entry to entries list in Phonebook
    petersBook.printAll()
    # prints all entries
    userChoice = input("Are you finished: y/n")

# def printMenu():
#     print("""
#     ====================
#     Phonebook Menu
#     ====================
    
#     1. Search for an Entry
#     2. Add an Entry
#     3. Delete an Entry
#     4. List all Entries
#     5. Exit

#     ====================
#     """)
#     choice = input("""
#     Choose an option by typing 1, 2, 3, 4, or 5: \n
#     """)
#     if (choice == "1"):
#         userSearch = input("Input Name of Entry:\n")
#         for name in petersBook:
#             print(name)

#     if (choice == "2"):
#         userAdd = input("Add Entry Name:\n")

#     if (choice == "3"):
#         print(petersBook.printAll())
#         userDel = input("Type an Entry to Delete:\n")

#     if (choice == "4"):
#         print(petersBook.printAll())

#     if (choice == "5"):
#         print("Goodbye")





