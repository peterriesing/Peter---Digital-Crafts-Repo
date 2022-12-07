const numbers = [1, 2, 3, 6, 9, 7, 3, 6, 9, 5, 0, 6, 34, 0, 0, 2, 0, 4, 0];
// remove all zeros
// sort the list in descending order
// at the very end, add your name to the end of the array as a string
// return that array
const blank = []

function problem(name, arr = "please feed me a populated array") {
    arr.sort(function(a, b){return b - a});
    arr = arr.filter(function(item) {
    return item !== 0
    })
    arr.push(name);
    console.log(arr);
}

problem("peter",numbers)