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



fetchData();
// handlePromise()

