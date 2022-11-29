# currency concept

class Money:
    def __init__(self,dollars,userSpend):
        self.dollars = dollars
        self.userSpend = userSpend
        self.item1 = 2
        self.item2 = 5
        self.item3 = 10

    def addMoney(self,findDollars):
        self.dollars += findDollars
        print("")
    def spendMoney(self, spendDollars):
        self.dollars -= spendDollars
    def checkMoney(self, dollars):
        print(f"You currently have {dollars}")
    def menu(self):
        print("""
        1. Spend Money
        2. Find Money
        3. Check Money
        4. Exit
        """)
    def market(self):
        print(f"""
        Balance: {self.dollars}
        """)
        print(f"""
        1. Item 1 : ${self.item1}
        2. Item 2 : ${self.item2}
        3. Item 3 : ${self.item3}
        4. Exit Market
        """)

userDollars = Money(50,0)
userInput = ""
userSpend = ""

playing = True
while playing:
    userDollars.menu()
    userInput = input("Please choose an option: ")
    if userInput == "1":
        while userDollars.dollars > 0:
            userDollars.market()
            userSpend = input("Type a number to buy an item: ")
            if userSpend == "1":
                userDollars.spendMoney(userDollars.item1)
            elif userSpend == "2":
                userDollars.spendMoney(userDollars.item2)
            elif userSpend == "3":
                userDollars.spendMoney(userDollars.item3)
            elif userSpend == "4":
                break
            elif userDollars.dollars < 1:
                print("You don't have enough money!")
            else:
                print("Please choose a valid option")
    elif userInput == "2":
        userDollars.addMoney(5)
        print("You have found 5 dollars!")
    elif userInput == "3":
        print(f"Your current balance is: {userDollars.dollars}")
    elif userInput == "4":
        playing = False
    else:
        print("Please choose a valid option")
    
