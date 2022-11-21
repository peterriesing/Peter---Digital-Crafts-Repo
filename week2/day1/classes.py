print("Hello World classes")

# classes are like a more complex dictionary - sorta

# how to define a class in python
class Student:
# class name
    def __init__ (self,name,age,username):
# function
        self.name = name
        self.age = age
        self.username = username
# values
    def greeting(self):
# another function
        print(f'Hello my name is {self.name}')
# "f" puts code within strings

class Hero:
    def __init__(self,name,health,attack,defense):
        self.name = name
        self.health = health
        self.attack = attack
        self.defense = defense
    
#instantiating the class
peter = Student("Peter",34,"priesing")
vinny = Student("Vinny",28,"xXwelderguy420Xx")
# dot notation
# using the class
print(peter.name)
peter.greeting()

