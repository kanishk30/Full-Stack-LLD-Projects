const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

const p4 = Promise.reject('Rejected promise by me')
const p5 = Promise.reject('second Rejected promise by me')


const resultPromise = Promise.allSettled([promise3,promise1, promise2])

// console.log(resultPromise)

// console.log(resultPromise.then((values) => {
//     console.log(values)
// }))


const rejectExamplePromise = Promise.allSettled([promise1, promise2, promise3, p5, p4]);

console.log(rejectExamplePromise)


console.log(
  rejectExamplePromise.then((results) => {
    console.log(results)
  })
)



