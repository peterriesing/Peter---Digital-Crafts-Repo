print("""
  (¯`·.¸¸.·´¯`·.¸¸.·´¯)
  ( \                 / )
 ( \ )   Dumpster    ( / )
( ) (      Hero       ) ( )
 ( / )               ( \ )
  ( /                 \ )
   (_.·´¯`·.¸¸.·´¯`·.¸_)
    """)

class Hero():
    def __init__(self,name,health,attack,defense):
        self.name = name
        self.name = health
        self.name = attack
        self.name = defense

class Items():
    def __init__(self,item,damage):
        self.item = item
        self.damage = damage

heroName = input("Enter a name for your dumpster defender: ")

raccoon = Hero(heroName,75,75,50)
possum = Hero(heroName,100,50)
pigeon = Hero(heroName,50,50,100)

