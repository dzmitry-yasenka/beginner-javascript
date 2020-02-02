console.log("it works")

// types - strings
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

// types - number
const age = 100.5;

const a = 20;
const b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.round(2.49));
console.log(Math.round(2.5));
console.log(Math.floor(2.999));
console.log(Math.ceil(2.111));

//types - objects

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 100
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// null and undefined
let somethingUndefined;
let somethingNull = null;