'use strict';

console.log('scenario1');
console.log(this); // Window in browser & {} in node 

console.log('scenario 2 =>');

function fnglobal() {
    console.log(this) // Window
    
}

fnglobal();

var obj = {
    myFunc: function() {
        console.log('scenario 3 =>');
        console.log(this); // myFunc
    }
}

obj.myFunc();

var obj2 = {
    fn: function() {
        console.log('scenario 4 =>>');
        console.log(this, 'first'); // fn logged
        var nestedFunction = function() {
            console.log(this, 'second')// window obj logged
        }
        nestedFunction()
    }
}

obj2.fn()