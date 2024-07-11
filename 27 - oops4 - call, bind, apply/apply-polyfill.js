let car = {
    name: 'Mercedes',
    color: 'white',
};

function buyCar(price) {
    console.log(`I bought ${this.color} ${this.name} of ${price}`)
}

Function.prototype.myApply = function(context = {}, argsArr = []) {
    if(typeof this !== 'function') {
        throw new Error(this + ' is not callable. It is not a function.')
    }

    if(!Array.isArray(argsArr)) {
        throw new Error(this + ' We need array for args.')
    }

    // assign this function to a property on context object.
    context.myOwnFunction = this;

    // spread the args array and invoke the function.
    context.myOwnFunction(...argsArr)
}

buyCar.myApply(car, [50000000])
buyCar.apply(car, [4000000])