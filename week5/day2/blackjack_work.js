const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

const makeDeck = (rank, suit) => {
    const card = {
        rank: rank,
        suit: suit,
        src: `${rank}_of_${suit}.png`,
        }
    };
    deck.push(card);
console.log(deck)

for (let suit of suits) {
    for (const rank of ranks) {
        makeDeck(rank, suit);
    }
}

window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});
