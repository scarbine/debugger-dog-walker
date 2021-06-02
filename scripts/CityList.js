import { getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("cities")) {
            const [,citiesId] = itemClicked.id.split("--")
            for (const walker of walkers) {
                if (walker.id === parseInt(citiesId)) {
                    window.alert(`${walker.name} is the walker for ${walker.city}`)
                }
            }
        }
    }
)

const walkers = getWalkers()


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const walker of walkers) {
        citiesHTML += `<li id="cities--${walker.id}">${walker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

