const person1 = {
    name: 'John',
    age: 25,

    describe: function(location, country) {
        console.log(`My name is ${this.name} and I am ${this.age} years old and 
        I live in ${location}, ${country}.`)
    }
}

const person2 = {
    name: 'Mary',
    age: 15,
    
}

person1.describe('Delhi', 'Bharat');

person1.describe.call(person2, 'Bangalore', 'India')
person1.describe.apply(person2, ['Mumbai', 'India']);



// maximum no in an element
const nums = [4,1,7,5]
const maximumNumber = Math.max.apply(null, nums) // 7

console.log('max using apply: ', maximumNumber)

const maxUsingCall = Math.max.call(null, 4,1,7,5);
console.log('maxUsingCall: ', maxUsingCall)


const maxUsingSpread = Math.max(...nums);
console.log('maxUsingSpread: ', maxUsingSpread)