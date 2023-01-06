<img src="cocktail_outline.png" alt="logo" style="width: 200px">

# Cocktail Search

### by Peter Riesing

---
### The Site
This is my first full front-end project, assigned by Digital Crafts. It uses html, css, and javascript to make a cohesive site. The entire site is based around the API from TheCocktailDB, an extensive collection of cocktail objects. Each object has values like drink name, glass type, a thumbnail image of the cocktail, ingredients and their measurements, recipe instructions, and other values. 

The site has 4 individual html pages - Home, Search, Recipe, and About.

The Home page consists of a nav bar, splash image, 5 featured cocktails, and a footer. Clicking on a featured cocktail redirects you to a recipe page. The Recipe page is blank html save for the nav bar, a div, and the footer. Using the API, information is pulled with a javascript funciton that takes the API id for the cocktail that was clicked and creates html elements with API information.

The Search page is simply a splash image with an input field and search button positioned on top. The input field takes the users input and appends it to the API's search URL. Cards for each result are then appended to the page using another javascript function. Again, clicking a cocktail name will redirect you to the Recipe page.

Finally, the About page is simply a page of overlapping images of cocktails and text where I implemented some new concepts (to me) I learned.

---
### Code
Javascript and the API are the backbone of this project. On the Home page I used a "for" loop to increment through a list of API ids. I appended those ids to the API's "lookup" URL that searches its data based on id. The Search page operates in a similar way. The html element "input field" takes the users input and appends it to the API's "search" URL. Both of these call a thumbnail image and a name and append them to and img and button and append those to the html doc. The Search page also makes use of local storage to collect the API id of the clicked cocktail. Upon being redirected to the Recipe page, the local storage takes the id and creates a recipe card. 

```
    const showRecipe = async() =>{
        const recipeID = localStorage.getItem("cocktail")
        const recipeIDURL = `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeID}`
        const apiData = await fetch(recipeIDURL)
        const recipe = await apiData.json()
```

The recipe card takes more detailed information from the API like the suggested glassware, recipe, measurements and ingredients. All of this information is turned into html elements using querySelector and createElement and then modifies their innerText or classNames.

I used this project to further my knowledge of CSS so I decided not to use a framework tool like Tailwind or Bootstrap. My style file is about 300 lines of code and makes use of many, many of classnames. I used concepts that I was not yet comfortable with to learn more about overlapping images, resizing based on screen size, and interactable element states.

---
### Thoughts
Given more time I would focus on adding content and further styling. I would consider adding another port to the API to perhaps search by ingredient or add filters to search results. I would also work more on media queries, especially on the nav bar.


See more in my [Medium Article](https://medium.com/@peter.riesing/shaken-up-43c51ba49d1c).

Thanks for reading.
