// creation of a promise
// async function fetchData() {
//     return 'data'
// };

// const dataPromise = fetchData(); // promise.

// consumption phase of a promise
// dataPromise.then(function(result) {
//     console.log(result)
// });

// SyntaxError: await is only valid in async function

// const result = await fetchData();
// console.log(result)






const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Promise resolved');
    }, 2000)
});

const p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Promise resolved2');
    }, 1000)
});

async function fetchData() {
    // p.then(function(result) {
    //     console.log(result, '[From .then]');
    // })
    console.log('LIfe : ');

    const val = await p;
    // this will wait for promise to be resolved & then only it will move forward
    console.log(val);
    console.log('create impact');
};

// async function handlePromise() {
//     //.....
//     const val = await p;
//     console.log(val, '[From async/await]');
// }

async function handlePromise2() {
    console.log('Life:')
    const val = await p; // this will return 'Promise resolved'
    console.log('Create impact 1');
    console.log(val);

    const val2 = await p; // // this will return 'Promise resolved'
    console.log('Create impact 2');
    console.log(val2);

// Life:
// 8 seconds pause only here.
// Create impact 1
// Promise resolved
// Create impact 2
// Promise resolved
}

async function handlePromise3() {
    console.log(new Date(), 'start')
    console.log('Life:');
    const val = await p; //  8s
    console.log(new Date(), 'p1')
    console.log('Create impact 1');
    console.log('p1: ', val);

    const val2 = await p2; // 3s
    console.log(new Date(), 'p2')
    console.log('Create impact 2');
    console.log('p2: ', val2);

// Life:
// 8 seconds pause only here.
// Create impact 1
// Promise resolved
// Create impact 2
// Promise resolved
}



// fetchData();
// handlePromise()
// handlePromise2()
// handlePromise3()


function test1() {
    console.log('test')
};

const test2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('test2')
    }, 3000)
})

function test3() {
    console.log('test3')
}

async function getData() {
    console.log('4');
    const result2 = await test2;
    console.log(result2);
    
}

test1();
getData();
test3();

