// Tip Calculator 3
// Write a function splitAmount that takes 
// the bill amount and the level of service, 
// and the number of people to split the bill 
// between. It will return the final amount for 
// each person.

// splitAmount(100, 'good', 5);
// 24

// splitAmount(40, 'fair', 2);
// 23

function splitAmount(total,tip,per){
    if (tip === "good"){
        console.log((total + (total * .2))/(per))
    }else if (tip === "fair"){
        console.log((total + (total * .15))/(per))
    }else if (tip === "bad"){
        console.log((total + (total * .1))/(per))
    }
}
splitAmount(75.00,"bad",3)

// Cant get the math to work