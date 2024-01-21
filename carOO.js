class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep";
    }
    toString(){
        return `The Vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

const v1 = new Vehicle("Honda", "Buggy", 2007);

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

const c1 = new Car("Honda", "Accord", 1999);

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!"
    }
}

const m1 = new Motorcycle("Honda", "Nighthawk", 1978);

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle){
        if (this.vehicles.length >= this.capacity){
            return "Sorry, we're full.";
        } else if (vehicle instanceof Vehicle) {
            this.vehicles.push(vehicle);
            return "Vehicle Added!";
        } else {
             return "Only vehicles are allowed in here!";
        }
    }
}

const g = new Garage(2);