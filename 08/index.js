// console.log('I am running from external JS file.');

// // valid JS
// var a = true;
// console.log(a);

// var a = false;
// console.log(a);

// // will throw error
// // let city = 'Bangalore';
// // console.log(city);

// // let city = 'Delhi';
// // console.log(city);


// // will work
// // city = 'Blr';
// // console.log(city);


// // throw error.
// // const goat = 'MSDhoni';
// // goat = 'Kohli';

// const pi = 3.14;
// pi = 3.15


let a = 1;
let b = 0.121212;
let c = -102.2
let d = 2/0;
let special = 'hello' / 0;

console.log(a, typeof(a));
console.log(b, typeof(b));
console.log(c, typeof(c));
console.log(d, typeof(d));
console.log(special, typeof(special));
/*
    1 number
0.121212 number
-102.2 number
Infinity number
NaN number
*/



// strings

let str = 'JS';
let str2 = "Hello";
let str3 = `i am a template literal.`;

console.log(str, typeof(str));
console.log(str2, typeof(str2));
console.log(str3, typeof(str3));
/*
JS string
Hello string
i am a template literal. string
*/

// 50 crore views online.

let usersCount = '50 Crores';
let message = 'There are ' + usersCount + ' users online.';

let message2 = `There are ${usersCount} users online`;

console.log(message);
console.log(message2)


// boolean

let isEven = true;
let isOdd = false;
console.log(isEven)
console.log(isOdd)


// undefined
// when a variable is ot defined, then default value is undefined

let course;
console.log(course, '[course]')



// null
// when value for the variable DO NOT EXISTS.
// nothing or empty

let finalMarks = null;
console.log(finalMarks)
