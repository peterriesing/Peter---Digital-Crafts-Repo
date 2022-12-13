// as a user:
// I will add a todo in an input list and then click or hit enter to add it to my page.
// I will have the input field cleared out after I submit a todo
// I will be able to delete a todo if I add one by clicking a red x next to each todo
// I will be able to persist all the data if I am so smart and figured this all out so that my todo survives a refresh

// get todo div
const list = document.querySelector(".list")
// get add button
const add = document.querySelector(".add")

// function for creating new item
const createItem = () => {
    // create new div for li and x button
    const newItemDiv = document.createElement("div")
    // select input
    let input = document.querySelector(".input")
    // create li
    const newItem = document.createElement('li')
    // create button
    const newItemX = document.createElement("button")
    // delete function
    const delItem = (item) => {
        item.remove()
    }
    // x button event listener
    newItemX.addEventListener("click", () => delItem(newItemDiv))
    // give li input text
    newItem.innerText = input.value
    // give button X text
    newItemX.innerText = "X"
    // give the new item div a class name
    newItemDiv.className = "item"
    // append the new item and x button to the new item div
    newItemDiv.append(newItemX,newItem)
    // append the new item div to the todo div
    list.append(newItemDiv)
    // reset input field
    input.value = ""
    //saving the added items
    // const store = () =>{
    //     localStorage.setItem('item', document.querySelector(".item").value);
    // }
    const saveInput = localStorage.getItem(newItem)
    const saveDiv = localStorage.getItem(newItemDiv)
    const saveButt = localStorage.getItem(newItemX)

    document.querySelector(saveDiv).value
    document.querySelector(saveInput).value
    document.querySelector(saveButt).value
    // store()
}
// event listener for add button
add.addEventListener("click", createItem)

// hint for persisting though refresh
// - local storage
// - inspect -> local storage