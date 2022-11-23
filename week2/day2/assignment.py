# 1. Write a function called "nameFunction" have it print out your name. invoke the function

def nameFunction():
    print("Peter Riesing")

nameFunction()

#2. Define variable named Joe that is the string Joe

joe = "joe"

#3 Reinitialize Joe so that it is now the integer 4

joe = 4

#4 Change Joe into a float

joe = 3.14

#5. Create a list named students that includes 5 people from this class

    #5a print the first item from the list(bonus for more than one way)

    #5b print the last item from the list(bonus for more than one way)

    #5c How do I get the third item from the list?

    #5d print the entire list not in brackets [student1, student2, etc...]

    #5e add "is cool" to the end of each name

    #5f if the students name is your name add "IT ME!!" to the end

    #5g if you are not in the list print "I guess I'm not cool"

    #5h list some methods to remove things from a list


students = ["Meg", "Adam", "Jessika", "Corey", "Mauro"]
# a.
print(students[0])
print(students[-5])
# b.
print(students[-1])
print(students[4])
# c.
students[2]
# d.
for student in students:
    print(student)
# e.

for student in students:
    student + "is cool"
    print(student)

# f.
if student in students == "Peter":
    print("IT ME!!")
elif student in students != "Peter":
    print("I guess I'm not cool")
# g.

# pop()
# remove()

# h.

#6 Create a dictionary with keys "Digital Crafts" ,"Instructor", "TA" and values "Bootcamp" ,"Joe" ,"Ethan"

    #6a return the value of "Digital Crafts"

dictionary = {
    "Digital Crafts" : "Bootcamp",
    "Instructor" : "Joe",
    "TA" : "Ethan"
    }

value = dictionary["Digital Crafts"]
print(value)

#7 Write a class named Cars with attributes make,model,year, and type(sedan,truck,crossover, sportscar, etc....)

    #7a Instantiate 3 new Cars
    
    #7b Add a method that allows you to see the make and model of a car in your terminal

    #7c Use the above method on the second car
    
    #7d Add a method that is called "honkHorn" that prints "Beep Beep"

class Cars:
    def __init__(self,make,model,year,type):
        self.make = make
        self.model = model
        self.year = year
        self.type = type
    def makeModel(self):
        print(f"{self.make} {self.model}")
    def honkHorn(self):
        print("Beep Beep")


newCar1 = Cars("Jeep", "Cherokee", "1999", "SUV")
newCar2 = Cars("Toyota", "Camry", "1998", "sedan")
newCar3 = Cars("Ford", "Escort", "2003", "hatchback")

newCar2.makeModel()


#Push this all to a repo on your github
#Paste github link of assignment page to: https://digitalcrafts.instructure.com/courses/225/assignments/9345