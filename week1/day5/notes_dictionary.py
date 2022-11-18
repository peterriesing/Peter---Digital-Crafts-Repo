#Dictionaries
# {"key": value}
# to get the value you need to know the key
# dictionary can contain multiple pairs of key:values

cat = {
    "name": "Penny",
    "breed": "Dumpster Cat",
    "age": 11,
    "ageUnits": "years"
}

print(cat["name"])

# add key and value to dictionary
cat["owner"] = "Peter & Katie"
cat["color"] = "marble grey"
# reassign value
cat["age"] = cat["age"] + 1
cat["breed"] = "Fluffy Lady"

catKeys = cat.keys()
catValues = cat.values()

for key, value in cat.items():
#    print("My cat's %s is %s" % (key, value))
# ^This is the old way
    print(f"My cat's {key} is {value}")
# ^This is a newer way
# 'f' interpolates 

# My cat's name is Penny
# My cat's breed is Fluffy Lady
# My cat's age is 12
# My cat's ageUnits is years
# My cat's owner is Peter & Katie
# My cat's color is marble grey

# for keys in catKeys:
#     print(keys)
# for vals in catValues:
#     print(vals)
