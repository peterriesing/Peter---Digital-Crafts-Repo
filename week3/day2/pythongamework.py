# currency concept

class Health:
    def __init__(self,health):
        self.health = health
        self.item1 = 2
        self.item2 = 5
        self.item3 = 10

    def useHealth(self, eatHealth):
        self.health += eatHealth
    def checkHealth(self, health):
        print(f"You currently have {health}hp")
    def menu(self):
        print("""
        1. Eat Food
        2. Check Health
        3. Back to Main Menu
        """)
    def trash(self):
        print(f"""
        Health: {self.health}hp
       
        1. {self.item1}hp : Maggot
        2. {self.item2}hp : Rotten Apple
        3. {self.item3}hp : Pile of Spaghetti
        4. Leave trash can
        """)

userHealth = Health(100)
userInput = ""
def healthFunc():
    playing = True
    while playing:
        userHealth.menu()
        userInput = input("Please choose an option: ")
        if userInput == "1":
            while userHealth.health > 0:
                userHealth.trash()
                userSpend = input("Choose an item to eat: ")
                if userSpend == "1":
                    userHealth.useHealth(userHealth.item1)
                elif userSpend == "2":
                    userHealth.useHealth(userHealth.item2)
                elif userSpend == "3":
                    userHealth.useHealth(userHealth.item3)
                elif userSpend == "4":
                    break
                else:
                    print("Please choose a valid option")
        elif userInput == "2":
            userHealth.checkHealth(userHealth.health)
        elif userInput == "3":
            playing = False
        else:
            print("Please choose a valid option")
    
healthFunc()