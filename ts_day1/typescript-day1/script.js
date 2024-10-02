"use strict";
let message = 'Hello world';
// console.log(message);
message = 'Good morning';
// console.log(message);
let num1 = 50;
// console.log(num1);
let sunnyDay = true;
// console.log(sunnyDay);
let numbersArr = [1, 2, 3, 4];
// console.log(numbersArr);
let names = ['John', 'Anna', 'Bob'];
// console.log(names);
let differentTypesArr = ["John", 3, true];
// console.log(differentTypesArr);
let animals = [
    { name: "Buddy", type: 'dog', age: 4, adopted: true },
    { name: "Garfield", type: 'cat', age: 2, adopted: false },
    { name: "Snowball", type: 'rabbit', age: 1 }
];
// console.log(animals);
let people = [
    { firstName: 'John', age: 25, phoneNumber: 123123 },
    { firstName: 'Marta', age: 25 }
];
// console.log(people);
for (let i = 0; i < people.length; i++) {
    let element = people[i];
    // console.log(element.firstName);
}
let result = document.getElementById('result');
animals.forEach(animal => {
    result.innerHTML += `
    <p>Name: ${animal.name}</p>
    <p>Age: ${animal.age}</p>
    <p>Adopted: ${animal.adopted ? 'yes' : 'no'}</p>
    <hr>
    `;
});
for (let item of animals) {
    // console.log(item.name);
}
let obj = {
    name: 'John',
    age: 20,
    email: 'john@mail.com'
};
for (let key in obj) {
    // console.log(key);
}
for (let [key, value] of Object.entries(obj)) {
    // console.log(key, value);
}
function greet(name) {
    // if(name){
    //     return `Hello ${name}`
    // }else{
    //     return `Hello Anonymous` 
    // }
    return name ? `Hello ${name}` : `Hello Anonymous`;
}
// console.log(greet('John'));
// console.log(greet());
let sum = (a, b) => a + b;
// console.log(sum(52,56));
// function higherOrderFunc(callback : () => void){
//     console.log("I am going to invoke another function");
//     callback()
// }
// function anotherFunc(){
//     console.log("I am being invoked by the higher order function");
// }
// higherOrderFunc(anotherFunc)
let varA = '1'; //global scope
console.log(varA);
function testFunc() {
    let varB = '2'; //functional scope
    if (4 > 3) {
        let varC = '3';
        console.log(varC);
    }
}
// console.log(varB);//error
// console.log(varC); // error
testFunc();
