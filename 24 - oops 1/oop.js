'use strict';
console.log(this, 'this outside');
function Car(make, model) {
    console.log(this, 'this in Car')
    this.make = make;
    this.model = model;
    this.displayInfo = function() {
        console.log(`Car: ${this.make} , ${this.model}`)
    }
}

const kanishksCar = new Car('Toyota', 'Corolla');
const faisalsCar = new Car('Tata', 'Harrier');

kanishksCar.displayInfo()
faisalsCar.displayInfo()
