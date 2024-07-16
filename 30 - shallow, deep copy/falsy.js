let falseyValues = [false, 0 , -0, '', null, undefined, NaN];

falseyValues.forEach((elem) => {
    if(elem) {
        console.log('Truthy value: ', elem)
    } else {
        console.log('Falsy value: ', elem)
    }
})

// return only truthy values using .filter method.
let values = ['2121', 1200, false, 0 , -0, '', null, undefined, NaN, '0', ' '];

let res = values.filter(Boolean);
console.log('Result: ',res)