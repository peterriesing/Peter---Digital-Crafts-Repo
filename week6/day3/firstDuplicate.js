// write a function that returns the first duplicate in the given list
// if there are no duplicates return -1
//

// HINT1 is there a data structure that allows you to track duplicates
// HINT2 look at the wording of the prompt
// HINT3 2 for loops
// HINT4 i dont want to set you up for failure but i want to set the expectation for you


// loop through the array
// loop through again to find a matching number with a different index
// if a number has multiple indexes return that number
// else return -1




// const array = [1,5,2,3,3,4,5]

// const firstDuplicateFunc = (array) =>{
//     let duplicates = []
//     for (let a=0; a < array.length; a++){
//         for (let b=a + 1; b < array.length; b++) {
//             if (array[a] === array[b]){
//                 duplicates.push(array[b])
//             }
//         }
//     }
//     if (duplicates.length > 0){
//         return duplicates[0]
//     }else {
//         return -1
//     }
// }
// console.log(firstDuplicateFunc(array))


const newarr = [1,3,4,5,6,2,4,1]


// fast way using sets
// sets cannot have duplicate items

const firstdupp = (array) =>{
    let numSet = new Set()
    for (const num of array) {
        if (numSet.has(num)){
            return num
        }
        else {
            numSet.add(num)
        }
    }
    return -1
}

console.log(firstdupp(newarr))


// brute force solution

const newDupe = (array) =>{
    let minINdex = array.length
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        for (let j = 0; j < array.length; j++) {
            const innerelement = array[j];
            if(element === innerelement){
                minINdex = Math.min(minINdex,j)
            }
            
        }
        
    }
    if(minINdex === array.length) return -1
}