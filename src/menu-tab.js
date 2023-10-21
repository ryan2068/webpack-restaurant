import { homeTab } from "./home-tab"

const menuLoader = function () {
    const contentId = document.querySelector("#content")
    const menuTitle = document.createElement("h1")
    const tortacosImage = document.createElement("img")
    const tortacosHeader = document.createElement("h3")
    const birriaImage = document.createElement('img')
    const birriaHeader = document.createElement("h3")
    tortacosImage.src = "https://images.squarespace-cdn.com/content/v1/5c5c7a1b51f4d4598cda25cf/1553570675675-41KQMOEDRJB0AHERQHA1/31-2.jpg"
    birriaImage.src = "https://www.thecookierookie.com/wp-content/uploads/2023/03/birria-tacos-square.jpg"
    tortacosImage.style.width = 37 + "vw"
    birriaImage.style.width = 37 + "vw"
    menuTitle.textContent = "Here is our fine and delicous meals we are serving today! Order as much as you'd like!"
    tortacosHeader.textContent = "This is our bowl catered to us by the tasy restaurant TorTacos"
    birriaHeader.textContent = "This is our birria catered to us by the tasty restaurant TorTacos"
    
    homeTab()
    
    //appends all the elements to the DOM
    contentId.appendChild(menuTitle)
    contentId.appendChild(tortacosHeader)
    contentId.appendChild(tortacosImage)
    contentId.appendChild(birriaHeader)
    contentId.appendChild(birriaImage)
    
}

export {menuLoader} 