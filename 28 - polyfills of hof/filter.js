Array.prototype.myFilter = function (callback, thisArg) {

    // 1. null / type checks
    if(typeof callback !== 'function') {
        throw new Error(this + 'is not callable')
    }

    // 2.. ceate a result array where output will be pushed and retuned.
    let result = [];

    // step3 - itearte over the array

    for(var i = 0; i<this.length; i++) {
        // check if inex exists in array to handle for sparse arrays.
        if(i in this) {
            var context = thisArg ? thisArg : this;

            // step4 - execute callback fn for each element considering context

            if(callback.call(context, this[i], i, this)) {
                result.push(this[i])
            }
        }
    }

    // return output>>
    return result;

}

let arr = [1,2,3,4,5];

const output = arr.myFilter((num, index, arr) => num % 2 === 0);
console.log(output); // [2,4]