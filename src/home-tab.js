import { firstLoad } from "./first-load"

const homeTab = function() {
    const homeBtn = document.createElement("button")
    homeBtn.textContent = "Home"
    document.body.prepend(homeBtn)
    homeBtn.addEventListener('click', function() {
        
        firstLoad()
    })
}

export {homeTab}