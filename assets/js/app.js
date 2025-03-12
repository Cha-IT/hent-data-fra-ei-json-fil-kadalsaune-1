import sanger from "../json/sanger.json" with { "type": "json"}

const sangliste = document.querySelector("#sangliste")
sanger.forEach(sang => {
    sangliste.innerHTML += `<li>${sang.tittel} - ${sang.artist}</li>`
})

console.log(sanger)