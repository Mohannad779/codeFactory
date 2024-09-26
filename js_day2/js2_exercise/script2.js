//1
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }
console.log(capitalizeFirstLetter("ana"));


  //2
  function grades(Math, Physics, English){
  if (typeof Math !== 'number' || typeof Physics !== 'number' || typeof English !== 'number') {
    throw new Error("All grades must be numbers");
  }
    let Sum = Math + Physics + English;
    let Average = Sum /3;

    // return `sum : ${Sum} <br> Average : ${Average}` 
    return [Sum,Average]
  }
  
document.write(`Sum : ${grades(5,5,5)[0]} <br> Average : ${grades(5,5,5)[1]} `)


//Ex1
function convertMinutes(totalMinutes) { 
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    
    return `${totalMinutes} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
}
console.log(convertMinutes(200)); 
