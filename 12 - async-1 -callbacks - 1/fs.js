const fs = require('fs');

console.log('starting');

// const content = Math.random().toString(36).repeat(100000);
// fs.writeFileSync('file1.txt', content);

// const data1 = fs.readFileSync('file1.txt').toString();
// console.log(data1, ' data of file1');

// const data2 = fs.readFileSync('file2.txt').toString();
// console.log(data2, 'data of file2');

// async manner :

fs.readFile('file1.txt', function(err, data) {
    if(err) {
        console.log(err)
    } else {
        console.log(data.toString(), ' data of file1');
    }
})
fs.readFile('file2.txt', function(err, data) {
    if(err) {
        console.log(err)
    } else {
        console.log(data.toString(), ' data of file2');
    }
})
// const data2 = fs.readFileSync('file2.txt').toString();
// console.log(data2, 'data of file2');

console.log('ending')

