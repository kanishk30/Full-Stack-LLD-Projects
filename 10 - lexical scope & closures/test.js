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
//         // console.log(a);
        
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