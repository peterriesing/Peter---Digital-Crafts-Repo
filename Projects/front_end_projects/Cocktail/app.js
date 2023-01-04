const searchResultsContainer = document.querySelector(".searchResultsContainer")

const searchCocktailName = async () =>{
    const resultContainer = document.createElement("div")
    resultContainer.classList = "resultContainer"
    resultContainer.innerHTML = ""

    const searchInput = document.querySelector(".input").value

    const searchNameURL = `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
    const apiData = await fetch(searchNameURL)
    const apiCocktails = await apiData.json()
    // helper function to set item in local storage that way we can get the name
    // then navigate to recipe.html
    const searchRecipe = (id) => {
        console.log(id)
        localStorage.setItem("cocktail", id)
        window.location.href = "recipe.html"
    }
    apiCocktails.drinks.forEach(async = (cocktail) => {
        const cocktailCard = document.createElement("div")
        const cocktailImage = document.createElement("img")
        const cocktailName = document.createElement("button")
        // on click eventlistener
        cocktailName.onclick = () =>searchRecipe(cocktail.idDrink)
        cocktailCard.className = "cocktailCard"
        cocktailName.className = "cocktailName"
        cocktailImage.src = cocktail.strDrinkThumb
        cocktailName.innerText = cocktail.strDrink

        cocktailCard.append(cocktailImage,cocktailName)
        resultContainer.append(cocktailCard)
        searchResultsContainer.append(resultContainer)
    });
}

// another function that expands the cocktail card and adds details and recipe upon clicking the name, "+", "recipe", or "see more"

// maybe change the class name so the styling can change
// how to remove the styling when 

const searchButton = document.querySelector(".searchButton")
searchButton.addEventListener("click", searchCocktailName)

