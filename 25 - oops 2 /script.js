function Pizza(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;

    this.describe = function() {
        console.log(`I want a ${this.crustType} pizza of size ${this.size} with ${this.toppings.join(', ')}.`)
    }
    
}

// creating instance of Pizza
const customer1 = new Pizza(['cheese', 'olives'], 'small', 'thin');
const customer2 = new Pizza(['cheese', 'jalapeno'], 'large', 'thin');

// console.log(customer1)
// console.log(customer2)
// customer2.describe()
// console.log(Pizza.describe()) // error 


// static example
class MyClass {
    static myStaticMethod() {
        console.log('I am static method, i dont need to have an instance')
    }

    myFunction() {
        console.log('Hello')
    }
}
MyClass.myStaticMethod(); // logs fine.

// rewrite the constructor functuon as an ES6 class.
class PizzaClass {
    constructor(toppings, size, crustType) {
        this.toppings = toppings;
        this.size = size;
        this.crustType = crustType;
    }

    describe() {
        console.log(`I want a ${this.crustType} pizza of size ${this.size} with ${this.toppings.join(', ')}.`)
    }
}

const customerClass1 = new PizzaClass(['cheese', 'olives'], 'small', 'thin');
const customerClass2 = new PizzaClass(['cheese', 'jalapeno'], 'large', 'thin');

console.log(customerClass1.describe())
console.log(customerClass2.describe())
 