"use strict";
// Parent Class Vehicles
class Vehicles {
    constructor(model, kilometersLeft, seats, fuelType, yearOfProduction) {
        this.model = model;
        this.kilometersLeft = kilometersLeft;
        this.seats = seats;
        this.fuelType = fuelType;
        this.yearOfProduction = yearOfProduction;
    }
    // Method to display vehicle details
    getDetails() {
        return `Model: ${this.model}, Kilometers Left: ${this.kilometersLeft}, Seats: ${this.seats}, Fuel Type: ${this.fuelType}, Year: ${this.yearOfProduction}`;
    }
    // Custom formula to calculate the price 
    calculatePrice() {
        const basePrice = 10000; // Base price
        const yearFactor = (new Date().getFullYear() - this.yearOfProduction) * 500;
        const seatFactor = this.seats * 200;
        const kilometersFactor = (200000 - this.kilometersLeft) / 1000;
        const fuelFactor = this.fuelType === 'Electric' ? -5000 : 0;
        return basePrice - yearFactor + seatFactor - kilometersFactor + fuelFactor;
    }
}
// Child class Motorbikes
class Motorbikes extends Vehicles {
    constructor(model, kilometersLeft, fuelType, yearOfProduction) {
        super(model, kilometersLeft, 2, fuelType, yearOfProduction);
    }
}
// Child class Trucks
class Trucks extends Vehicles {
    constructor(model, kilometersLeft, seats, fuelType, yearOfProduction, cargoCapacity) {
        super(model, kilometersLeft, seats, fuelType, yearOfProduction);
        this.cargoCapacity = cargoCapacity;
    }
    // Overriding the calculatePrice method to include cargo capacity
    calculatePrice() {
        const price = super.calculatePrice();
        return price + (this.cargoCapacity * 100); // Adding extra price based on cargo capacity
    }
}
// User interaction simulation
function showVehicleDetails(vehicle) {
    console.log(vehicle.getDetails());
    console.log(`Price: $${vehicle.calculatePrice()}`);
}
// Example usage:
const motorbike1 = new Motorbikes("Yamaha R1", 15000, "Petrol", 2018);
const truck1 = new Trucks("Ford F-150", 80000, 5, "Diesel", 2015, 1000);
// Simulating user clicking "show price"
showVehicleDetails(motorbike1); // For Motorbike
showVehicleDetails(truck1); // For Truck
