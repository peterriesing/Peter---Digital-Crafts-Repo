favoriteRestaurants = ["Uchi","Town","IronAge KBBQ","Fadi"]

# find me all of the restaurants that start with U
# if
# get me te last restaurant
# get me the second to last restaurants
# uppercase all the restaurants
#upper()


for restaurant in favoriteRestaurants:
    if restaurant[0] == 'U':
        print(restaurant)

print(favoriteRestaurants[-1])
print(favoriteRestaurants[-2])


for restaurant in favoriteRestaurants:
    print(restaurant.upper())