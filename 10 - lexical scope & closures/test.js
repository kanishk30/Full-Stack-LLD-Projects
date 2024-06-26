// console.log(a);
// var a = 10;
// function test() {
//     console.log('I am a test func');
// }
// test();
// Output = undefined
// I am a test func


// console.log(a);
// var a = 10;
// test();
// function test() {
//     console.log('I am a test func');
// }
// Output = undefined
// I am a test func


// var a = 20;
// function parent() {
//     console.log(a)
// }

// parent();
//since  a was in global scope, output was 20.

// function parent() {
//     var a = 20; // a is not in global scope.
//     function child() {
//         console.log(a)
//     }
//     child();
// }

// parent(); // 20

// function parent() {
//     var a = 20;
//     function child() {
//         console.log(a);

//         function grandchild() {
//             console.log(a);
//         }
//         grandchild()
//     }
//     child()
// }
// parent(); // 20 20

// function parent() {
//     function child() {
//         console.log(a);
        
//         function grandchild() {
//             var a = 20;
//             console.log(a);
//         }
//         grandchild()
//     }
//     child()
// }
// parent();
// outout = reference error.

// function greet() {
//     var msg = 'Happy holidays';
//     sayHH();
//     function sayHH() {
//         console.log('inside HH' , msg)
//     }
// }
// greet();
// // console.log('outer', msg)


// closure


// function parent(){
//     var a = 10;
//     function child(){
//         var b = 20;
//         console.log(a)

//         function grandchild(){
//             console.log(a+b)
//         }
//         return grandchild
//     }
//     return child
// }
// let functionReceived = parent() // functionreceived is nothing but child only
// console.log(functionReceived)

// let grandchildReceived = functionReceived() // grandchildReceived = child() ( invoking child) 
// grandchildReceived()
// 

/*
parent() will be returning child function.
functionReceived = child.

// log - [Function:  child]

grandchildReceived = child()

// line 86 - log - 10 ( a is ten due to lexical env.)

child() is grandChild function
grandchildReceived() is onvoked in line 99.
//  30
*/



// function testScope() {
//     let a =  20;
//     let b = 30;
//     let c = 100;
//     if(a<b) {
//         let c = 30;
//         console.log(c);
//         console.log(d);
//     } else {
//         let c = 1000;
//         console.log(c); // error - since let is block scoped.
//         var d = 40; // function scoped.
//     }
    
// }

// let c = 1000;

// // testScope();


// if(true) {
//     let c = 2;
//     console.log(c);
// }

// console.log(a)


// usecase for closures

// module design pattern

let myModule = (function() {
    let privateVar = 'I am private';

    return {
        getVarFunc: function() {
            return privateVar;
        }
    }
})()

console.log(myModule.getVarFunc())




// Homework.

/*
Create a function called createCounter. This function should contain a local variable count initialized to 0 and return another function. The returned function, when called, should increment count by 1 and return the new value. Each time createCounter is called, it should create a new scope and count independently.
*/

function createCounter() {
    // Your code here
    let count = 0;

    return function() {
        // ....
    }
   }
   
   
   const counter1 = createCounter();
   const counter2 = createCounter();
   
   
   console.log(counter1()); // Should return 1
   console.log(counter1()); // Should return 2
   console.log(counter2()); // Should return 1
   console.log(counter2()); // Should return 2
   