# #  You must create a class for your characters
# #  You will have a good character and a bad character
# #  Please write out any actions as functions/methods
# #  The game will loop until a victor is chosen, that victor is chosen when either one of you loses all your health
# #  You must be able to attack the opposing character (Knight attacks Goblin for 10 damage)
# #  Write a medium article explaining your logic and code
# #  Right a readme doc for your github repo and please link your repo in your medium article as well

# Details to think about
#  As a user, I should be able to choose a Hero and give it a name
#  As a user, I should be able to choose a Hero and see my stats (health,attack, etc)
#  As a user, I should be able to immediately fight a villain
#  As a user, I should be able to choose an action from a menu that is printed
#  As a user, I should be able to view this menu by calling a function
#  As a user, I should be able to have the game quit if I reach 0 health or the enemy reaches 0 health
# Extra Challenge
#  As a user, I should be able to run away and avoid the monster
#  As a user, I should be able to find coins or earn coins either fighting the monster or running away
#  As a user, I should be able to purchase an item from a store using coins
#  As a user, I should be able to change my stats when I purchase an item
#  As a user, I should be able to view my items that I currently have

class Character:
    def __init__(self,name,type,health,attack,alive):
        self.name = name
        self.type = type
        self.health = health
        self.attack = attack
        self.alive = alive
    
    def doDMG(self, enemy):
        if enemy.health > 0:
            enemy.health -= self.attack
            print(f"{enemy.name} has {enemy.health} health")
        else:
            enemy.alive = False
            print(f"You slayed {enemy.name} the {enemy.type}")

    def takeDMG(self, player):
        if player.health > 0:
            player.health -= self.attack
            print(f"{enemy.name} dealt you {enemy.attack} damage")
        else:
            player.alive = False
            print(f"{enemy.name} mauled you to death")

        
    def stats(self):
        print(f"""
        {userName} the {self.type}
        Health:{self.health}
        Attack:{self.attack}
        """)
    def menu():
        print("""
        =========
        1.stats
        2.fight
        3.quit
        =========
        """)
    def fightMenu():
        print("""
               ___
        ______|___|_____
       |________________| 
        | || ||  || || |
        | || ||  || || |
        |              |
        |  1. attack   |
        |  2. run      |
        |              |
        | || ||  || || |
        | || ||  || || |
        |______________|

        """)

    def heal(self,value):
        self.health + self.healing(value)
        print(f"You now have {self.health}")

# Start Game
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


userName = input("Enter a name for your Hero: ")

player = Character(userName,"raccoon",200,50,True)

enemy = Character("Scraggles","dog",75,75,True)
# Chunks = Character("Chunks","rat",25,45,True)
# Dangle = Character("Dangle","vulture",50,45,True)
# Doofus = Character("Doofus","alley cat",65,45,True)
print(f"{userName} the {player.type} emerges from the dumpster in Dark Alley")


#char selection = character value

userInput = ""
def play():
    playing = True
    while playing:
        Character.menu()
        userInput = input("Choose an Option: ")
        if userInput == "1":
            player.stats()
        
        elif userInput == "2":
            while enemy.health and player.health > 0:
                Character.fightMenu()
                userInput = input("Choose an Option: ")
                if userInput == "1":
                    player.doDMG(enemy)
                    player.takeDMG(enemy)
                elif userInput == "2":
                    print("You fled Dark Alley for now")
                    break
                else:
                    playAgain = input("Play again? y/n: ")
                    if playAgain == "y":
                        play()
                    if playAgain =="n":
                        quit()
                    else:
                        print('Please type y or n')
        elif userInput == "3":
                Character.heal()
        elif userInput == "4":
            print("goodbye")
            playing = False

play()
