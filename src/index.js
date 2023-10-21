import {firstLoad} from "./first-load.js"
import {menuLoader} from "./menu-tab.js"


const contentDiv = document.querySelector("#content")

//creates navigation tabs at the top of the page
const contactTab = document.createElement("button")
const menuTab = document.createElement("button")
contactTab.textContent += "Contact Us"
menuTab.textContent += "Menu"


document.body.prepend(contactTab)
document.body.prepend(menuTab)

firstLoad()


menuTab.addEventListener('click', function() {
    contentDiv.innerHTML = ""
    menuLoader()
})



