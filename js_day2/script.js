// let sunnyDay = false;

// if (sunnyDay){
// console.log("Weather is good");
// }else{
//     console.log("Weather is not good"); 
// }

// let num = 0;

// if(num >0){
//   console.log("The number is positive");
// }else if(num < 0){
//     console.log("The number is Negative");
// }else{
//     console.log("The number is zero");
// }

// let num1 = "1"

// if (num1 === 1){
//     console.log("Correct"); 
// }else{
//     console.log("this is not number"); 
// }

// let age = "text";
// let hasLicense = true;

// if(age >= 18 && hasLicense){
// console.log("You are eligible to drive");
// }else if (age<18 || !hasLicense){
//     console.log("You are not eligible to drive");
// }else{
//     console.log("please enter a valid age and license status");
// }

// let dayOftheweek = 4;
// switch(dayOftheweek){
// case 1:
//     console.log("Today is Monday");
//     break;
//  case 2:
//     console.log("Today is Tuesday");
//     break;
// case 3:
//     console.log("Today is Wednesday");
//     break;
//     case 4:
//    case 5:
//     console.log("its a week day");
//     break
//     case 6:
//         case 7:
//             console.log("its a weekend day");
//     default:
//         console.log("Unknown day of the week");
// }


// function greet(name = "User"){
//     console.log("Hello "+ name);
// }

// greet("John");
// greet("Anna");
// greet("Max");
// greet("Ben");
// greet()


// function calculateArea(length, width){
//   let area = length * width;
//     // console.log(`The area of ectangle is $(area)`)
//     return area
// }
// document.write("Hello")
// console.log(calculateArea(5, 8));

// document.write("The area of rectangle is: " + calculateArea(5, 8))

// let average = function (num1,num2,num3) {
//     let sum = num1+num2+num3
//     return sum/3;
// };

// console.log(average(45,25,26));

// (function(x,y){
//     console.log(x ,y);
// })(5, 8);


// // function greet(name = "User"){
// //     console.log("Hello "+ name);
// // }

// let greet = name => "Hello "+ name;
// console.log(greet("Jame"));
 

// Scope

// let globalVar = "I am a global variable"

// console.log(globalVar);

// if (4>3) {
//     console.log(globalVar);
// }

// function testfunction() {
//     let functionVar = "I am a functiona variable"
//     console.log(globalVar); 
//     console.log(functionVar);
//     if (true) {
//         let blockVar = "I am a block variable"
//         console.log(functionVar);
//         console.log(blockVar);
//     }
//     (function anotherfunction(){
//         console.log(functionVar);
        
//     })
// }
// testfunction();


// Math building object

// const pi = Math.PI;
// console.log(pi);

// let randomNumber = Math.floor(Math.random()*10) +1
// console.log(randomNumber);

// let min = -30;
// let max = 10;

// let randomNumber1 = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomNumber1);


// Date built in object

// let currentDate = new Date();
// console.log(currentDate.getDate());

// let year = currentDate.getFullYear()
// let month = currentDate.getMonth()+1
// let day = currentDate.getDate()
// console.log(`current date is: ${day}/${month}/${year}`);

// let hours = currentDate.getHours()
// let minutes = currentDate.getMinutes()
// let seconds = currentDate.getSeconds()
// console.log(`current time is: ${hours}/${minutes}/${seconds}`);

// document.write(`current date is: ${day}/${month}/${year}`)

let firstName = prompt("Enter your name:")
let birthYear = parseInt(prompt("Enter your birth year"))
console.log(firstName);
console.log(typeof birthYear);

let minAge = 18;

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
if (age >= minAge) {
    document.write(`Hello ${firstName}, you are eligible to apply for driving license`)
} else {
document.write(
    `Hello ${firstName}, you are not eigible to apply for driving license `
)
}
