# functions
# used to write code that you dont have to rewrite(can be used more than once)

# name = 'joe'
# print(name)

# make functions generic
# in py
# 1. def - defines the function
# 2. name - name of the function (name clearly)
# 3. function body - comes after ':'
# 4. (optional) argument

# functions are overlooked unless invoked
# function is stored in computer memory

    # def printStudentName():
    #   print('Corey')

    # printStudentName()

    # same thing with argument
    # def printStudentName(name):
    #   print(name)

    # printStudentName("John")

# invoking or calling or running a function

def printMyName():
    print('Peter')
printMyName()

favoriteRestaurants = ["Uchi","Town","IronAge KBBQ","Fadi"]

#def printRestaurants(listOfRestaurants):
#    for restaurant in listOfRestaurants:
#        print(restaurant)

#printRestaurants(favoriteRestaurants)


# more generic version

def printList(list):
    for item in list:
        print(item)


printList(favoriteRestaurants)

listOfFruit = []

# write a function that adds "apple" to an empty list of fruits
def addFruit(fruit):
    listOfFruit.append(fruit)

addFruit("apple")
print(listOfFruit)