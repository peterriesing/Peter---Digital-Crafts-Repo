# Dictionaries 
# key - LHS of ':' - keys can be data types like strings, numbers, tuples...
#   lists and dictionaries cannot be keys
# value - value of key - values can be all data types including lists and dicts
# key : value pairs are separated by ","


friend_info = {
    "Name": "Alan Turing",
    "Cell": "6017576",
    "Birthday": "June 23",
}

superhero = {
    "name": "Wonder Woman",
    "alias": "Diana Prince",
    "gear": [
        "Lasso of Truth",
        "Bracelets of Submission"
    ],
    "vehicle": {
        "title": "Invisible Jet",
        "speed": "2000 mph",
    }
}
# three ways to retreive dictionary values
hero_name = superhero["name"]
hero_alias = superhero.get("alias")
hero_values = superhero.values()

if "weakness" in superhero:
    print("The bad guys can totally win.")
else:
    print("Go home, bad guys.")
# ^since "weakness" isnt defined in the dictionary the function moves to the else command

#if "weakness" not in superhero:
#    print("Go home, bad guys.")
# ^works in a similar way

superhero["alias"] = "Princess Diana of Themyscira"
superhero["hometown"] = "Themyscira"
# to change values in dictionaries

for key, value in superhero.items():
    print("Superhero's %s is %s" % (key, value))

# output is:
#   Superhero's name is Wonder Woman
#   Superhero's alias is Diana Prince
#   Superhero's gear is ['Lasso of Truth', 'Bracelets of Submission']
#   Superhero's vehicle is {'title': 'Invisible Jet', 'speed': '2000 mph'}

# use the "del" keyword to remove a key, value from dict
del superhero["vehicle"]
print("No vehicle. It's in the shop.")

# to access nested data - assign variables and [index] 
vehicle = superhero["vehicle"]
vehicle_title = vehicle["title"]
# or index further into dict
vehicle_title = superhero["vehicle"]["title"]

# to access data in a list [index]
lasso = superhero["gear"][0]
#print(lasso)

for item in superhero["gear"]:
    print("%s has %s" % (superhero["name"], item))
#'Wonder Woman has Lasso of Truth'
#'Wonder Woman has Bracelets of Submission'

#Python has an open() function that can open and read or open and write a file

file_name = "to-do-list.txt"
with open(file_name, "r") as file_handle:
    contents = file_handle.read()
    print(contents)

# the second line passes 2 arguements
#   - The name of the file, as a string
#   - A "mode" that specifies if you intend to read or write to the file ("r")
# The with-as syntax lets us create a variable (which we've named file_handle)
# that we can use to access what's inside the file.

#Formatting or encoding data for saving to a file or transmitting over a network is also known as serialization.
#The act of decoding data that has been saved to a file or transmitted over a network is known as deserialization.

# To format your Python variables so they can be saved to a file requires a helper module
# The "pickle" module can encode your Python variables so that they can be stored to a file

#pickle.dump() serializes
#pickle.load() deserializes

import pickle
# Ending the file in ".pickle" as a reminder to use pickle module.
file_name = "to-do-list.pickle"
# Todos as a list of dictionaries
todos = [
    {
        "title": "Sand the floor",
        "priority": 1,
        "completed": True,
    },
    {
        "title": "Wax on, wax off",
        "priority": 2,
        "completed": False,        
    },
    {
        "title": "Paint the fence",
        "priority": 3,
        "completed": False,
    },
]

with open(file_name, "wb") as file_handle:
    pickle.dump(todos, file_handle)

# 'wb' - write binary

# pickle.load()
import pickle
# Ending the file in ".pickle" as a reminder to use pickle module.
file_name = "to-do-list.pickle"

with open(file_name, "rb") as file_handle:
    todos = pickle.load(file_handle)

    for todo in todos:
        print("------------")
        if todo["completed"]:
            print("Done:", todo["title"])
        else:
            print("Todo:", todo["title"])

# "rb" - read binary


# JSON stands for JavaScript Object Notation - the standard for exchanging plain text based data on the internet
# For serializing and deserializing plain text data, the json module is an alternative to pickle
# with json you do not open the file in binary

import json

file_name = "ww.json"
superhero = {
    "name": "Wonder Woman",
    "alias": "Diana Prince",
    "gear": [
        "Lasso of Truth",
        "Bracelets of Submission"
    ],
    "vehicle": {
        "title": "Invisible Jet",
        "speed": "2000 mph",
    }
}

with open(file_name, "w") as file_handle:
    json.dump(superhero, file_handle)

with open(file_name, "r") as file_handle:
    data = json.load(file_handle)
    print(data)    