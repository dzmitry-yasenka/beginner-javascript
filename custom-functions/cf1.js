// function definition
function  calculateBill(billAmount, taxRate = 0.13, tipRate = 0.18) {
    console.log("Running calculateBill");
    var totalCost = billAmount + billAmount * taxRate + billAmount * tipRate;
    return totalCost;
}

const billAmount = 100;
const billTotal1 = calculateBill(100, 0.3, 0.15);
console.log(billTotal1);
const billTotal2 = calculateBill(100);
console.log(billTotal2);

var name = "Doctor";

function sayHiTo(name) {
    return `Hello to ${name}!`;
}

function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(message) {
    return message.toUpperCase();
}

console.log(yell(sayHiTo(doctorize(name))));