class Pizza {

    static totalPizzasMade = 0;

    constructor(toppings, size, crustType) {
        this.toppings = toppings;
        this.size = size;
        this.crustType = crustType;
        Pizza.totalPizzasMade++;
    }

    describe() {
        console.log(`I want a ${this.crustType} pizza of size ${this.size} with ${this.toppings.join(', ')}.`)
    }

    static calculateTotalPizzasMade() {
        console.log(`Total pizzas: ${Pizza.totalPizzasMade}`)
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

// creating instances and calling methods.
const customerClass1 = new Pizza(['cheese', 'olives'], 'small', 'thin');
const customerClass2 = new Pizza(['cheese', 'jalapeno'], 'large', 'thin');
const customerClass3 = new Pizza(['cheese', 'jalapeno'], 'large', 'thin');
const customerClass4 = new Pizza(['cheese', 'jalapeno'], 'large', 'thin');

const specialOrder = new StuffedCrustPizza(['cheese', 'mushroom'], 'medium', 'wheat', 'cheese and garlic');

Pizza.calculateTotalPizzasMade();

