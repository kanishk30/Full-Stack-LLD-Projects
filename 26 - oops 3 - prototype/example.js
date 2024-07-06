// 1. setting __proto__ to null manually. 
// how would u access object's original prototype after doing

// const obj = {
//     name: 'john'
// };

// obj.__proto__ = null;

// console.log(obj.__proto__)

// console.log(obj.toString()) // error

// ANS - NO WAY TO RESTORE ORIGINAL PROTOTYPE ONCE SET TO NULL.


// 2. Code output & why? Suggest better way to ensure Dog.prototype.constructor is set correctly

function Animal() {
    Animal.prototype.speak = function() {
        console.log('Sound')
    }
}

function DogFuncName() {
    DogFuncName.prototype = Object.create(Animal.prototype)
}
const dog = new DogFuncName();
console.log('before changing contructor',dog);
// DogFuncName.prototype.constructor = Animal; // wrong (confuing)
DogFuncName.prototype.constructor = DogFuncName;

console.log(dog.constructor.name) // DogFuncName (returns function name)