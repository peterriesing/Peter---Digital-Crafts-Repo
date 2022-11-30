class Character:
    def __init__(self,name,type,health,attack,alive):
        self.name = name
        self.type = type
        self.health = health
        self.attack = attack
        self.alive = alive
        self.item1 = 10
        self.item2 = 25
        self.item3 = 50
    def doDMG(self, char):
        if char.health > 0:
            char.health -= self.attack
            print(f"{char.name} has {char.health} health")
        else:
            char.health = False
            print(f"{char.name} died!")       
    def stats(self, player):
        print(f"""
        {player.name} the {player.type}
        Health:{player.health}hp
        Attack:{player.attack}
        """)
    def menu(self):
        print("""
        MAIN MENU
        1. Stats
        2. Fight
        3. Heal
        4. Quit
        """)
    def fightMenu(self):
        print("""
        1. Fight!
        2. Run!
        """)
    def useHealth(self, eatHealth):
        self.health += eatHealth
    def checkHealth(self, health):
        print(f"You currently have {health}hp")
    def healMenu(self):
        print("""
        TRASHCAN
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
        4. Leave trashcan
        """)
def playAgain():
    playAgain = input("Play again? y/n: ")
    if playAgain.lower() == "y":
        gameStart()
    if playAgain.lower() =="n":
        quit()
    else:
        print('Please type y or n')

def gameStart():
# Title card
    print("""
     ______________,______________
   |___|__|__|__|__|__|__|__|__|___|
    | ___________________________ |
   _|                             |_
  | |                             | |
  |_| ______    DUMPSTER   ______ |_|
    |             HERO            |
    |                             |
    | ___________________________ |
    [_____________________________]
         (O                 O)
""")
    # Establish hero name
    userName = input("Enter a name for your trash panda: ")
    # Instantiate characters
    player = Character(userName,"raccoon",200,50,True)
    enemy = Character("Scraggles","dog",300,75,True)
    # Starting sentence
    print(f"""
    {userName} the {player.type}
    emerges from the dumpster in
    Dark Alley to find it being
    ransacked by {enemy.name} the {enemy.type}!
    You must defend your home!
    """)
    play(player,enemy)

#Health function
def healthFunc(player):
    playing = True
    while playing:
        player.healMenu()
        userInput = input("Choose an option: ")
        if userInput == "1":
            while player.health > 0:
                player.trash()
                userSpend = input("Choose an option: ")
                if userSpend == "1":
                    player.useHealth(player.item1)
                elif userSpend == "2":
                    player.useHealth(player.item2)
                elif userSpend == "3":
                    player.useHealth(player.item3)
                elif userSpend == "4":
                    break
                else:
                    print("Please choose a valid option")
        elif userInput == "2":
            player.checkHealth(player.health)
        elif userInput == "3":
            playing = False
        else:
            print("Please choose a valid option")

# Play function    
def play(player, enemy):
    playing = True
    while playing:
            player.menu()
            userInput = input("Choose an option: ")
# Check stats        
            if userInput == "1":
                player.stats(player)
# Fight        
            elif userInput == "2":
                while True:
                    if enemy.health > 0 and player.health > 0:
                        player.fightMenu()
                        userInput = input("Choose an option: ")
                        if userInput == "1":
                            player.doDMG(enemy)
                            enemy.doDMG(player)
                        elif userInput == "2":
                            print("You flee Dark Alley for now to heal your wounds and fight another day")
                            break
                    elif enemy.health <= 0:
                        print(f"You saved your dumpster from {enemy.name}!")
                        playing = False
                        playAgain()
                    elif player.health <=0:
                        print("You died!")
                        playing = False
                        playAgain()
                        break
# Heal
            elif userInput == "3":
                    healthFunc(player)
# Quit                
            elif userInput == "4":
                print("Thanks for playing")
                playing = False
# Enter valid        
            else:
                print("Please choose a valid option")

gameStart()
