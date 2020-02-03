// function declaration
function doctorize1(name) {
    return `1:Dr. ${name}`;
}

console.log(doctorize1("Doctor1"));

// anonymous function
// function (name) {
//     return `Dr. ${name}`;
// }

// function expression
const doctorize2 = function(name) {
    return `2:Dr. ${name}`;
}

console.log(doctorize2("Doctor2"));

// arrow function
const inchToCm = inches => inches * 2.54;
console.log(inchToCm(1));

const add = (a, b=3) => a + b;
console.log(add(3, 4));


// IIFE
// immediately invoked function expression
(function() {
    console.log("Running from anonymous function");
    return "You are cool!";
}) ();


// methods

const person = {
    name: "John",
    sayHi: function() {
        console.log("Saying Hi!");
        return `${this.name} is saying hi to everyone`;
    },
    yellHi() {
        console.log("HELOOOOOO!");
        return "HELOOOOOO!";
    },
    whisper: () => "pssst..",
}

console.log(person.sayHi());
console.log(person.yellHi());
console.log(person.whisper());


// callback functions
//click callback
const button = document.querySelector(".clickMe");
console.log(button);
button.addEventListener("click", person.yellHi);
button.addEventListener("click", () => console.log("Pressed"));

//time callback
setTimeout(() => console.log("Done. Time to eat"), 10000);