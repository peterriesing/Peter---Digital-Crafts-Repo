console.log(window)
console.log(document)
// window and document act as an object in javascript

// DOM manuipulation
// SELECTING
const howdyHeader = document.getElementById("howdy");
const howdyHeader2 = document.getElementsByClassName("howdy")
console.log(howdyHeader2[0].innerHTML)

const megsDiv = document.getElementById("megsDiv")
const petersImg = document.getElementById("petersImg")
const mauro = document.getElementsByClassName("mauro")
const rokhaya = document.getElementById("rokhaya")
const corey = document.getElementById("corey")
const jaye = document.getElementsByClassName("drj")
const jessika = document.getElementById("jessika")
// querySelector selects one element by .class or #id name
const ethan = document.querySelector(".ethan")
console.log(ethan)


// MODIFY TEXT
// changes the text of the HTML element
ethan.innerText = "the best TA"
jessika.innerText = "JESSIKA"
title.innerText = "MEGSDIV = This was created in Javascript"
para.innerText = "paragraph"


// CREATING ELEMENTS
const title = document.createElement("h2")
const para = document.createElement("p")

// APPENDING
megsDiv.append(title, para)


// you then can create modify or delete whatever you 
// want on what you selected

// then you append it back to the DOM