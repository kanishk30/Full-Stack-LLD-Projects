let car = {
    name: 'Mercedes',
    color: 'white',
};

function buyCar(price) {
    console.log(`I bought ${this.color} ${this.name} of ${price}`)
}

Function.prototype.myCall = function(context = {}, ...args) {
    console.log(this, 'this'); // buycar
    console.log('context: ', context) // car object
    if(typeof this !== 'function') {
        throw new Error(this + ' is not callable. It is not a function.')
    }

    context.myOwnProperty = this; // buyCar
    context.myOwnProperty(...args)

}

buyCar.myCall(car, 5000000);
buyCar.call(car, 5000000);
 