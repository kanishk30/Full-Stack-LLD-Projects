// input = array of promises. (values)
// output = promise arrya in same order if success ; else rejection promise.

Promise.myAll = function (values) {
    const promise = new Promise(function(resolve, reject) {
        let result = [];
        let total = 0;

        values.forEach((itemPromise, index) => {
            Promise.resolve(itemPromise)
            .then((itemResult) => {
                result[index] = itemResult; // to preserve order.
                // result.push(itemResult) > wrong since order has to be maintained.

                total++;
                if(total === values.length) {
                    resolve(result)
                }
            })
            .catch(err => {
                reject(err)
            })
        })
    })

    return promise;

}

// let promise1 = [Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)];

// // Promise.myAll(promise1)
// // .then(results => console.log('All resolved: ', results))
// // .catch(err => console.log('Rejected: ', err))

let promise2 = [Promise.resolve(1),Promise.reject('Promise error with value 1000'),Promise.resolve(3)];
Promise.myAll(promise2)
.then(results => console.log('All resolved: ', results))
.catch(err => console.log('Rejected: ', err))
