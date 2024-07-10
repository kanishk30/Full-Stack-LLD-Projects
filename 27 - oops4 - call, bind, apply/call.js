const person1 = {
    name: 'John',
    age: 25,

    printNameAndAge: function(location, country) {
        console.log(`My name is ${this.name} and I am ${this.age} years old and I live in ${location}, ${country}.`)
    }
}

const person2 = {
    name: 'Mary',
    age: 15,
    
}

person1.printNameAndAge('Delhi', 'Bharat'); // working.
// person2.printNameAndAge(); >> error

person1.printNameAndAge.call(person2, 'Mumbai', 'India')