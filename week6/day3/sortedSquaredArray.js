// takes an array as an input
// returns an array of the numbers squared
// sort list in ascending order

let numbers = [-3,0,6,2,3,4]

const sortedSquaresFunc = (array) =>{
    const sortedSquares = []
    for (const num of array) {
        let square = num * num
        sortedSquares.push(square)
    }
    sortedSquares.sort((a,b) => a - b)
    return sortedSquares
}

console.log(sortedSquaresFunc(numbers))