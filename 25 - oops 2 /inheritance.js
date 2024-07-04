class Pizza {
    constructor(toppings, size, crustType) {
        this.toppings = toppings;
        this.size = size;
        this.crustType = crustType;
    }

    describe() {
        console.log(`I want a ${this.crustType} pizza of size ${this.size} with ${this.toppings.join(', ')}.`)
    }
}

class StuffedCrustPizza extends Pizza {
    constructor(toppings, size, crustType, stuffingType) {
        super(toppings, size, crustType); // Call the parenr class constructor with super.
        
        this.stuffingType = stuffingType;
    }

    describeStuffing() {
        console.log(`This pizza has ${this.stuffingType} stuffing in the crust.`)
    }

    // override the describe method.
    describe() {
        super.describe(); // call the describe metod from the parent class
        this.describeStuffing(); // additinal stuff i want to do.
    }
}
const specialOrder = new StuffedCrustPizza(['cheese', 'mushroom'], 'medium', 'wheat', 'cheese and garlic');

console.log(specialOrder.describe())