// let cocktailName = document.querySelector(".input").value

// const searchNameURL = `www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`

// // const cocktailID

// const margaritaURL = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007"

const searchCocktailName = async () =>{
    const resultContainer = document.createElement("div")
    resultContainer.classList = "recipeContainer"
    resultContainer.innerHTML = ""

    const searchInput = document.querySelector(".input").value

    const searchNameURL = `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
    const apiData = await fetch(searchNameURL)
    const apiCocktails = await apiData.json()

    console.log(apiCocktails.drinks)

    // apiCocktails.drinks.foreach(async (cocktail) =>{
    //     const cocktailCard = document.createElement("div")
    //     const cocktailImage = document.createElement("img")
    //     const cocktailName = document.createElement("h1")
    //     console.log(cocktail.strDrink)
    //     cocktailImage.src = apiCocktails.drinks.strDrinkThumb
    //     cocktailName.innerText = apiCocktails.drinks.strDrink

    //     cocktailCard.append(cocktailImage,cocktailName)
    //     resultContainer.append(cocktailCard)
    // })

}


const searchButton = document.querySelector(".searchButton")
searchButton.addEventListener("click", searchCocktailName)