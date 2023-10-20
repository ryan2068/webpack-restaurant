import {firstLoad} from "./first-load.js"

const contentDiv = document.querySelector("#content")

//creates tabs at top of page
const contactTab = document.createElement("button")
const menuTab = document.createElement("button")
contactTab.textContent += "Contact Us"
menuTab.textContent += "Menu"
contentDiv.appendChild(contactTab)
contentDiv.appendChild(menuTab)



menuTab.addEventListener('click', {
    
})



firstLoad()

console.log("hello world")