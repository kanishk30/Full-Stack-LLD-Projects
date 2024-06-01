const fs = require('fs');

// fs.readFile('f1.txt', function(err, data) {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log('Data of the file - ', data)
//     }
// })

// const allPromises = fs.promises;
// console.log(allPromises);

const promiseReadFile1 = fs.promises.readFile('f1.txt');
const promiseReadFile2 = fs.promises.readFile('f2.txt');
const promiseReadFile3 = fs.promises.readFile('f3.txt');




// promiseReadFile1
// .then(function(result) {
//     console.log('File data', result);
// })
// .catch(function(err) {
//     console.log('error', err)
// })
// promiseReadFile2
// .then(function(result) {
//     console.log('File data', result);
// })
// .catch(function(err) {
//     console.log('error', err)
// })
// promiseReadFile3
// .then(function(result) {
//     console.log('File data', result);
// })
// .catch(function(err) {
//     console.log('error', err)
// })

// writing cleaner code

function handleFileSuccess(data) {
    console.log('File data', data);
}

function handleError(error) {
    console.log('Error:',error)
}
promiseReadFile1.then(handleFileSuccess);
promiseReadFile2.then(handleFileSuccess);
promiseReadFile3.then(handleFileSuccess);

promiseReadFile1.catch(handleError);
promiseReadFile2.catch(handleError);
promiseReadFile3.catch(handleError);