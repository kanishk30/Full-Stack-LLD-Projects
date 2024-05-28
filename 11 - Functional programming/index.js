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


function sum(a,b) {
    return a + b;
}

console.log(sum(1,2));
console.log(sum(1,2));
console.log(sum(1,2));
console.log(sum(1,2));
console.log(sum(1,2));
console.log(sum(1,2));
console.log(sum(1,2));
console.log(sum(1,2));


var c = 0;

function impureSum(a, b) {
    return a + b + c++;
}
console.log('Impure sum - ', impureSum(2,3))
console.log('Impure sum - ', impureSum(2,3))