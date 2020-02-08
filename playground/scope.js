const first = "wes";
let second = "bos";
var age = 100;

console.log(first); // wes
console.log(second); // bos
console.log(age); // 100

console.log(window.first); // undefined
console.log(window.second); // undefined
console.log(window.age); // 100

const globalVariable = 200;

function go() {
    const age = 300;
    const hair = "blonde";
    console.log(age);
    console.log("local variable - " + hair);
}

go();

console.log(globalVariable);
//console.log(hair); // ReferenceError: hair is not defined

if (1 === 1) {
    const cool = true;
}

//console.log(cool); // ReferenceError: hair is not defined

function sayHi(name) {
    function yell() {
        console.log(name);
    }

    yell();
}

sayHi("Wes");

