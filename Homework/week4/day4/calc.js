// hint: looking for something called "E"

// variable.addEventListenter = ('click', () => functon)

// hit a button and it prints a consolelog

const numbers = document.getElementsByClassName("numbers")
const operators = document.getElementsByClassName("operators")

// for (button in numbers) {
//     const numFunc = document.
// }
const clickPrint = (e) => {
    console.log(e.target.innerText)
}

for (button of numbers){
    button.addEventListener("click", clickPrint)
}
for (button of operators){
    button.addEventListener("click", clickPrint)
}


// numbers.forEach(element => {
//     console.log(element)
// // });
// This method iterates a loop like a for of loop


// numbers[0].addEventListener("click",()=> {console.log("Click")})
// // this applies to everything for some reason

//  convert strings to numbers
//  store numbers and operators
//  or store operators seperately