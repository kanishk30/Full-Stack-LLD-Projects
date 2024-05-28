// function printName(cb1, cb2) {
//     // cb1 = printLastName
//     // cb2 = printJob
//     console.log('Kanishk');
//     cb1(cb2);
    
// }

// function printLastName(cb) {
//     // cb = printJob
//     cb()
//     console.log('Agrawal');
// };

// function printJob() {
//     console.log('Job - Engineer')
// }

// // printName(printLastName)
// printName(printLastName, printJob); // Kanishk Job - Engineer  Agrawal



// function sum(a,b) {
//     return a + b;
// }

// console.log(sum(1,2));
// console.log(sum(1,2));
// console.log(sum(1,2));
// console.log(sum(1,2));
// console.log(sum(1,2));
// console.log(sum(1,2));
// console.log(sum(1,2));
// console.log(sum(1,2));


// var c = 0;

// function impureSum(a, b) {
//     return a + b + c++;
// }
// console.log('Impure sum - ', impureSum(2,3))
// console.log('Impure sum - ', impureSum(2,3));


// coding question

/*
we are given an array, which has radius for different circles, we need to find
- area
- circumference
- diameter
for all the radiuses and return an array for that.
*/

// pseudo code
let myRadiusArr = [2,3,4,5,8];

function calculateArea(radiusArr) {
    let result = [];
    for(let i = 0; i< radiusArr.length; i++) {
        let area = 3.14 * radiusArr[i] * radiusArr[i];
        result.push(area);
    }
    return result;
}

function calculateCircumference(radiusArr) {
    let result = [];
    for(let i = 0; i< radiusArr.length; i++) {
        let circumference = 2 * 3.14 * radiusArr[i];
        result.push(circumference);
    }
    return result;
}

function calculateDiameter(radiusArr) {
    let result = [];
    for(let i = 0; i< radiusArr.length; i++) {
        let diameter = 2 * radiusArr[i];
        result.push(diameter);
    }
    return result;
}

const areas = calculateArea(myRadiusArr)
console.log('Area: ', areas);

const circumference = calculateCircumference(myRadiusArr)
console.log('Circumference: ', circumference);

const diameter = calculateDiameter(myRadiusArr)
console.log('Diameter: ', diameter);

// above is inefficent approach..
// same structure 
// violation of DRY principle.
// DRY - Do not Repeat Yourself


// HOF approach for above code.

let radiusArrHOF = [2,3,4,5,8];

function findArea(radius) {
    return 3.14 * radius * radius;
}

function findCircumference(radius) {
    return 2 * 3.14 * radius;
}

function findDiameter(radius) {
    return 2 * radius;
}

function calculate(radiusArr, logicFn) {
    let result = [];
    for(let i = 0; i< radiusArr.length; i++) {
        const output = logicFn(radiusArr[i])
        result.push(output);
    }
    return result;
}

const finalAreas = calculate(radiusArrHOF, findArea);
console.log('HOF Areas', finalAreas);
const finalCircumference = calculate(radiusArrHOF, findCircumference)
console.log('HOF Circum', finalCircumference);

const finalDiameter = calculate(radiusArrHOF, findDiameter)
console.log('HOF Diameter', finalDiameter);

