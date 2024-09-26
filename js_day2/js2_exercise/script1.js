//1
// Generate a random temperature between -5°C and 25°C
let temperature = Math.random() * 30 - 5;

// Round the temperature to one decimal place
temperature = Math.round(temperature * 10) / 10;

// Categorize the temperature
if (temperature <= 10) {
  console.log("The weather is cold.");
} else {
  console.log("The weather is moderate.");
}



//2
let favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];

function randomFood() {
  let randomIndex = Math.floor(Math.random() * favoriteFoods.length);
  
  return favoriteFoods[randomIndex];
}

console.log(randomFood());



// //3
// let childrenNumber = prompt("number of children")
// let partnerName = prompt("partner's name")
// let geographicLocation = prompt("geographic location")
// let jobtitle = prompt("job title")
// document.write(`You will be a ${jobtitle} in ${geographicLocation}, and married to ${partnerName}
// with ${childrenNumber} kids.`)



//4
// function ageCalculator(birthYear, currentYear) {
//     let ageOption1 = currentYear - birthYear;
//     let ageOption2 = ageOption1 - 1;
//     return `You are either ${ageOption2} or ${ageOption1}.`;
//   }
//   console.log(ageCalculator(1993, 2024)); 


  //5
  let currentDate = new Date();
  let year = currentDate.getFullYear()
  
  function ageCalculator(birthYear) {
    let ageOption1 = year - birthYear;
    let ageOption2 = ageOption1 - 1;
    return `You are either ${ageOption2} or ${ageOption1}.`;
  }
  console.log(ageCalculator(1993, 2024));


  //6
  function degreesToRadians(degrees) {
    const pi = Math.PI;
    return degrees * (pi / 180);
  }
  console.log(degreesToRadians(90));


  //7
  function calculateBoxProperties(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
  
    return `The area of the box is: ${area}\nThe volume of the box is: ${volume}`;
  }
  console.log(calculateBoxProperties(2, 7, 5));


  