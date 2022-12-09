const listOfPokemon = [
    {name:"Gengar", hp:220, move1:"ShadowBall",move2: "Curse", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"},
    {name: "MilTank", hp:300, move1: "Rollout", move2:"BodySlam", picture:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png"},
    {name:"Garchomp", hp:200, move1:"HyperBeam",move2: "Eathquake", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"},
    {name:"Swampert", hp:190, move1:"hydropump",move2: "mudshot", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png"},
    {name:"Phanpy", hp:120, move1:"playrough",move2: "tackle", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png"},
];
const body = document.getElementsByTagName("body")[0]

const container = document.createElement("div")
container.className = "container"

for (const poke of listOfPokemon){
    const pokeDiv = document.createElement("div")
    const pokeName = document.createElement("h1")
    const pokeHP = document.createElement("h2")
    const pokeMove1 = document.createElement("h3")
    const pokeMove2 = document.createElement("h3")
    const pokeImg = document.createElement("img")
    pokeDiv.className = "card"
    pokeName.innerText = poke.name
    pokeHP.innerText = poke.hp
    pokeMove1.innerText = poke.move1
    pokeMove2.innerText = poke.move2
    pokeImg.src = poke.picture


    pokeDiv.append(pokeImg,pokeName,pokeHP,pokeMove1,pokeMove2)
    container.append(pokeDiv)
}
body.append(container)
