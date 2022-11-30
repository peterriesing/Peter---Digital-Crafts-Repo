
class Hero:
    def __init__(self,name,health,attack,defense):
        self.name = name
        self.health = health
        self.attack = attack
        self.defense = defense
        self.healing = {"maggot" : 5, "rotten apple core" : 10, "pile of spaghetti" : 20}
        self.listOfHeroes = [possum,char1,pigeon]

    def title(self):
        print("""
           ______________,______________
         |___|__|__|__|__|__|__|__|__|___|
         _| ___________________________ |_
        | |                             | |
        |_| ______    DUMPSTER   ______ |_|
          |             HERO            |
          | ___________________________ |
          [_____________________________]
             (O                     O)
        """)

    def menu(self):
        print("""
        =========
        1.stats
        2.fight
        3.heal
        3.quit
        =========
        """)

    def fightMenu(self):
        print("""
        1. attack
        2. run
        """)

    def dispStats(self):
        print(f"""
        Name: {heroName}
        Health: {self.health}hp
        Strength: {self.attack}
        Defense: {self.defense}
        
        """)
    def chooseHero(self):
        counter = 1
        for hero in self.listOfHeroes:
            print(f"""
            {counter}: {hero["name"]}
            Health: {hero["health"]}
            Attack: {hero["attack"]}
            Defense: {hero["defense"]}
            """)
            counter += 1
        chosenHero = input("choose a hero by typing the number next to the hero: ")
        if chosenHero == "1":
            print (f"{heroName} the {Hero.name}")

    def doDMG(self, enemy):
        if enemy.health > 0:
            enemy.health -= self.attack
            print(f"{enemy.name} has {enemy.health} health")
        else:
            enemy.alive = False

    def heal(self,value):
        self.health + self.healing(value)
        print(f"You now have {self.health}")
        

# attack function
# take attack value and remove from villain value minus defense value
# store health value in current stats

# display stats function
# show values for (userinput)name, (adjusted)health, attack, defense
# show values for item and damage
# self.items = {"rusty shovel" : 5, "bat" : 10, "shiv" : 15}
# {self.items(self.item)} : {self.items(self.damage)}


heroAll = Hero
heroName = ""

def play():
    playing = True
    while playing:
        Hero.title()
        Hero.chooseHero()
        heroName = input("Enter a name for your dumpster defender: ")
        print(f"\n{heroName} emerges from their dumpster in Dark Alley\n")
        userInput = input("Choose an option by typing a number: ")
        heroAll.menu()
        userInput = input("Choose an Option: ")
        if userInput == "1":
            char1.stats()
        
        elif userInput == "2":
            while Enemy.health > 0:
                heroAll.fightMenu()
                userInput = input("Choose an Option: ")
                if userInput == "1":
                    char1.doDMG(Enemy)
                    char1.takeDMG(Enemy)
                elif userInput == "2":
                    print("You fled Dark Alley")
                    break

            print(f"You slayed {Enemy.name} the {Enemy.type}")
            playAgain = input("Play again? y/n: ")
            if playAgain == "y":
                #play()
                print('RUN PLAY FUNCTION AGAIN')
            elif playAgain =="n":
                quit()
            else:
                print('only typoe Y or N')
        elif userInput == "3":
            heroAll.heal()

        elif userInput == "4":
            print("goodbye")
            playing = False

    # while(True):
    #     if menuChoice == "1":
    #         print("show stats values")
    #         print(m)
    #         # Hero.dispStats()

    #     elif menuChoice == "2":
    #         print("show item values")
    #         print(menu)
    #         # print(Hero.Items)

    #     elif menuChoice == "3":
    #         print("attack the baddie")
    #         print(menu)
        
    #     elif menuChoice == "4":
    #         quitChoice = input("Are you sure you want to quit? y/n ")
    #         if quitChoice == "y":
    #             return False
    #         elif quitChoice == "n":
    #             print(menu)
    #             # print(menu) <<< locks you in the quit loop FIX
    #         else:
    #             print("Please choose a valid option")

    #     else:
    #         print("choose a valid option")
    #         print(menu)
    #         # are you sure you want to quit? y/n
    #         # if not return to menu

# Playable Hero Types
char1 = Hero(heroName,75,75,50)
possum = Hero(heroName,100,50,50)
pigeon = Hero(heroName,50,50,100)
# Enemy
Enemy = Hero("Rabid Dog",50,100,50)

play()