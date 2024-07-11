Array.prototype.myOwnMap = function(callback, thisArg) {

    // 1. null checks
    if(typeof callback !== 'function') {
        throw new Error (this + 'is not callable')
    }

    // 2. save the results of map operation on the array & return this array only
    var result = []

    // 3. itearte over the given array and push the resukts after applying callback functon.

    for(var i = 0; i < this.length; i++) {
        // check if index exists in the array to hanle sparse array.
        if(i in this) {
            var context = thisArg ? thisArg : this;
            // when u knowhow .map works.

            var mappedValue = callback.call(context,this[i], i, this)

            // var mappedValue = callback(this[i], i, this);

            // push the mapped vaue to result
            result.push(mappedValue)
        }
    }
    // return the new array.
    return result;


}


let arr = [1,2,3];
// arr[0] , arr[1], .....
const output = arr.myOwnMap((num, index, arr) => num * 5);
console.log(output); // [5,10,15]


const thisArg = {multiplier: 100};

const answer = arr.myOwnMap(function(elem) {
    return elem * this.multiplier
}, thisArg); // "context" in callback function is set to thisArg.

console.log(answer)