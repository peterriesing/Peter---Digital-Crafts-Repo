// Hello You!
// Write a function hello which given a name, says hello to the name.
// Use the following template:

// function hello(name) {
//   // put your code here
// }

// hello('Mustache');
// Make the above program print the following to the console:
// Hello, Mustache!

// Hello You! Part 2
// Modify your hello program such that if no name is given:
// hello(), it will print "Hello, world!",
// otherwise it behaves the same as previously.

function hello(name) {
    if (name === name){
    console.log("Hello, "+(name)+"!")
    }else if (name === null){
    console.log("Hello, world!")
    }
}
hello("Mustache")
hello()
// How do you define a null value in the code?