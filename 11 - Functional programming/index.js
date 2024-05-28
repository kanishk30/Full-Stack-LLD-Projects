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
// let myRadiusArr = [2,3,4,5,8];

// function calculateArea(radiusArr) {
//     let result = [];
//     for(let i = 0; i< radiusArr.length; i++) {
//         let area = 3.14 * radiusArr[i] * radiusArr[i];
//         result.push(area);
//     }
//     return result;
// }

// function calculateCircumference(radiusArr) {
//     let result = [];
//     for(let i = 0; i< radiusArr.length; i++) {
//         let circumference = 2 * 3.14 * radiusArr[i];
//         result.push(circumference);
//     }
//     return result;
// }

// function calculateDiameter(radiusArr) {
//     let result = [];
//     for(let i = 0; i< radiusArr.length; i++) {
//         let diameter = 2 * radiusArr[i];
//         result.push(diameter);
//     }
//     return result;
// }

// const areas = calculateArea(myRadiusArr)
// console.log('Area: ', areas);

// const circumference = calculateCircumference(myRadiusArr)
// console.log('Circumference: ', circumference);

// const diameter = calculateDiameter(myRadiusArr)
// console.log('Diameter: ', diameter);

// above is inefficent approach..
// same structure 
// violation of DRY principle.
// DRY - Do not Repeat Yourself


// HOF approach for above code.

// let radiusArrHOF = [2,3,4,5,8];

// function findArea(radius) {
//     return 3.14 * radius * radius;
// }

// function findCircumference(radius) {
//     return 2 * 3.14 * radius;
// }

// function findDiameter(radius) {
//     return 2 * radius;
// }

// function calculate(radiusArr, logicFn) {
//     let result = [];
//     for(let i = 0; i< radiusArr.length; i++) {
//         const output = logicFn(radiusArr[i])
//         result.push(output);
//     }
//     return result;
// }

// const finalAreas = calculate(radiusArrHOF, findArea);
// console.log('HOF Areas', finalAreas);
// const finalCircumference = calculate(radiusArrHOF, findCircumference)
// console.log('HOF Circum', finalCircumference);

// const finalDiameter = calculate(radiusArrHOF, findDiameter)
// console.log('HOF Diameter', finalDiameter);



// array HOF

// question
// given an array of nos. , return square of nos in new array.

// Approach 1
// let arr = [1,2,3];
// let squareArr = [];
// for(let i = 0; i< arr.length; i++){
//     squareArr.push(arr[i] * arr[i]);
// }
// console.log('Approach1: ', squareArr);

// // Approach 2 - Functional

// let arr2 = [1,2,3];
// function squareArrFn(arr) {
//     let squareArr = [];
//     for(let i = 0; i< arr.length; i++){
//         squareArr.push(arr[i] * arr[i]);
//     }
//     return squareArr;
// }
// let squareArr2 = squareArrFn(arr2);
// console.log('Approach2: ',squareArr2);

// // Approach 3 - Recommended - .map operator
// // HOF - which will NOT CHANGE THE ORIGINAL ARRAY.

// let arr3 = [1,2,3];
// let squaredArr3 = arr3.map(function(element) {
//     console.log(element, '[element]')
//     return element * element
// });
// console.log('HOF - .map approach', squaredArr3)


// ques2

// const transactionsInDollar = [1000, -200, 150];
// const inrToUsd = 80;
// // output = [80000, -16000, 12000];

// const result = transactionsInDollar.map(function(el, index) {
//     console.log(el + ' is in position ' + index);
//     if(index === 0) {
//         return 100000000;
//     }
//     if(el < 0) {
//         return 'cannot convert'
//     }
//     return el * inrToUsd;
//     // result = [1000*80 = 8000, -16000, 12000]
// })
// console.log(transactionsInDollar, '[transactionsInDollar]');
// console.log(result, 'result');
// 1000 is in position 0
// -200 is in position 1
// 150 is in position 2
// [ 1000, -200, 150 ] [transactionsInDollar]
// [ 100000000, 'cannot convert', 12000 ] result
// since pure func (HOF), no chnge in original array


// filter example

let arr = [1,2,3,4,5,6,7,8,9,10];
// return even elements for the array.

let result = arr.filter(function(el, index) {
    console.log(el, '[elements]')
    let isEven = el % 2 === 0;
    return isEven;
});
console.log(result);

// ques 2
// given an transaction array - return only poitive values.

// I/P = [100, -40, 1000, -20, -30]
//O/P = [100, 1000];
let arrTransaction = [100, -40, 1000, -20, -30];
let filteredResult = arrTransaction.filter(function(el) {
    // let isPostive = el > 0;
    return el > 0;
})
console.log(filteredResult)
