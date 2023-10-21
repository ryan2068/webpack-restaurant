import {firstLoad} from "./first-load.js"
import {menuLoader} from "./menu-tab.js"
import { homeTab } from "./home-tab.js"
import {contactLoader} from "./contact-tab.js"


const contentDiv = document.querySelector("#content")



//creates navigation tabs at the top of the page
const contactTab = document.createElement("button")
const menuTab = document.createElement("button")
contactTab.textContent += "Contact Us"
menuTab.textContent += "Menu"

document.body.prepend(contactTab)
document.body.prepend(menuTab)



contactTab.addEventListener('click', function() {    
    contentDiv.innerHTML = ""
    contactLoader()
    homeTab()

})

menuTab.addEventListener('click', function() {
    contentDiv.innerHTML = ""
    menuLoader()
    homeTab()
    
})


firstLoad()


