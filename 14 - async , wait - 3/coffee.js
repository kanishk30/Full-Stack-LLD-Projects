// step1 = create a promise  for placing / accept the order.


function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if(drink ==='coffee') {
            resolve('Order placed for one coffee')
        } else {
            reject('Order cannot be placed.')
        }
    })
}

// step 2 - create a promise to process the order.

function processOrder(orderPlaced) {
    return new Promise(function(resolve, reject) {
        resolve(`${orderPlaced} and served`)
    })
}

function generateBill(processedOrder) {
    return new Promise(function(resolve, reject) {
        resolve(`${processedOrder} and bill is generated with 100 rupees.`)
    })
}

placeOrder('coffee')
.then(function(orderStatus) {
    console.log(orderStatus, '1');
    return orderStatus;
})
.then(function(orderStatussss) {
    let orderProcessedPromise = processOrder(orderStatussss);
    console.log(orderProcessedPromise, '2');
    return orderProcessedPromise
})
.then(function(isOrderProcessed) {
    console.log(isOrderProcessed, '3');
    return isOrderProcessed
})
.then(function(orderProcess) {
    let isBillGeneratedPromise = generateBill(orderProcess);
    return isBillGeneratedPromise
})
.then(function(billResolvedValue) {
    console.log(billResolvedValue, '4')
})
.catch(function(err) {
    console.log(err)
})


// step 3 - generate a bill if coffee is served


