// You are going to write a function that will take in a string of letters.  You will have to return to me how many times each letter appears in the function.  Please return all your results in an array. Check if there's a blank string

const stringReturn = []

const stringRipper = (input = []) =>{
    for(letter of input){
        stringReturn.push(letter)
    }
    stringReturn.sort()
    console.log(stringReturn)
}

stringRipper("look at this")
