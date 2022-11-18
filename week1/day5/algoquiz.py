numbers = [1,2,5,0,7,0,9,0,2,0,2,3]
# iterate thorugh this list and find all 0s
# move 0s to end of list
# order rest of list ascending
#[1,2,2,2,3,5,7,9,0,0,0]

def sortList():
    numbers.sort()
    for num in numbers:
            if num == 0:
                numbers.append(numbers.pop(0))
# append() moves item to end of list
# pop() removes and returns item to list
sortList()
print(numbers)

#Teachers Solution

#def sortAlgo(list):
#    list.sort()
#    for number in list:
#        if(number == 0):
#            list.remove(number)
#            list.append(0)
#    return print(list)
#sortAlgo(numbers)     