print("""
  (¯`·.¸¸.·´¯`·.¸¸.·´¯)
  ( \                 / )
 ( \ )   Dumpster    ( / )
( ) (      Hero       ) ( )
 ( / )               ( \ )
  ( /                 \ )
   (_.·´¯`·.¸¸.·´¯`·.¸_)
    """)

class Hero:
    def __init__(self,name,health,attack,defense):
        self.name = name
        self.health = health
        self.attack = attack
        self.defense = defense
        self.items = {"rusty shovel" : 5, "bat" : 10, "shiv" : 15}
        # try Items here ^

    class Items():
        def __init__(self,item,damage):
            self.item = item
            self.damage = damage

    class Healer():
        def __init__(self,name,value,cost):
            self.name = name
            self.value = value
            self.cost = cost

    def dispStats(self):
        print(f"""
            {self.name}
            {self.health}
            {self.attack}
            {self.defense}
            
            {self.Items(self.item)}
            {self.Items(self.damage)}
            """)
    def chooseHero(self):
        counter = 1
        for hero in self:
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

    def strike(self):
        print(f"Attack {self.name}")
        enemyHealth = (self.health + self.defense) - (self.attack + self.Items(self.damage))
        print(f"{self.name} has {enemyHealth}")

    def heal(self):
        self.health + self.Healer(self.value)
        # print(f"You now have {self.health}")
        # 

# attack function
# take attack value and remove from villain value minus defense value
# store health value in current stats

# display stats function
# show values for (userinput)name, (adjusted)health, attack, defense
# show values for item and damage

# MAY NEED TO HAVE ITEMS WITHIN HERO TO DO DAMAGE MATH
# MAY HAVE TO HAVE HEAL METHOD IN HERO TO EFFECT HEALTH VALUE

# heal function?
# eat dumpster food to restore health?
# add food value to player health
# HOW DO THEY FIND FOOD? DEFEATED ENEMY? MARKET?

heroAll = Hero

heroName = input("Enter a name for your dumpster defender: ")

print(f"\n{heroName} emerges from their dumpster in Dark Alley\n")
# can embellish this for effect

# Playable Hero Types
raccoon = Hero(heroName,75,75,50)
possum = Hero(heroName,100,50,50)
pigeon = Hero(heroName,50,50,100)
# Enemy
dog = Hero("Rabid Dog",50,100,50)
# Equipable Hero Items - MAYBE CHANGE TO DICTIONARY
rustyShovel = Hero.Items("Rusty Shovel", "Edged")
syringeGlove = Hero.Items("Glove with Used Syringe Fingers", "Melee")
baseballBat = Hero.Items("Aluminum Baseball Bat", "Blunt")
# Consumable Hero Healers - MAYBE CHANGE TO DICTIONARY
apple = Hero.Healer("A Rotten Apple Core",25)
spaghetti = Hero.Healer("A Pile of Spaghetti",50)
bandaid = Hero.Healer("A Used Bandaid",5)


def printMenu():
    menu = ("""
    1. Stats
    2. Inventory
    3. Fight
    4. Quit
    """)

    print(menu)

    menuChoice = input("Choose an option by typing a number: ")

    while(True):
        if menuChoice == "1":
            print("show stats values")
            print(menu)
            # Hero.dispStats()

        elif menuChoice == "2":
            print("show item values")
            print(menu)
            # print(Hero.Items)

        elif menuChoice == "3":
            print("attack the baddie")
            print(menu)
        
        elif menuChoice == "4":
            quitChoice = input("Are you sure you want to quit? y/n ")
            if quitChoice == "y":
                return False
            elif quitChoice == "n":
                print(menu)
                # print(menu) <<< locks you in the quit loop FIX
            else:
                print("Please choose a valid option")

        else:
            print("choose a valid option")
            print(menu)
            # are you sure you want to quit? y/n
            # if not return to menu

printMenu()