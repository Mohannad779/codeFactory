// Car class
let cars = [];
class Car {
    constructor(name, year, image, price, producer) {
        this.name = name;
        this.year = year;
        this.image = image;
        this.price = price;
        this.producer = producer;
        cars.push(this)
    }

    printcar(){
        return ` <div class="col-md-3">
                    <div class="card">
                        <img src="${this.image}" class="card-img-top" alt="${this.name}">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <button class="btn btn-primary show-more">Show more</button>
                        </div>
                    </div>
                </div>`
    }

    details(){
        return ` <div class="col-md-3">
        <div class="card" style='width:50rem'>
            <img src="${this.image}" class="card-img-top" alt="${this.name}">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">Price : ${this.price}</p>
                <p class="card-text">Year : ${this.year}</p>
                <p class="card-text">producer : ${this.producer}</p>
                <button class="btn btn-danger hide">Hide</button>
            </div>
        </div>
    </div>`
    }
}

let car1 = new Car("Ford Mustang", 2020, "https://cdn.pixabay.com/photo/2021/07/21/18/32/car-6483723_640.jpg", "€50,000", "Ford")
let car2 = new Car("Audi A4", 2021, "https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_1280.jpg", "€60,000", "Audi")
let car3 = new Car("BMW X1", 2019, "https://cdn.pixabay.com/photo/2024/03/22/15/32/bmw-8649909_640.png", "€55,000", "BMW")
let car4 = new Car("Chevrolet Camaro", 2022, "https://cdn.pixabay.com/photo/2021/07/21/18/32/car-6483726_640.jpg", "€70,000", "Chevrolet")



cars.forEach((val)=>{
    document.getElementById('car-list').innerHTML += val.printcar();
})

let btns = document.querySelectorAll(".show-more");
btns.forEach((val,index)=>{
    val.addEventListener("click",function(){
        document.getElementById("details").innerHTML = cars[index].details();
        document.querySelector(".hide").addEventListener("click",function(){
            document.getElementById("details").innerHTML = "";
        })
    })

   
})



// CarShop class to manage the car list and UI display
// class CarShop {
//     constructor() {
       
//         this.cars = [
//             new Car("Ford Mustang", 2020, "https://cdn.pixabay.com/photo/2021/07/21/18/32/car-6483723_640.jpg", "€50,000", "Ford"),
//             new Car("Audi A4", 2021, "https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_1280.jpg", "€60,000", "Audi"),
//             new Car("BMW X1", 2019, "https://cdn.pixabay.com/photo/2024/03/22/15/32/bmw-8649909_640.png", "€55,000", "BMW"),
//             new Car("Chevrolet Camaro", 2022, "https://cdn.pixabay.com/photo/2021/07/21/18/32/car-6483726_640.jpg", "€70,000", "Chevrolet")
//         ];
//     }

//     // Method to display cars in the main section
//     displayCars() {
//         const carList = document.getElementById('car-list');
//         carList.innerHTML = ''; 

//         this.cars.forEach((car, index) => {
//             const carCard = `
//                 <div class="col-md-3">
//                     <div class="card">
//                         <img src="${car.image}" class="card-img-top" alt="${car.name}">
//                         <div class="card-body">
//                             <h5 class="card-title">${car.name}</h5>
//                             <p class="card-text">Cars are also called automobiles or motor vehicles.</p>
//                             <button class="btn btn-primary show-more" onclick="carShop.showDetails(${index})">Show more</button>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             carList.innerHTML += carCard;
//         });
//     }

//     // Method to show detailed car info
//     showDetails(index) {
//         const car = this.cars[index];

//         document.getElementById('detail-image').src = car.image;
//         document.getElementById('detail-name').innerText = car.name;
//         document.getElementById('detail-producer').innerText = car.producer;
//         document.getElementById('detail-price').innerText = car.price;
//         document.getElementById('detail-year').innerText = car.year;

//         // Show the detailed section
//         document.getElementById('car-details').classList.remove('hidden');
//     }

//     // Method to hide detailed car info
//     hideDetails() {
//         document.getElementById('car-details').classList.add('hidden');
//     }
// }

// // Initialize the CarShop instance
// const carShop = new CarShop();

// // Display the cars on page load
// carShop.displayCars();

// // Add event listener to hide detailed view
// document.getElementById('hide-details').addEventListener('click', () => {
//     carShop.hideDetails();
// });


