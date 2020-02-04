const people = [
    { name: "Wes", cool: true, country: "Canada"},
    { name: "Scott", cool: true, country: "Merica"},
    { name: "Snickers", cool: false, country: "Dob country"},
];

people.forEach((person, index) => {
    console.log(person.name);;
});


function doctorize(name) {
    console.count(`running doctorize for ${name}`);
    return `Dr. ${name}`;
}

function greet(name) {
    return `Hello ${name}`;
}

function go(name) {
    return greet(doctorize(name));
}

