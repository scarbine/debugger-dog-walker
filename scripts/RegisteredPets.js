import { getPets, getWalkers} from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pets")) {
            const [,petId] = itemClicked.id.split("--")

            let pet = pets.find(item => item.id == parseInt(petId)) 
            let walker = walkers.find(item => item.id == pet.walkerId) 
            window.alert(`${pet.name} is being walked by ${walker.name} in ${walker.city}.`)
        }
    }
)


export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pets--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
  
//   let user = users.find(item => item.id == 1);
  
//   alert(user.name); // John

// import { getPets, getWalkers} from "./database.js"

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("pets")) {
//             const [,petId] = itemClicked.id.split("--")

//             for (const pet of pets) {
//                 if (pet.id === parseInt(petId)) {
//                     for (const walker of walkers)
//                         if ( walker.id === pet.walkerId){
//                             window.alert(`${pet.name} is being walked by ${walker.name} in ${walker.city}.`)
//                         }
//                 }
//             }
//         }
//     }
// )

// const pets = getPets()
// const walkers = getWalkers()

// export const RegisteredPets = () => {
//     let petHTML = "<ul>"

//     for (const pet of pets) {
//         petHTML += `<li id="pets--${pet.id}">${pet.name}</li>`
//     }

//     petHTML += "</ul>"

//     return petHTML
// }
