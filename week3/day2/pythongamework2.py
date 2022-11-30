# assign player character from list of playabe characters

class Hero:
    def __init__(self,health,defense,attack):
        self.health = health
        self.defense = defense
        self.attack = attack
        self.playableCharacters = ["raccoon", "possum", "pigeon"]

    def choice(self):
        for char in self.playableCharacters:
            print(char)



def start():
    print("Dumpster Stuff")
    playerName = input("Type your character's name: ")
    playerName = Hero
    Player.choice(Player)

Player = Hero

# choose a character
raccoon = Hero(75,75,50)
possum = Hero(100,50,50)
pigeon = Hero(50,50,100)
playableCharacters = [pigeon, raccoon, possum]

# Characters = input("Choose your character by typing the number: ")
# heroName = input("Choose your fighter by typing the name: ")

start()