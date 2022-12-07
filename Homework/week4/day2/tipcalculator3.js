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
    if (tip = "good"){
        tip = .2
    }else if (tip = "fair"){
        tip = .15
    }else if (tip = "bad"){
        tip = .1
    }
    let split = ((total + tip) / per)
    console.log(split)
}
splitAmount(75.00,"good",3)

// Cant get the math to work