import { getPets } from "./database.js"

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("pets")) {
//             const [,petId] = itemClicked.id.split("--")

//             for (const pet of pets) {
//                 if (pet.id === parseInt(petId)) {
//                     window.alert(`${pet.name} live in ${pet.city}`)
//                 }
//             }
//         }
//     }
// )

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pets--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

