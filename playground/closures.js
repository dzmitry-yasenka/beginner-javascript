function outerFunction() {
    var outerVariable = "I am the outer variable";
    function innerFunction() {
        var innerVariable = "I am the inner variable";
        console.log(outerVariable);
        console.log(innerVariable);
    }
    return innerFunction;
}

var inner = outerFunction();

inner();


function incrementorFactory(step) {
    return (argument) => argument + step;
}

var incrementBy2 = incrementorFactory(2);
var incrementBy3 = incrementorFactory(3);
var incrementBy5 = incrementorFactory(5);

console.log(incrementBy2(10));
console.log(incrementBy3(10));
console.log(incrementBy5(10));


function createGreeting(greeting = "") {
    const newGreeting = greeting.toUpperCase();
    return function(name) {
        return `${newGreeting} ${name}`;
    }
}

const sayHello = createGreeting("Hello");
const sayHey = createGreeting("hey");

console.log(sayHello("wes"));
console.log(sayHey("wes"));