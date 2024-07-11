Array.prototype.myReduce = function(callback, initialValue) {
    // callback = arguments[0]
    // initialValue = arguments[1]

    // 1. null / type checks
    if(typeof callback !== 'function') {
        throw new Error(this + 'is not callable')
    }

    // empty array and no iniyialvalue >> we dont know what to reduce the code into.
    // hence we return error.
    if(this.length === 0 && arguments.length === 1) {
        throw Error('Empty array reduce not possible with no initial value')
    }

    // set the initial index & accumulator

    var accumulator = arguments.length >= 2 ? initialValue : this[0]; // 10
    var startIndex = arguments.length >=2 ? 0 : 1; // 0

    // iterate over the array.

    console.log('arguments[0]', arguments[0])
    console.log('arguments[1]', arguments[1]) 
    console.log('arguments[2]', arguments[2]) 

    console.log('startIndex', startIndex)

    for(var i = startIndex; i < this.length ; i++) {
        // check if index exists to handle sparse array
        if(i in this) {
            // to update the accumulator
            accumulator = callback(accumulator, this[i], i, this);
            console.log('accumulator', accumulator)
        }
    }

    return accumulator;



 



}

const array1 = [1, 2, 3, 4];
 
const empty = []


// 10 + 1 + 2 + 3 + 4
const initialValue = 10;
const sumWithInitial = array1.myReduce(
  (accumulator, currentValue, currentIndex, array) => accumulator + currentValue,
  initialValue,
);

console.log('FINAL OUTPUT - ',sumWithInitial);
// Expected output: 10
