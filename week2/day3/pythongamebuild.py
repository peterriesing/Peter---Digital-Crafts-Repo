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
        =========
        1. attack
        2. run
        =========
        """)

# Start Game
print("""
     ______________,______________
   |___|__|__|__|__|__|__|__|__|___|
   _| ___________________________ |_
  | |                             | |
  |_|           DUMPSTER          |_|
    |             HERO            |
    | ___________________________ |
    [_____________________________]
         (O                 O)
""")
userName = input("Enter a name for your Hero: ")
char1 = Character(userName,"raccoon",100,50, True)
enemy = Character("Buster","dog",75,75, True)
# Apple = Character("A Rotten Apple Core",25, 45)
# Spaghetti = Character("A Pile of Spaghetti",50, 45)
# Bandaid = Character("A Used Bandaid",5, 45)
print(f"{userName} the {char1.type} emerges from the dumpster in Dark Alley")

# listOfBaddies = [Apple, Spaghetti, Bandaid]
# for baddie in listOfBaddies:
#     print(baddie.name)
# baddieToFight = input('Choose who you wanna fight')
# if baddieToFight.lower() == 'apple':
#     baddieToFight = Apple
#     fightSequence(Apple)

#char selection = character value

userInput = ""
playing = True
while playing:
    Character.menu()
    userInput = input("Choose an Option: ")
    if userInput == "1":
        char1.stats()
    
    elif userInput == "2":
        while enemy.health > 0:
            Character.fightMenu()
            userInput = input("Choose an Option: ")
            if userInput == "1":
                char1.doDMG(enemy)
                #Peter.attack(mushroom)
                #mushroom.hitByAttack(Peter)
            elif userInput == "2":
                print("you run")
                break

        print(f"You slayed {enemy.name} the {enemy.type}")
        print("You win!!!")
        print("Want to play again")
        playAgain = input("Type Y/N")
        if playAgain == 'Y':
            #play()
            print('run play again')
        elif playAgain =='N':
            quit()
        else:
            print('only typoe Y or N')
                    


    elif userInput == "3":
        print("goodbye")
        playing = False
