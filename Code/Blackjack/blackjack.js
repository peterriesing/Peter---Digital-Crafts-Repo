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
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

// makeDeck function(rank and suit arguements)
const makeDeck = (rank, suit) => {
    // define card object
    const card = {
    rank: rank,
    suit: suit,
    src: `../images/${rank}_of_${suit}.png`
    };
    // pointValue: 
    // // point value based on rank
    // // pointValue: rank > 10 ? 10 : rank,
    // // assign point value to face cards
    // if (card.rank == "king"),
    //     card.pointValue = 10
    // else if(card.rank == "queen"),
    //     card.pointValue = 10
    // else if(card.rank == "jack"),
    //     card.pointValue = 10
    // else if(card.rank == "ace")
    //     card.pointValue = 11,
    // // image source 
    deck.push(card);
    // print cards to check values
    console.log(card)

makeDeck()
// adding arguements to makeDeck function
for (let suit of suits) {
    for (const rank of ranks) {
        makeDeck(rank, suit);
    }
}
// deal function
// const deal = () =>{
//     // select random card
//     // let card1 = deck.random(card1)
//     // let card2 = deck.random(card2)
//     // let card3 = deck.random(card3)
//     // let card4 = deck.random(card4)
//     // // create 2 image tags for dealt cards
//     // let card1Img = document.createElement("img")
//     // let card2Img = document.createElement("img")
//     // let card3Img = document.createElement("img")
//     // let card4Img = document.createElement("img")
//     // //set card img src
//     // card1Img.src = card1[src]
//     // card2Img.src = card2[src]
//     // card3Img.src = card3[src]
//     // card4Img.src = card4[src]
//     // // set values
//     // let dealerPoints = card1[pointValue] + card2[pointValue]
//     // let playerPoints = card3[pointValue] + card4[pointValue]
//     // //add card image to div
//     // dealerHand.append(card1Img,card2Img)
//     // dealerValue.append(dealerPoints)
//     // playerHand.append(card3Img,card4Img)
//     // playerValue.append(playerPoints)
// }
// // hit function
// const hit = () =>{
//     // add another random card
//     let newCard = deck.random(newCard)
//     let newCardImg = document.createElement("img")
//     newCard.src = newCard[src]
//     playerHand.append(newCardImg)

// }

// load game when window opened
// window.addEventListener("DOMContentLoaded", () => {

// })