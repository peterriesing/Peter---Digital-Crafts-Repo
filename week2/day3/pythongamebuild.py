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

class Character():
    def __init__(self,name,type,health,attack):
        self.name = name
        self.type = type
        self.health = health
        self.attack = attack
    
    def takeDMG(self):
        self.health -= self.attack

    def stats(self):
        print(f"""
            {userName} the {self.type}
            Health:{self.health}
            Attack:{self.attack}
            """)
    def menu():
        print("""
            1.stats
            2.fight
            3.quit
            """)
    def fightMenu():
        print("""
        1. attack
        2. run
        """)

# Start Game
print("Welcome to Dumpster Hero")
userName = input("Enter a name for your Hero: ")
char1 = Character(userName,"raccoon",100,50)
enemy = Character("Buster","dog",75,75)
print(f"{userName} the {char1.type} emerges from the dumpster in Dark Alley")

userInput = ""
playing = True
while playing:
    Character.menu()
    userInput = input("Choose an Option: ")
    if userInput == "1":
        char1.stats()
    
    elif userInput == "2":
        enemy.health = enemy.health - char1.attack
        while enemy.health > 0:
            Character.fightMenu()
            print(f"{enemy.name} now has {enemy.health} health")
            userInput = input("Choose an Option: ")
            if userInput == "1":
                enemy.health = enemy.health - char1.attack
                print(f'enemy has {enemy.health}')
            elif userInput == "2":
                print("you run")
                break
        if enemy.health <= 0:
                print(f"You slayed {enemy.name} the {enemy.type}")


    elif userInput == "3":
        print("goodbye")
        playing = False
