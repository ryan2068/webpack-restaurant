const contentDiv = document.querySelector("#content")

const contactLoader = function() {
    const header = document.createElement("h1")
    const contact1 = document.createElement("h3")
    const contact2 = document.createElement("h3")
    header.textContent = "Contact Us"
    contact1.textContent = "Paul Galker, Phone Number: 333-212-4423"
    contact2.textContent = "Brent Chugus, Phone Number: 323-212-5445"


    contentDiv.appendChild(header)
    contentDiv.appendChild(contact1)
    contentDiv.appendChild(contact2)
    console.log("contact page worsk")
}

export { contactLoader }



