String.prototype.crazyMethod = function(pattern) {
    return this.split('').join(pattern)
}

let str = 'scaler';
console.log(str.crazyMethod('->'))
console.log(str.crazyMethod('*'))
console.log(str.crazyMethod('##'))