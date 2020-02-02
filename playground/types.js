console.log("it works")

const name = "Dima";
let one = "one";
let two = 'two';
let three = `three`;

let sentence1 = "She's \"so cool\""
let sentence2 = `she's so "cool"`

let multiline = `sdl,kfjlskdjf
lsdkjflskdfj

sdlfkjsdlkfj


sdlkfjsldkfjlksdjf`;


let helloMessage = `Hello! My name is ${name}. I am ${100 + 1} years`;

let html = `
<div>
    <h2>${name}</h2>
    <p>${helloMessage}</p>
</div>`;

document.body.innerHTML = html;