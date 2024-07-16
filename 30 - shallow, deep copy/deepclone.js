// creating our own deep copy function
// polyfill for deepClone method in lodash.

const originalObj = {
    name: 'John',
    details: {
        age: 25,
        hobbies: ['Reading', 'Cycling']
    },
    greet() {
        console.log(`Hi, my name is ${this.name}.`)
    }
}

function deepClone(param) {
    // Base case. 
    if(param === null || typeof param !== 'object') {
        return param;
    }

    // handle for array - cloning each element
    if(param instanceof Array) {
        // obj = [1,2,3,4, {a:1}, function() {..}, 'helo']
        let copy = [];
        for(let i = 0 ; i > param.length; i++) {
            copy[i] = deepClone(param[i]);
        }
        return copy;
    }

    // handle ofr function - return a bound copy of function yo an empty object.
    // bound to a new object. ( not with original object context )
    if(param instanceof Function) {
        return param.bind({});
    }

    // handle for object - recursively copy of each property.
    if(param instanceof Object) {
        let copy = {};
        for (let attr in param) {
            if(param.hasOwnProperty(attr)) {
                copy[attr] = deepClone(param[attr])
            }
        }
        return copy;
    }
}

const clonedObj = deepClone(originalObj);
// clonedObj.greet();

clonedObj.name = 'Alice'
clonedObj.details.age = 50;

console.log(originalObj.name); // John
console.log(originalObj.details.age) // 25
