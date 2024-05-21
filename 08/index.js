// // console.log('I am running from external JS file.');

// // // valid JS
// // var a = true;
// // console.log(a);

// // var a = false;
// // console.log(a);

// // // will throw error
// // // let city = 'Bangalore';
// // // console.log(city);

// // // let city = 'Delhi';
// // // console.log(city);


// // // will work
// // // city = 'Blr';
// // // console.log(city);


// // // throw error.
// // // const goat = 'MSDhoni';
// // // goat = 'Kohli';

// // const pi = 3.14;
// // pi = 3.15


// let a = 1;
// let b = 0.121212;
// let c = -102.2
// let d = 2/0;
// let special = 'hello' / 0;

// console.log(a, typeof(a));
// console.log(b, typeof(b));
// console.log(c, typeof(c));
// console.log(d, typeof(d));
// console.log(special, typeof(special));
// /*
//     1 number
// 0.121212 number
// -102.2 number
// Infinity number
// NaN number
// */



// // strings

// let str = 'JS';
// let str2 = "Hello";
// let str3 = `i am a template literal.`;

// console.log(str, typeof(str));
// console.log(str2, typeof(str2));
// console.log(str3, typeof(str3));
// /*
// JS string
// Hello string
// i am a template literal. string
// */

// // 50 crore views online.

// let usersCount = '50 Crores';
// let message = 'There are ' + usersCount + ' users online.';

// let message2 = `There are ${usersCount} users online`;

// console.log(message);
// console.log(message2)


// // boolean

// let isEven = true;
// let isOdd = false;
// console.log(isEven)
// console.log(isOdd)


// // undefined
// // when a variable is ot defined, then default value is undefined

// let course;
// console.log(course, '[course]')



// // null
// // when value for the variable DO NOT EXISTS.
// // nothing or empty

// let finalMarks = null;
// console.log(finalMarks)



// Functions

// function printName(name, gender) {
//     console.log(name, 'is', gender);
// }

// printName('Abhishek', 'Male');
// printName('Swapna', 'female');
// printName('Devanshu', 'male');


// arrays

// let arr = [1, 'hello', true, undefined, null, {}, [1,2,3,4], function(){}];
// console.log(arr);

// console.log(arr[2]) // true
// console.log(arr[6]) // [1,2,3,4]

// console.log(arr[6][0]) // 1

// arr[0] = 100;

// console.log(arr[0]) // 100

// console.log(arr.length, 'length'); // no. of elements in teh array

// array methods

// let cars = ['BMW', 'Mercedes'];
// // push = adds an element at the 'LAST/END' of an array
// cars.push('Audi');
// console.log(cars, 'after inserting Audi')

// pop = deletes the 'LAST' element from an array

// const removedValue = cars.pop();
// console.log(removedValue)
// console.log(cars, 'after using pop method');

//unshift
// add an element to FIRST/BEGNNING of an array

//shift
// remove the FIRST / 0th element.

// cars.unshift('Ferrari');
// console.log(cars, 'after using unshift');

// const removedEl = cars.shift();
// console.log(removedEl);
// console.log(cars, 'after using shift');



// OBJECTS

let person = {
    name: 'Kanishk',
    city: 'Bangalore'
}

console.log(person)
console.log(person.name) // dot notation
console.log(person["city"]) // bracket notation

let captainAmerica = {
    name: 'Steve Rogers',
    age: 102,
    alias: ['captain', 'leader', 'avenger', 'cap'],
    sayHi: function() {
        console.log('Hi from cap.')
    },
    address: {
        country: 'USA',
        city: {
            name: 'Queens',
            pincode: 123456
        }
    },
    isDCRanger: false,
    
}

console.log(captainAmerica)
console.log(captainAmerica.alias[2]) // avenger
console.log(captainAmerica.sayHi());
console.log(captainAmerica.isDCRanger);
console.log(captainAmerica.address.country)
console.log(captainAmerica.address.city.name)
/*

{
  name: 'Steve Rogers',
  age: 102,
  alias: [ 'captain', 'leader', 'avenger', 'cap' ],
  sayHi: [Function: sayHi],
  address: { country: 'USA', city: { name: 'Queens', pincode: 123456 } },
  isDCRanger: false
}
avenger
Hi from cap.
undefined
false
USA
Queens
*/

// add a property in object
captainAmerica.movies = ['End game', 'Civil war'];

console.log(captainAmerica, 'after adding movies property')

// delete a property

delete captainAmerica.age;

console.log(captainAmerica, 'after deleting age')
