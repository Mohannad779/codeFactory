//Ex1
class Person {
    name: string;
    age: number;
    jobTitle: string;

    constructor(name: string, age: number, jobTitle: string) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }

    introduce(): string {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
// to show it
const person1 = new Person("Mohannad", 30, "Software Developer");
console.log(person1.introduce());

//Ex2
class Employee extends Person {
    salary: number;
    jobLocation: string;

    constructor(name: string, age: number, jobTitle: string, salary: number, jobLocation: string) {
        super(name, age, jobTitle); 
        this.salary = salary;
        this.jobLocation = jobLocation;
    }

    fullIntroduce(): string {
        return `${super.introduce()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}
// to show it
const employee1 = new Employee("Mohannad", 30, "Software Developer", 5000, "Vienna");
console.log(employee1.fullIntroduce());