
const firstLoad = function () {
    const contentId = document.querySelector("#content")
    const header = document.createElement('h2')
    header.textContent += "Welcome to The Palate Palace. Here we serve diverse foods from all around the world that are sure to keep you satisfied!"

    const peopleEatingImage = document.createElement("img")
    peopleEatingImage.src += "https://www.visitphilly.com/wp-content/uploads/2022/01/double-knot-people-eating-JFusco-for-vp-2200x1237px.jpg"
    peopleEatingImage.style.height = 36.5 + "vw"

    const footer = document.createElement('h3')
    footer.textContent += "After growing up in Los Angeles, we eventually moved to Maryland in 1999 and soon became frustrated with the lack of Mexican food options. We were used to  having meat in our burritos and spice in our salsas! Thus began Dads daydreams of bringing L.A. style tacos and Mexican food to the suburbs of Maryland. Twelve years later, this dream was realized with the opening of Ryans Restaurant." 

    contentId.appendChild(header)
    contentId.appendChild(peopleEatingImage)
    contentId.appendChild(footer)
    
}



export {firstLoad}