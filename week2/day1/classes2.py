# Pets
# make a noise
    # def animalSound()
# have an owner
    # def whoIsMyOwner
# have a name
    # def whatIsMyName
# have a type
    # def whatIsMyType

class Pet:
    def __init__ (self,noise,owner,name,type):
        self.noise = noise
        self.owner = owner
        self.name = name
        self.type = type
    def animalSound(self):
        print(f"{self.name} makes the sound {self.noise} when they want attention.")
    def whoIsMyOwner(self):
        print(f"{self.name}'s owner is {self.owner}")
    def whatIsMyName(self):
        print(f"My name is {self.name}")
    def whatIsMyType(self):
        print(f"{self.name} is a {self.type}")

penny = Pet("Meow","Peter","Penny","Standard Issue Cat")
gorgo = Pet("Woof","Peter","Gorgo","Golden Retreiver")

penny.whatIsMyName()
penny.animalSound()
penny.whatIsMyType()
penny.whoIsMyOwner()
