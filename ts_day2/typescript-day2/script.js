"use strict";
// interface IPerson{
//     firstName:string;
//     lastName:string; 
//     age: number; 
//     printInfo: () => string
// }
let employeeArr = [];
console.log(employeeArr);
class HospitalEmployee {
    constructor(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        // protected id : number;
        // public firstName: string;
        // lastName: string;
        // salary: number;
        this.vacationDays = 20;
        this.id = id;
        this.firstName = firstName,
            this.lastName = lastName,
            this.salary = salary;
        // console.log(this);
        employeeArr.push(this);
    }
    printSalary() {
        return `${this.firstName} with id ${this.id} earns ${this.salary} Euro/month`;
    }
    takeVacationDays(days) {
        // this.vacationDays = this.vacationDays - days;
        return this.vacationDays -= days;
    }
}
new HospitalEmployee(1, "John", "Doe", 3000);
new HospitalEmployee(2, "Anna", "Doe", 4000);
// console.log(e1.firstName);
// console.log(e1.printSalary());
// e1.takeVacationDays(12)
// console.log(e1.vacationDays);
// console.log(e1.id); //error
// let e2 = new HospitalEmployee("Anna", "Doe", 3000)
// console.log(e2.vacationDays);
class Nurse extends HospitalEmployee {
    constructor(id, firstName, lastName, salary, insurances) {
        super(id, firstName, lastName, salary);
        this.insurances = insurances;
    }
    printInsurances() {
        return `${this.firstName} with this ${this.id} works with insurances ${this.insurances}`;
    }
}
new Nurse(3, "Johanna", "Doe", 2500, ['AA', 'BB', 'CC']);
new Nurse(4, "Kate", "Doe", 2500, ['AA', 'BB', 'CC']);
new Nurse(5, "Maxine", "Doe", 2500, ['AA', 'BB', 'CC']);
new Nurse(6, "Test", "Doe", 2500, ['AA', 'BB', 'CC']);
console.log(employeeArr);
// console.log(n1.printSalary());
// console.log(n1.printInsurances());
let result = document.getElementById('result');
for (let employee of employeeArr) {
    const { firstName: test, lastName } = employee;
    result.innerHTML += `
    <div>
        <div class="card my-4">
            <div class="card-body">
                <h5 class="card-title">${test} ${lastName}</h5>
                <p class="card-text">${employee.printSalary()}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    `;
}
