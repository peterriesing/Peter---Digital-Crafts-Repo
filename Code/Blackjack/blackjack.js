// get dealer-hand element
const dealerHand = document.getElementById("dealer-hand");
// get dealer hand points value
const dealerValue = document.getElementById("dealer-points")
// get pllayer-hand element
const playerHand = document.getElementById("player-hand");
// get player hand points value
const playerValue = document.getElementById("player-points")
// get deal button
const dealButton = document.getElementById("deal-button");
//get hit button
const hitButton = document.getElementById("hit-button")
// get stand button
const standButton = document.getElementById("stand-button")
// make empty deck array
const deck = [];
// define suits array
const suits = ["hearts", "spades", "clubs", "diamonds"];
// define ranks array
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"]
// character sums
let dealerSum = 0
let playerSum = 0
let canHit = true
let canDeal = true

// makeDeck function(rank & suit arguements)
const makeDeck = (rank, suit) => {
    // define card object
    const card = {
    rank: rank,
    suit: suit,
    src: `./images/${rank}_of_${suit}.png`
    };
    // // assign point value
    if (card.rank === "king"){
        card.pointValue = 10
    }else if(card.rank === "queen"){
        card.pointValue = 10
    }else if(card.rank === "jack"){
        card.pointValue = 10
    }else if(card.rank === "ace"){
        card.pointValue = 11
    }else {
        card.pointValue = rank
    }
    deck.push(card);
}
// adding arguements to makeDeck function
for (let suit of suits) {
    for (const rank of ranks) {
        makeDeck(rank, suit);
    }
}

// =========== SHUFFLE FUNCTION =========== 
// geeks for geeks solution 1 - breaks the file
// const shuffle = (array) => {
//     for (var i = array.length -1; i > 0; i++) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array
// }
// =========== SHUFFLE FUNCTION 2 ===========
// geeks for geeks solution 2 - this works
const shuffle = (array) => {
    return array.sort(()=>Math.random()-0.5)
}

// =========== DEAL FUNCTION ===========
const deal = () =>{
    if(canDeal != true){
        return
    }
    while(dealerSum < 17) {
        let card = deck.pop()
        let cardImg = document.createElement("img")
        cardImg.src = card.src
        dealerSum += card.pointValue
        document.getElementById("dealer-hand").append(cardImg)
    }
    for (let i = 0; i < 2; i++) {
        let card = deck.pop()
        let cardImg = document.createElement("img")
        cardImg.src = card.src
        playerSum += card.pointValue
        document.getElementById("player-hand").append(cardImg)
        const playerPoints = document.getElementById("player-points")
        playerPoints.innerText = playerSum
    } console.log(deck)
}

// =========== HIT FUNCTION ===========
const hit = () =>{
    canDeal = false
    if(canHit != true){
        return
    }for (let i = 0; i < 1; i++) {
        let card = deck.pop()
        let cardImg = document.createElement("img")
        cardImg.src = card.src
        playerSum += card.pointValue
        document.getElementById("player-hand").append(cardImg)
        const playerScore = document.getElementById("player-points")
        playerScore.innerText = playerSum
    }
    if(playerSum >= 21){
        canHit = false
    }
    console.log(deck)
}
// =========== STAND FUNCTION ===========
const stand = () =>{
    canDeal = false
    canHit = false
    let message = ""
    // player sum is more than dealer sum && player sum is less than or equal to 21
    if(playerSum > dealerSum && playerSum <= 21){
        message = "You Win"
    // player sum is less than 21 && dealer sum is more than 21
    }else if(playerSum <= 21 && dealerSum > 21){
        message = "You Win"
    // player sum is less than dealer sum && dealer sum is less than or equal to 21
    }else if(playerSum < dealerSum && dealerSum <= 21){
        message = "You Lose"
    // player sum is more than 21 (doesn't matter if dealer sum is more than 21)
    }else if(playerSum > 21){
        message = "You busted"
    // player sum and dealer sum are the same
    }else if(playerSum === dealerSum){
        message = "It's A Draw"
    }
    const dealerScore = document.getElementById("dealer-points")
    dealerScore.innerText = dealerSum
    const messageText = document.getElementById("message")
    messageText.innerText = message
    return
}


// load game when window opened
window.addEventListener("DOMContentLoaded", () =>{
    shuffle(deck)
    console.log(deck)
    dealButton.addEventListener("click", deal)
    hitButton.addEventListener("click", hit)
    standButton.addEventListener("click", stand)
})