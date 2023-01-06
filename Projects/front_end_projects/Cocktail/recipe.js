
const showRecipe = async() =>{
    const recipeID = localStorage.getItem("cocktail")
    const recipeIDURL = `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeID}`
    const apiData = await fetch(recipeIDURL)
    const recipe = await apiData.json()

    //PAGE TITLE
    const pageTitle = document.querySelector(".title")
    pageTitle.innerText = recipe.drinks[0].strDrink

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
    const recipeGlassDiv = document.createElement("div")
    recipeGlassDiv.className = "recipeGlassDiv"
    const recipeGlass = document.createElement("h1")
    recipeGlass.innerText = recipe.drinks[0].strGlass
    // INGREDIENTS
    const recipeItemsDiv = document.createElement("div")
    recipeItemsDiv.className = "recipeItemsDiv"
    const ingredientsText = document.createElement("p")
    ingredientsText.innerText = "Ingredients:"
    const recipeText = document.createElement("p")
    recipeText.innerText = "Assembly:"
    recipeText.className = "recipeText"
    ingredientsText.className = "recipeText"
    const recipeIngredientDiv = document.createElement("div")
    recipeIngredientDiv.className = "recipeIngredientDiv"
    const recipeMeasureDiv = document.createElement("div")
    recipeMeasureDiv.className = "recipeMeasureDiv"
    const recipeIngredientDiv2 = document.createElement("div")
    recipeIngredientDiv2.className = "recipeIngredientDiv"
    const recipeMeasureDiv2 = document.createElement("div")
    recipeMeasureDiv2.className = "recipeMeasureDiv"
    // INDIVIDUAL INGREDIENTS
    const recipeIngredient1 = document.createElement("li")
    recipeIngredient1.innerText = recipe.drinks[0].strIngredient1
    const recipeMeasure1 = document.createElement("li")
    recipeMeasure1.innerText = recipe.drinks[0].strMeasure1

    const recipeIngredient2 = document.createElement("li")
    recipeIngredient2.innerText = recipe.drinks[0].strIngredient2
    const recipeMeasure2 = document.createElement("li")
    recipeMeasure2.innerText = recipe.drinks[0].strMeasure2

    const recipeIngredient3 = document.createElement("li")
    recipeIngredient3.innerText = recipe.drinks[0].strIngredient3
    const recipeMeasure3 = document.createElement("li")
    recipeMeasure3.innerText = recipe.drinks[0].strMeasure3

    const recipeIngredient4 = document.createElement("li")
    recipeIngredient4.innerText = recipe.drinks[0].strIngredient4
    const recipeMeasure4 = document.createElement("li")
    recipeMeasure4.innerText = recipe.drinks[0].strMeasure4
    
    const recipeIngredient5 = document.createElement("li")
    recipeIngredient5.innerText = recipe.drinks[0].strIngredient5
    const recipeMeasure5 = document.createElement("li")
    recipeMeasure5.innerText = recipe.drinks[0].strMeasure5
    
    const recipeIngredient6 = document.createElement("li")
    recipeIngredient6.innerText = recipe.drinks[0].strIngredient6
    const recipeMeasure6 = document.createElement("li")
    recipeMeasure6.innerText = recipe.drinks[0].strMeasure6
    
    const recipeIngredient7 = document.createElement("li")
    recipeIngredient7.innerText = recipe.drinks[0].strIngredient7
    const recipeMeasure7 = document.createElement("li")
    recipeMeasure7.innerText = recipe.drinks[0].strMeasure7

    const recipeIngredient8 = document.createElement("li")
    recipeIngredient8.innerText = recipe.drinks[0].strIngredient8
    const recipeMeasure8 = document.createElement("li")
    recipeMeasure8.innerText = recipe.drinks[0].strMeasure8
    
    const recipeIngredient9 = document.createElement("li")
    recipeIngredient9.innerText = recipe.drinks[0].strIngredient9
    const recipeMeasure9 = document.createElement("li")
    recipeMeasure9.innerText = recipe.drinks[0].strMeasure9
    
    const recipeIngredient10 = document.createElement("li")
    recipeIngredient10.innerText = recipe.drinks[0].strIngredient10
    const recipeMeasure10 = document.createElement("li")
    recipeMeasure10.innerText = recipe.drinks[0].strMeasure10

    const recipeIngredient11 = document.createElement("li")
    recipeIngredient11.innerText = recipe.drinks[0].strIngredient11
    const recipeMeasure11 = document.createElement("li")
    recipeMeasure11.innerText = recipe.drinks[0].strMeasure11

    const recipeIngredient12 = document.createElement("li")
    recipeIngredient12.innerText = recipe.drinks[0].strIngredient12
    const recipeMeasure12 = document.createElement("li")
    recipeMeasure12.innerText = recipe.drinks[0].strMeasure12

    const recipeIngredient13 = document.createElement("li")
    recipeIngredient13.innerText = recipe.drinks[0].strIngredient13
    const recipeMeasure13 = document.createElement("li")
    recipeMeasure13.innerText = recipe.drinks[0].strMeasure13

    const recipeIngredient14 = document.createElement("li")
    recipeIngredient14.innerText = recipe.drinks[0].strIngredient14
    const recipeMeasure14 = document.createElement("li")
    recipeMeasure14.innerText = recipe.drinks[0].strMeasure14

    const recipeIngredient15 = document.createElement("li")
    recipeIngredient15.innerText = recipe.drinks[0].strIngredient15
    const recipeMeasure15 = document.createElement("li")
    recipeMeasure15.innerText = recipe.drinks[0].strMeasure15

    // INSTRUCTIONS
    const recipeInstructionDiv = document.createElement("div")
    recipeInstructionDiv.className = "recipeInstructionDiv"
    const recipeInstruction = document.createElement("p")
    recipeInstruction.innerText = recipe.drinks[0].strInstructions

    //APPEND
    recipeNameDiv.append(recipeName)

    recipeGlassDiv.append(recipeGlass)

    recipeIngredientDiv.append(recipeIngredient1,recipeIngredient2,recipeIngredient3, recipeIngredient4,recipeIngredient5,recipeIngredient6,recipeIngredient7,recipeIngredient8)

    recipeMeasureDiv.append(recipeMeasure1,recipeMeasure2,recipeMeasure3,recipeMeasure4,recipeMeasure5,recipeMeasure6,recipeMeasure7,recipeMeasure8)

    recipeIngredientDiv2.append(recipeIngredient9,recipeIngredient10,recipeIngredient11,recipeIngredient12,recipeIngredient13,recipeIngredient14,recipeIngredient15)

    recipeMeasureDiv2.append(recipeMeasure9,recipeMeasure10,recipeMeasure11,recipeMeasure12,recipeMeasure13,recipeMeasure14,recipeMeasure15)

    recipeItemsDiv.append(recipeMeasureDiv,recipeIngredientDiv,recipeMeasureDiv2,recipeIngredientDiv2)

    recipeInstructionDiv.append(recipeInstruction)

    recipeDetailsDiv.append(recipeNameDiv,recipeGlassDiv,ingredientsText,recipeItemsDiv,recipeText,recipeInstructionDiv)

    recipeConstainer.append(recipeImage,recipeDetailsDiv)

}

window.addEventListener("load", showRecipe)
