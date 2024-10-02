// Ex1
let numbers: number[] = Array(1,2,3,4,5,6,7,8,9,10)

for(let i =0;i<numbers.length;i++){
    for(let j=0;j<numbers.length;j++){
        let num1 =numbers[i];
        let num2 =numbers[j];
        let result = num1 * num2;
        // console.log(`${num1}x${num2}=${result}`);
    }
    
}

// Ex2
let person = {
    fName: "John",
    lName: "Doe"
  };
  document.body.innerHTML = `${person.fName} ${person.lName}`;
 
 let array = new Array(10).fill(person)

array.forEach(() => {
    document.body.innerHTML += `<p>${person.fName}</p>`;
    
 });

 const printLastName = () => {
    for (let i = 0; i < 10; i++) {
    //   console.log(person.lName);
    }
  };

  setTimeout(printLastName,500)

// Ex3
let Names: string[] = ["John", "Jane", "Alex", "Emily", "Chris"];

for(let i = 0;i<Names.length;i++){
    console.log(i); 
}
for(let i=0;i<Names.length;i++){
    console.log(Names[i]);
}
for(let i =0;i<Names.length;i++){
    console.log(`Index is ${i} and the value${Names[i]}`);
}

