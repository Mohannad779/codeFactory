const employees = {
    "employees": [
        {
            "ID": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "jobTitle": "Software Engineer",
            "salary": 70000
        },
        {
            "ID": 2,
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "jane.smith@example.com",
            "jobTitle": "Product Manager",
            "salary": 90000
        },
        {
            "ID": 3,
            "firstName": "Robert",
            "lastName": "Brown",
            "email": "robert.brown@example.com",
            "jobTitle": "QA Engineer",
            "salary": 60000
        },
        {
            "ID": 4,
            "firstName": "Emily",
            "lastName": "Davis",
            "email": "emily.davis@example.com",
            "jobTitle": "UX Designer",
            "salary": 65000
        },
        {
            "ID": 5,
            "firstName": "Michael",
            "lastName": "Wilson",
            "email": "michael.wilson@example.com",
            "jobTitle": "DevOps Engineer",
            "salary": 75000
        },
        {
            "ID": 6,
            "firstName": "Sarah",
            "lastName": "Johnson",
            "email": "sarah.johnson@example.com",
            "jobTitle": "Business Analyst",
            "salary": 80000
        },
        {
            "ID": 7,
            "firstName": "Chris",
            "lastName": "White",
            "email": "chris.white@example.com",
            "jobTitle": "Front-End Developer",
            "salary": 68000
        },
        {
            "ID": 8,
            "firstName": "Anna",
            "lastName": "Garcia",
            "email": "anna.garcia@example.com",
            "jobTitle": "Marketing Specialist",
            "salary": 72000
        },
        {
            "ID": 9,
            "firstName": "David",
            "lastName": "Martinez",
            "email": "david.martinez@example.com",
            "jobTitle": "Sales Manager",
            "salary": 85000
        },
        {
            "ID": 10,
            "firstName": "Laura",
            "lastName": "Lee",
            "email": "laura.lee@example.com",
            "jobTitle": "HR Manager",
            "salary": 70000
        }
    ]
};

const employeeTable = document.getElementById("employeeTable");

employees.employees.forEach(employee => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${employee.ID}</td>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.email}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.salary}</td>
    `;
    employeeTable.appendChild(row);
});