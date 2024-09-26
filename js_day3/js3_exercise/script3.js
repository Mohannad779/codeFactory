//Ex1
// let martin = [76, 64, 81, 57, 94];
// let thomas = [85, 49, 81, 72, 55];
// let klaus = [65, 91, 84, 67, 85];
// let maria = [93, 70, 81, 64, 84];
// let david = [81, 99, 71, 100, 69];

// function calculateAverageGrade(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   let average = sum / grades.length;
//   return average;
// }


// function determineGrade(average) {
//   if (average < 60) {
//     return "F";
//   } else if (average < 70) {
//     return "D";
//   } else if (average < 80) {
//     return "C";
//   } else if (average < 90) {
//     return "B";
//   } else {
//     return "A";
//   }
// }


// let martinAverage = calculateAverageGrade(martin);
// let thomasAverage = calculateAverageGrade(thomas);
// let klausAverage = calculateAverageGrade(klaus);
// let mariaAverage = calculateAverageGrade(maria);
// let davidAverage = calculateAverageGrade(david);


// let martinGrade = determineGrade(martinAverage);
// let thomasGrade = determineGrade(thomasAverage);
// let klausGrade = determineGrade(klausAverage);
// let mariaGrade = determineGrade(mariaAverage);
// let davidGrade = determineGrade(davidAverage);


// console.log(`Martin: Average grade = ${martinAverage.toFixed(2)}, Grade = ${martinGrade}`);
// console.log(`Thomas: Average grade = ${thomasAverage.toFixed(2)}, Grade = ${thomasGrade}`);
// console.log(`Klaus: Average grade = ${klausAverage.toFixed(2)}, Grade = ${klausGrade}`);
// console.log(`Maria: Average grade = ${mariaAverage.toFixed(2)}, Grade = ${mariaGrade}`);
// console.log(`David: Average grade = ${davidAverage.toFixed(2)}, Grade = ${davidGrade}`);

// let classAverage = (martinAverage + thomasAverage + klausAverage + mariaAverage + davidAverage) / 5;
// let classGrade = determineGrade(classAverage);

// console.log(`Class average: ${classAverage.toFixed(2)}, Grade = ${classGrade}`);


//Ex2
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }



  //Ex3
//   let star= "*";
//   for(let i = 1;i <= 6; i++){
//     document.getElementById("star").innerHTML += `${star} <br>`
//     // star = star + "*"
//     star += "*"
// }



//Ex3
let Students = ["John", "Jane", "Ana", "Jade", "Hana"]
let MathGrades = [70, 85, 50, 100, 80]   
let studentName = prompt("Enter a student's name");
    
let index = Students.indexOf(studentName);
   if (index !== -1) {
     
    let grade = MathGrades[index];
      let color;
      if (grade < 60) {
        color = "Red";
      } else if (grade >= 60 && grade < 70) {
        color = "Yellow";
      } else if (grade >= 70 && grade < 100) {
        color = "Green";
      } else if (grade == 100) {
        color = "Blue";
      }
  
      document.body.innerHTML += `<p style="color: ${color}">${studentName} has reached ${grade} points in Math this season.</p>`;
    } else {
      document.body.innerHTML += `<p>Student not found.</p>`;
    }
  