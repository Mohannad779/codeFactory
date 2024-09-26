// Declare variables for the first set
let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;

// Sum the variables and store the total
let sum = a + b + Number(c) + Number(d) + e;

// Declare variables for the second set
let f = '1';
let g = 15;
let h = 8;
let i = "1";

// Multiply the variables and store the product
let product = Number(f) * g * h * Number(i);

// Divide the sum by the product
let result = sum / product;

// Print the result in the web browser
document.getElementById("result").textContent = result;



