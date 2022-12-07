// Write a function totalAmount that takes
// the same arguments as tipAmount except it 
// returns the total as the tip amount plus 
// the bill amount. This function may make 
// use of tipAmount as a sub-task.

// > totalAmount(100, 'good')
// 120
// > totalAmount(40, 'fair')
// 46

function tipAmount(total,tip){
    if (tip === "good"){
        console.log(total + (total * .2))
    }else if (tip === "fair"){
        console.log(total + (total * .15))
    }else if (tip === "bad"){
        console.log(total + (total * .1))
    }
}
tipAmount(100.00,"fair")

// Why is the math not working?