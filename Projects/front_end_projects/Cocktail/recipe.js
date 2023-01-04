
const showRecipe = async() =>{
    const recipeID = localStorage.getItem("cocktail")
    const recipeIDURL = `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeID}`
    const apiData = await fetch(recipeIDURL)
    const recipe = await apiData.json()

    const recipeConstainer = document.querySelector(".individualCocktail")
    // IMAGE
    const recipeImage = document.createElement("img")
    recipeImage.src = recipe.drinks[0].strDrinkThumb
    recipeImage.className = "recipeImage"
    // NAME
    const recipeDetailsDiv = document.createElement("div")
    recipeDetailsDiv.className = "recipeDetailsDiv"
    const recipeNameDiv = document.createElement("div")
    const recipeName = document.createElement("h1")
    recipeName.innerText = recipe.drinks[0].strDrink
    recipeNameDiv.className = "recipeNameDiv"
    // INFO
    const recipeInfoDiv = document.createElement("div")
    recipeInfoDiv.className = "recipeInfoDiv"
    const recipeIBA = document.createElement("h1")
    recipeIBA.innerText = recipe.drinks[0].strIBA
    const recipeGlass = document.createElement("h1")
    recipeGlass.innerText = recipe.drinks[0].strGlass
    // INGREDIENTS
    const recipeIngredientDiv = document.createElement("div")
    recipeIngredientDiv.className = "recipeIngredientDiv"
    const recipeIngredients = document.createElement("li")
    recipeIngredients.innerText = recipe.drinks[0].strIngredient1
    const recipeMeasure = document.createElement("li")
    recipeMeasure.innerText = recipe.drinks[0].strMeasure1
    // INSTRUCTIONS
    const recipeInstructionDiv = document.createElement("div")
    recipeInstructionDiv.className = "recipeInstructionDiv"
    const recipeInstruction = document.createElement("p")
    recipeInstruction.innerText = recipe.drinks[0].strInstructions

    recipeNameDiv.append(recipeName)
    recipeInfoDiv.append(recipeIBA,recipeGlass)
    recipeIngredientDiv.append(recipeMeasure,recipeIngredients)
    recipeInstructionDiv.append(recipeInstruction)
    recipeDetailsDiv.append(recipeNameDiv,recipeInfoDiv,recipeIngredientDiv,recipeInstructionDiv)
    recipeConstainer.append(recipeImage,recipeDetailsDiv)

}

window.addEventListener("load", showRecipe)
