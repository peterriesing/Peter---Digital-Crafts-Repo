// Write a function tipAmount that is given the bill amount
// and the level of service (one of good, fair and poor)
// and returns the dollar amount for the tip. Based on:

// good -> 20%
// fair -> 15%
// bad -> 10%
// tipAmount(100, 'good');
// // 20

// tipAmount(40, 'fair');
// // 6

function tipAmount(total,tip){
    if (tip === "good"){
        console.log(total * .2)
    }else if (tip === "fair"){
        console.log(total * .15)
    }else if (tip === "bad"){
        console.log(total * .1)
    }
}
tipAmount(100.00,"fair")
// Why is this printing two values?
// Why is the math not working?