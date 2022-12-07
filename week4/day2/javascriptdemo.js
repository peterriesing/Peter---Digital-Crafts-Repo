//print statement
console.log("hello world");

//let - used to define a variable that you can reassign
//python - name = "joe"
let houston = "hot";
console.log(houston);
houston = 2;
console.log(houston);

//const - used to define a permanent variable
const ethan = "a total bro";
console.log(ethan);
// ethan = "not so cool guy";
// console.log(ethan);
// will not allow you to print the ethan variable

// Functions
// functions are defined with "def"
// Javascript has two ways

function printMyName(name, lastname){
    // this is the function body inside of the curly braces
    console.log(name, lastname)
}

printMyName("joe", "frasier")

const printSomething = (first, second) => {
    console.log(first, second)
}
printSomething('Woo','Doggie')

// Arrays
let fruits = ["apple", "pineapple", "orange"]
fruits.push("strawberry")
// const newFruits = fruits.filter((fruit)=>{
//     if(fruit =="pineapple") {
//         return 1;
//     }
// })
const newFruits = fruits.filter((fruit) => fruit === "apple");
// will filter out all items that are not "apple"
console.log(fruits)
console.log(newFruits)

// Loops
// for of is for arrays only
for (const fruit of fruits) {
    console.log(fruit);
}
//shorthand version for array
fruits.forEach((fruit) => console.log(fruit));
//for in is for objects only

//Objects

const student = {
    name: 'Jaye',
    car: "Volvo",
    home: "Alaska"
}
//printing a value
console.log(student.name)
console.log(student['car'])
//adding keys and values
student.lastname = "Lasseigne"
student["age"] = "20"
console.log(student)
// looping through the dictionary
for (const key in student) {
    console.log(student[key])
}

console.log(Object.values(student))
// will return the values in an array
console.log(Object.keys(student))
//will return the keys in an array
console.log(Object.entries(student))
// will return an array of arrays of the key:values

//if statements
// you dont have to have an else statement
const teacher = "joe"
if(teacher === "joe"){
    console.log(`${teacher} is your teacher`)
}else {
    console.log(teacher + "is your teacher")
}

//Write a JavaScript program to compute the sum of the
//two given integers, If the sum is in the range 50..80
//return 65 otherwise return 80



function calculator(num1, num2) {
    let total = num1 + num2;
    if (total >= 50 && total <= 80) {
        return 65;
    }
    return 80;
}

calculator(24,50)