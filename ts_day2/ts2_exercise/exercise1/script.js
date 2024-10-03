"use strict";
//Ex1
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    introduce() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
// to show it
const person1 = new Person("Mohannad", 30, "Software Developer");
console.log(person1.introduce());
//Ex2
class Employee extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    fullIntroduce() {
        return `${super.introduce()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}
// to show it
const employee1 = new Employee("Mohannad", 30, "Software Developer", 5000, "Vienna");
console.log(employee1.fullIntroduce());
