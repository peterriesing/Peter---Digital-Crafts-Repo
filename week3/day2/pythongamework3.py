# listOfBaddies = [Possum, Raccoon, Pigeon]
# for baddie in listOfBaddies:
#     print(baddie.name)
# baddieToFight = input('Choose who you wanna fight')
# if baddieToFight.lower() == 'apple':
#     baddieToFight = Apple
#     fightSequence(Apple)



class Character:
    def __init__(self,name,type,health,attack,alive):
        self.name = name
        self.type = type
        self.health = health
        self.attack = attack
        self.alive = alive

    def chooseHero(self):
        for hero in listOfHeros:
            print(hero)
        hero = input("Type the animal you want to play as: ")
        if hero.lower() == "possum":
            hero = Possum
        elif hero.lower() == "raccoon":
            hero = Raccoon
        elif hero.lower() == "pigeon":
            hero = Pigeon
        else:
            print("Please type a valid animal")
        
    def nameChar(self,hero):
        hero = input("Enter a name for your Hero: ")

    def chooseFight(self,enemy):
        for enemy in listOfEnemies:
            print(enemy)
        enemy = input("Choose an enemy to fight")

    def doDMG(self, enemy):
        if enemy.health > 0:
            enemy.health -= self.attack
            print(f"{enemy.name} has {enemy.health} health")
        else:
            enemy.alive = False

    def takeDMG(self, player):
        if player.health > 0:
            player.health -= self.attack
            print(f"{Enemy.name} dealt you {Enemy.attack}")
        else:
            Hero.alive = False
        
    def stats(self):
        print(f"""
        {self.name} the {self.type}
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

# class Health:
#     def __init__(self,health):
#         self.health = health
#         self.item1 = 2
#         self.item2 = 5
#         self.item3 = 10

#     def useHealth(self, eatHealth):
#         self.health += eatHealth
#     def checkHealth(self, health):
#         print(f"You currently have {health}hp")
#     def menu(self):
#         print("""
#         1. Eat Food
#         2. Check Health
#         3. Back to Main Menu
#         """)
#     def trash(self):
#         print(f"""
#         Health: {self.health}hp
       
#         1. {self.item1}hp : Maggot
#         2. {self.item2}hp : Rotten Apple
#         3. {self.item3}hp : Pile of Spaghetti
#         4. Leave trash can
#         """)
hero = ""
name = ""
Hero = Character
Raccoon = Character(name,"raccoon",100,50,True)
Possum = Character(name,"possum",100,50,True)
Pigeon = Character(name,"pigeon",100,50,True)
listOfHeros = [Raccoon,Possum,Pigeon]

Enemy = Character
Scraggles = Character("Scraggles","dog",75,75,True)
Chunks = Character("Chunks","rat",25,45,True)
Dangle = Character("Dangle","vulture",50,45,True)
Doofus = Character("Doofus","alley cat",65,45,True)
listOfEnemies = [Scraggles,Chunks,Dangle,Doofus]

# Health Class value
# userHealth = Health(100)

playing = True
def play():
    Hero.chooseHero('',hero)
    Hero.nameChar('',hero)
    print(f"{Hero.name} the {Hero.type} emerges from the dumpster in Dark Alley")
    while playing:
        Character.menu()
        userInput = input("Choose an Option: ")
        if userInput == "1":
            Hero.stats()

        elif userInput == "2":
            while Enemy.health > 0:
                Character.fightMenu()
                userInput = input("Choose an Option: ")
                if userInput == "1":
                    Hero.doDMG(Enemy)
                    Hero.takeDMG(Enemy)
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
            print("goodbye")
            playing = False

play()


# Equipable Hero Items - MAYBE CHANGE TO DICTIONARY
# rustyShovel = Hero.Items("Rusty Shovel", "Edged")
# syringeGlove = Hero.Items("Glove with Used Syringe Fingers", "Melee")
# baseballBat = Hero.Items("Aluminum Baseball Bat", "Blunt")
# # Consumable Hero Healers - MAYBE CHANGE TO DICTIONARY
# apple = Hero.Healer("A Rotten Apple Core",25)
# spaghetti = Hero.Healer("A Pile of Spaghetti",50)
# bandaid = Hero.Healer("A Used Bandaid",5)