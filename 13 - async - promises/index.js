
// const fs = require('fs');

// fs.readFile('f1.txt', function(err, data) {
//     if(err) {
//         console.log('Error');
//         return;
//     } else {
//         const processedData = data.toString();
//         console.log(processedData);
        
//         fs.writeFile('f2.txt', processedData, function(error, data2) {
//             if(error) {
//                 console.log(error);
//                 return;
//             } else {
//                 // fs.writeFile('f2.txt', processedData, function(error, data2) {
//                 //     if(error) {
//                 //         console.log(error);
//                 //         return;
//                 //     } else {
//                 //         fs.writeFile('f3.txt', data, func)
//                 //     }
                    
        
//                 // });
//             }
            

//         });

//     };




// });





// user1 > all posts (p1,p2,p3) of user1 
// p2 > all comments > c1, c2, c3....

// user1 >> p2 >> c1


// function fetchUser(userId) {
//     function fetchUserData(userId, (err, userData)) {
//       if (err) handleError("fetching user data", err);
//       else {
//         log("User data fetched", userData);
//         function fetchUserPosts(userData.id, function (err, posts)) {

//           else {
//             log("Posts fetched", posts);
//             posts.forEach((post) => {
//               function fetchCommentsByPost(post.id, function (err, comments)  {
//                 if (err) handleError("fetching comments for post", err, post.id);
//                 else log("Comments for post", post.id, comments);
//                 // Potential for more nested callbacks here
//               });
//             };
//           }
//         };
//       }
//     });
//    }


// promise


// 1. CREATION OF PROMISE
// let myPromise = new Promise(function(resolve, reject) {
// // resolve - function when task is successful
// // reject - function when task is failed(rejected)

//     setTimeout(() => {
//         const isHeads = Math.random() > 0.5;
//         if(isHeads) {
//             resolve('I win. It is Heads')
//         } else {
//             reject('Lost. Tails')
//         }

//     }, 500)
// })

// 2. CONSUMING THE PROMISE
// .then() .catch() .finally() [less used]

// myPromise.then(function(result) {
//     console.log('Success (then):', result);
// })
// .catch(function (err) {
//     console.log('Error(catch):', err)
// })
// .finally(function() {
//     console.log('I will always be called')
// })
   


// CHAINING

const cleanRoom = function() {
    return new Promise(function(resolve1, reject1) {
        resolve1('I cleaned the room');
        // reject1('I didnt clean the room');
    })
}

const finishFood = function(msg) {
    // msg = I cleaned the room
    return new Promise(function(resolve1, reject1) {
        // resolve1(msg + ' I finished the food');
        // 'I cleaned the room  I finished the food'
        reject1('I dont like the food.');
    })
}

const getChocolate = function(msg) {
    return new Promise(function(resolve1, reject1) {
        // resolve1(msg + ' Good work! Now you can have your chocolate');
        reject1('No chocolate for u');
    })
}

cleanRoom()
// resolvedValueFromPromise = returned from clenroom prom.
.then(function(resolvedValueFromPromise) {
    console.log(resolvedValueFromPromise, '[then in cleanroom]')
    return finishFood(resolvedValueFromPromise);
})
.catch(function(err) {
    console.log(err, '[error - finishFood ]')
})

.then(function(result) {
    console.log(result, '[then finish food]')
    return getChocolate(result);
})
.catch(function(err) {
    console.log(err, '[error - chocolate]')
})

.then(function (resolvedValue) {
    console.log(resolvedValue)
})
.catch(function(err) {
    console.log(err, '[error - chocolate error]')
})
.finally(function() {
    console.log('everythng done')
})
