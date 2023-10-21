import { firstLoad } from "./first-load"

const contentDiv = document.querySelector("#content")
const homeBtn = document.createElement("button")
if (homeBtn) {
    homeBtn.remove()
}

const homeTab = function() {
    homeBtn.textContent = "Home"
    document.body.prepend(homeBtn)
    homeBtn.addEventListener('click', function() {
        contentDiv.innerHTML = ""
        firstLoad()
    })
}

export {homeTab}