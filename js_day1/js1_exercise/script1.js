//Basic Exercises

//1

// Step 1: Print the initial message
console.log("Hi my name is Martin");

// Step 2: Create a variable for your name
let name = "Mohannad";

// Step 3: Update the console log to use the name variable
console.log("Hi, my name is " + name);

// Step 4: Create another variable for your age
let age = 25; // Replace 25 with your actual age

// Step 5: Update the console log to display both the name and age
console.log("Hi, my name is " + name + " and I am " + age + " years old.");

//2

// Create the players array
let players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];

// Access the third player (array index starts from 0, so third player is at index 2)
let thirdPlayer = players[2];

// Output the message to the console
console.log("The most valuable player of the match is " + thirdPlayer);

//Intermediate Exercises

//1

// Array of car brand names
let carBrands = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];

// Sorting the array alphabetically
carBrands.sort();

// Display the sorted array
console.log("Sorted car brands:", carBrands);

//2

// First Array of Fruits
let fruits = ['apple', 'banana', 'kiwi', 'mango', 'pear'];

// 1. Add 'orange' to the array
fruits.push('orange');
console.log("1. Fruits with 'orange' added:", fruits);

// 2. Remove the first element ('apple')
fruits.shift();
console.log("2. Fruits after removing 'apple':", fruits);

// 3. Add 'apple' back at the beginning and removing orange
fruits.unshift('apple');
fruits.pop();
console.log("3. Fruits after adding 'apple' back:", fruits);

// 4. Replace 'apple' with 'strawberry'
fruits[0] = 'strawberry';
console.log("4. Fruits after replacing 'apple' with 'strawberry':", fruits);

// Second Array of Animals
let animals = ['monkey', 'horse', 'dog', 'elephant', 'giraffe'];

// 1. Remove the first element ('monkey')
animals.shift();
console.log("1. Animals after removing 'monkey':", animals);

// 2. Add 'cat' to the beginning of the array
animals.unshift('cat');
console.log("2. Animals after adding 'cat' at the beginning:", animals);

// 3. Remove the last element ('giraffe')
animals.pop();
console.log("3. Animals after removing the last element:", animals);

// 4. Add 'tiger' to the end of the array
animals.push('tiger');
console.log("4. Animals after adding 'tiger' at the end:", animals);

// Sort the animals array in reverse alphabetical order
animals.sort().reverse();
console.log("5. Animals sorted in reverse alphabetical order:", animals);

//3

// String containing the fruits
let FruitString = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

// Splitting the string into an array of fruits
let Fruits = FruitString.split("/").join("<br>")

// Loop through the array and display each fruit on a new line
// Fruits.forEach(function(Fruit) {
//     document.write(Fruit + "<br>" +"<br>");
// });
let demo = 
document.write(FruitString.replaceAll("/","<br>"))

let fname = "Hassan";
document.write(`<h1 id='demo'>${fname} </h1>`);