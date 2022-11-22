class Phonebook:
    def __init__(self):
        self.listOfPhoneNumbers = []
    def addEntry(self,usersEntry):
        self.listOfPhoneNumbers.append(usersEntry)
    def printListOfNumbers(self):
        for number in self.listOfPhoneNumbers:
            print(f"""
           {number["name"]} : {number["number"]} 
            """)
    def delNumber(self):
        print("fix this")
        for number in self.listOfPhoneNumbers:
            print(f"""
            {number["name"]} : {number["number"]})
            """)
            delName = input("Type the name of the entry you wish to delete: ")
            self.listOfPhoneNumbers.remove(delName)


myPhoneBook = Phonebook()

userChoice = input("""
        Choose an Option/n
        1. Add entry
        2. Delete entry
        3. Quit

        : """)
if(userChoice == "1"):
    userName = input("Name: \n")
    phoneNumber = input("Phone number: \n")
    usersEntry = {"name": userName, "number":phoneNumber}
    myPhoneBook.addEntry(usersEntry)
    myPhoneBook.printListOfNumbers()
    print(userChoice)
if(userChoice == "2"):
    myPhoneBook.delNumber()
    print(userChoice)
if(userChoice == "3"):
    myPhoneBook.printListOfNumbers()

    
    