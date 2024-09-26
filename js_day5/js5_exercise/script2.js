//Car
// let car1 = {
//     name: "Toyota Camry",
//     brand: "Toyota",
//     model: "Camry",
//     type: "Sedan",
//     color: "Silver",
//     weight: 1500,
//     displayCarInfo: function() {
//       document.write(`The ${this.color} ${this.brand} ${this.model} is a ${this.type} car that weighs ${this.weight} kg.<br>`);
//     }
//   };
  
//   let car2 = {
//     name: "Ford Mustang",
//     brand: "Ford",
//     model: "Mustang",
//     type: "Coupe",
//     color: "Red",
//     weight: 1200,
//     displayCarInfo: function() {
//       document.write(`The ${this.color} ${this.brand} ${this.model} is a ${this.type} car that weighs ${this.weight} kg.<br>`);
//     }
//   };
  
//   let car3 = {
//     name: "Honda Civic",
//     brand: "Honda",
//     model: "Civic",
//     type: "Hatchback",
//     color: "Blue",
//     weight: 1300,
//     displayCarInfo: function() {
//       document.write(`The ${this.color} ${this.brand} ${this.model} is a ${this.type} car that weighs ${this.weight} kg.<br>`);
//     }
//   };
  
//   car1.displayCarInfo();
//   car2.displayCarInfo();
//   car3.displayCarInfo();


  // with class
  class Car {
    constructor(name, brand, model, type, color, weight) {
      this.name = name;
      this.brand = brand;
      this.model = model;
      this.type = type;
      this.color = color;
      this.weight = weight;
    }
  
    displayCarInfo() {
      return `The ${this.color} ${this.brand} ${this.model} is a ${this.type} car that weighs ${this.weight} kg.<br>`;
    }
  }
  class Motorbike extends Car{
    constructor(name, brand, model, type, color, weight, numberOfWheels) {
      super(name, brand, model, type, color, weight);
      this.numberOfWheels = numberOfWheels;
    }

    displayMotorInfo(){
      return `${super.displayCarInfo()}, and the number of whells is ${this.numberOfWheels}`
    }

  }

  let car1 = new Car("Toyota Camry", "Toyota", "Camry", "Sedan", "Silver", 1500);
  let car2 = new Car("Ford Mustang", "Ford", "Mustang", "Coupe", "Red", 1200);
  let car3 = new Car("Honda Civic", "Honda", "Civic", "Hatchback", "Blue", 1300);

  let Motorbike1 = new Motorbike("test", "Ford", "Mustang", "Coupe", "Red", 1000, 4)
  
  car1.displayCarInfo();
  car2.displayCarInfo();
  car3.displayCarInfo();


  

  //Animal 
  // let animal1 = {
  //   name: "Fido",
  //   type: "Dog",
  //   color: "Brown",
  //   weight: 20,
  //   age: 3,
  //   displayAnimalInfo: function() {
  //     document.write(`The ${this.color} ${this.type} named ${this.name} weighs ${this.weight} kg and is ${this.age} years old.<br>`);
  //   }
  // };
  
  // let animal2 = {
  //   name: "Whiskers",
  //   type: "Cat",
  //   color: "Grey",
  //   weight: 10,
  //   age: 2,
  //   displayAnimalInfo: function() {
  //     document.write(`The ${this.color} ${this.type} named ${this.name} weighs ${this.weight} kg and is ${this.age} years old.<br>`);
  //   }
  // };
  
  // let animal3 = {
  //   name: "Snowy",
  //   type: "Rabbit",
  //   color: "White",
  //   weight: 5,
  //   age: 1,
  //   displayAnimalInfo: function() {
  //     document.write(`The ${this.color} ${this.type} named ${this.name} weighs ${this.weight} kg and is ${this.age} years old.<br>`);
  //   }
  // };
  
  // animal1.displayAnimalInfo();
  // animal2.displayAnimalInfo();
  // animal3.displayAnimalInfo();

  // with class
  class Animal {
    constructor(name, type, color, weight, age) {
      this.name = name;
      this.type = type;
      this.color = color;
      this.weight = weight;
      this.age = age;
    }
  
    displayAnimalInfo() {
      document.write(`The ${this.color} ${this.type} named ${this.name} weighs ${this.weight} kg and is ${this.age} years old.<br>`);
    }
  }

  class Fish extends Animal{
    constructor(name, type, color, weight, age, typeOfWaterItInhabits) {
      super(name, type, color, weight, age);
      this.typeOfWaterItInhabits = typeOfWaterItInhabits;
    }
    displayFishInfo(){
      return `${super.displayAnimalInfo()}, and the type of water is ${this.typeOfWaterItInhabits}`
    }
  }
  
  let animal1 = new Animal("Fido", "Dog", "Brown", 20, 3);
  let animal2 = new Animal("Whiskers", "Cat", "Grey", 10, 2);
  let animal3 = new Animal("Snowy", "Rabbit", "White", 5, 1);
  let fish1 = new Fish("Snowy", "Rabbit", "White", 5, 1, "mild")

  animal1.displayAnimalInfo();
  animal2.displayAnimalInfo();
  animal3.displayAnimalInfo();



  
  //Person
  // let person1 = {
  //   name: "John Doe",
  //   age: 30,
  //   occupation: "Software Engineer",
  //   weight: 70,
  //   height: 180,
  //   displayPersonInfo: function() {
  //     document.write(`My name is ${this.name}, I am ${this.age} years old, and I work as a ${this.occupation}. I weigh ${this.weight} kg and am ${this.height} cm tall.<br>`);
  //   }
  // };
  
  // let person2 = {
  //   name: "Jane Smith",
  //   age: 25,
  //   occupation: "Doctor",
  //   weight: 60,
  //   height: 165,
  //   displayPersonInfo: function() {
  //     document.write(`My name is ${this.name}, I am ${this.age} years old, and I work as a ${this.occupation}. I weigh ${this.weight} kg and am ${this.height} cm tall.<br>`);
  //   }
  // };
  
  // let person3 = {
  //   name: "Bob Johnson",
  //   age: 40,
  //   occupation: "Lawyer",
  //   weight: 80,
  //   height: 190,
  //   displayPersonInfo: function() {
  //     document.write(`My name is ${this.name}, I am ${this.age} years old, and I work as a ${this.occupation}. I weigh ${this.weight} kg and am ${this.height} cm tall.<br>`);
  //   }
  // };
  
  // person1.displayPersonInfo();
  // person2.displayPersonInfo();
  // person3.displayPersonInfo();

  // with class

  class Person {
    constructor(name, age, occupation, weight, height) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
      this.weight = weight;
      this.height = height;
    }
  
    displayPersonInfo() {
      document.write(`My name is ${this.name}, I am ${this.age} years old, and I work as a ${this.occupation}. I weigh ${this.weight} kg and am ${this.height} cm tall.<br>`);
    }
  }

  class Profession extends Person{
    constructor(name, age, occupation, weight, height, JobPosition) {
      super(name, age, occupation, weight, height);
      this.JobPosition = JobPosition;
    }
    displayProfessionInfo(){
      return `${super.displayPersonInfo()}, and the Profession is ${this.JobPosition}`
    }
  }
  
  let person1 = new Person("John Doe", 30, "Software Engineer", 70, 180);
  let person2 = new Person("Jane Smith", 25, "Doctor", 60, 165);
  let person3 = new Person("Bob Johnson", 40, "Lawyer", 80, 190,);
  let Profession1 = new Profession("Bob Johnson", 40, "Lawyer", 80, 190, "ITdev")

  person1.displayPersonInfo();
  person2.displayPersonInfo();
  person3.displayPersonInfo();