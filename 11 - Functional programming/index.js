function printName(cb1, cb2) {
    // cb1 = printLastName
    // cb2 = printJob
    console.log('Kanishk');
    cb1(cb2);
    
}

function printLastName(cb) {
    // cb = printJob
    cb()
    console.log('Agrawal');
};

function printJob() {
    console.log('Job - Engineer')
}

// printName(printLastName)
printName(printLastName, printJob); // Kanishk Job - Engineer  Agrawal
