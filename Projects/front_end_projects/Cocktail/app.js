const searchResultsContainer = document.querySelector(".searchResultsContainer")

const searchCocktailName = async () =>{
    const resultContainer = document.createElement("div")
    resultContainer.classList = "resultContainer"
    resultContainer.innerHTML = ""

    const searchInput = document.querySelector(".input").value

    const searchNameURL = `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
    const apiData = await fetch(searchNameURL)
    const apiCocktails = await apiData.json()

    apiCocktails.drinks.forEach(async = (cocktail) => {
        console.log(cocktail.strDrink)
        const cocktailCard = document.createElement("div")
        const cocktailImage = document.createElement("img")
        const cocktailName = document.createElement("h1")

        cocktailCard.className = "cocktailCard"
        cocktailName.className = "cocktailName"
        cocktailImage.src = cocktail.strDrinkThumb
        cocktailName.innerText = cocktail.strDrink

        cocktailCard.append(cocktailImage,cocktailName)
        resultContainer.append(cocktailCard)
        searchResultsContainer.append(resultContainer)
    });
}


const searchButton = document.querySelector(".searchButton")
searchButton.addEventListener("click", searchCocktailName)