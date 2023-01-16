// write a fucntion that takes an array of strings and groups anagrams together
// return a list of anagram groups

// compare word length?
// compare letters in words



const words = ['yo','act','flop','tac','foo','cat','oy','oflp']

const anagram = (arr) =>{
    // setting the hashmap
    let hash = {}
    //looping through the array of words
    arr.forEach(ele => {
        // splitting the words and sorting the letters
        let letters = ele.split('').sort()
        // no idea
        hash[letters] ? hash[letters].push(ele) : hash[letters] = [ele]
    })
    // return the values of the hashmap
    return Object.values(hash)
}


console.log(anagram(words))

// create hashmap, loop through list, new word = word.split.sort.join, if sorted word exists in hashmap - push it to the corresponding map list, else make the map list, return map values