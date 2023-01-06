const showFeatured = async () =>{
    const searchResultsContainer = document.querySelector(".searchResultsContainer")
    searchResultsContainer.innerHTML = ""
    const resultContainer = document.createElement("div")
    resultContainer.classList = "resultContainer"
    resultContainer.innerHTML = ""

    const featured = [13214,17251,178337,11690,178325]
    // Function to get urls into list
    const urlAndID = (array) =>{
        let URLlist = []
        for (let i=0; i<featured.length; i++){
            const num = featured[i]
            const newURL = "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + num.toString()
            URLlist.push(newURL)
        }
        return URLlist
    }
    let URLlist = urlAndID(featured)

    for (let i=0; i<URLlist.length; i++){
        const searchID = URLlist[i]
        const apiData = await fetch(searchID)
        const apiCocktails = await apiData.json()

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
    const searchRecipe = (id) => {
        localStorage.setItem("cocktail", id)
        window.location.href = "recipe.html"
    }
    }

    

}

window.addEventListener("load", showFeatured)
console.log("hi")


