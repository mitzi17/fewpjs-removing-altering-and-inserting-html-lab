// Write your code here!

let element = document.querySelector("main#main")
element.remove()

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!"