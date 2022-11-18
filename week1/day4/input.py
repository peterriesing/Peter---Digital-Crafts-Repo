#name = input('Give me your name: ')
#print('Hello,', name)


largestSum = input('Enter your integer to factorialize: ')

array = range(1,int(largestSum)+1)

runningTot = 1
for num in array:
    runningTot = runningTot*num

print(runningTot)

#for i in range(1,n+1):
#    fact = fact * i
      
#print ("The factorial of 23 is : ",end="")
#print (fact)

word = input('enter a word to palindrate: ')

counter = 1
isPalindrome = True
for letter in word:
    if letter != word[-counter]:
        isPalindrome = False
    counter = counter + 1

print(isPalindrome)

# [-counter draws from counter 1 in reverse from back of string

#def palindrome(word):
#    if(word == word[::-1]):
#        return True
#    return False
# teachers easiest solution^

