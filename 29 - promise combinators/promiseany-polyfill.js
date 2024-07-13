Promise.myAny = function (values) {
    const promise = new Promise((resolve, reject) => {

        if(values.length === 0) {
            reject(new Error('No promises are provided'))
        }

        let rejections = [];
        let rejectedCount = 0;

        values.forEach((promise, index) => {
            Promise.resolve(promise)
            .then(resolve) // Resolve immediately on any promise resolution

            .catch((error) => {
                rejections[index] = error;
                rejectedCount ++;

                if(rejectedCount === values.length) {
                    reject(new Error(rejections, 'All promises rejected'))
                }
            })
        })
    })

    return promise;
}

// let promise1 = [Promise.resolve(1),Promise.reject('Promise error with value 1000'),Promise.resolve(3)];

// Promise.myAny(promise1)
// .then(result => console.log('Resolved with: ', result))
// .catch(err => console.log('Rejected with: ', err))
// Resolved with:  1

let p2 = [Promise.reject('error'), Promise.reject('fail'), Promise.reject('problem'), Promise.resolve(1)]
Promise.myAny(p2)
.then(result => console.log('Resolved with: ', result))
.catch(err => console.log('Rejected with: ', err))
