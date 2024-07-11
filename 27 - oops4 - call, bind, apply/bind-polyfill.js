Function.prototype.myBind = function(context, ...boundArgs) {
    
    if(typeof this !== 'function') {
        throw new Error(this + 'is not callable. pass a function')
    }

    // function on which bind method was called.
    const targetFunction = this;

    return function (...args) {
        return targetFunction.apply(context, [...boundArgs, ...args])
    }
}

let car = {
    name: 'Mercedes',
    color: 'white',
};

function buyCar(price, year) {
    console.log(`I bought ${this.color} ${this.name} of ${price} made in ${year}`)
}
const buyMyCar1 = buyCar.myBind(car, 2000000)
const buyMyCar2 = buyCar.myBind(car, 2500000)

buyMyCar1(2020)
buyMyCar2(2023)