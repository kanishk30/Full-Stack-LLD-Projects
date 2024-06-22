// const grandparent = document.querySelector('#grandparent');
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');

// // bubbling
// // grandparent.addEventListener('click', function() {
// //     console.log('grandparent clicked (Bubbling)')
// // }, false)

// // parent.addEventListener('click', function() {
// //     console.log('parent clicked (Bubbling)')
// // })

// // child.addEventListener('click', function(e) {
// //     console.log('child clicked (Bubbling)');
    
// //     // stop propagation after clicking the child element.
// //     e.stopPropagation();
// // })

// // event capturing
// // useCapture paramerter ( third param (boolean))
// grandparent.addEventListener('click', function() {
//     console.log('grandparent clicked capturing')
// }, true)

// parent.addEventListener('click', function(e) {
//     console.log('parent clicked capturing')
//     e.stopPropagation();
// }, true)

// child.addEventListener('click', function() {
//     console.log('child clicked capturing')
// }, true)


// counter script starts
/**
 * 
 

const decrementBtn = document.querySelector('#decrement');
const incrementBtn = document.querySelector('#increment');
const resetBtn = document.querySelector('#reset');
const countDisplay = document.querySelector('#count');

let count = 0;

decrementBtn.addEventListener('click', function() {
    count--;
    countDisplay.textContent = count;
})

incrementBtn.addEventListener('click', function() {
    count++;
    countDisplay.textContent = count;
})

resetBtn.addEventListener('click', function() {
    count = 0;
    countDisplay.textContent = count;
})

*/

// STAR RATING Component


// get all star elements.
const stars = document.querySelectorAll('.star')

// get rating part
const rating = document.querySelector('#rating');

stars.forEach(function(starElem) {
    starElem.addEventListener('click', function() {
        console.log(starElem, 'clicked')
        const value = starElem.getAttribute('data-value');
        console.log(value);
        updateRating(value);
    })
})

// css changes & HTML updation.
function updateRating(starValueSelected) {
    
    stars.forEach(function(starElem) {
        const starDataValue = starElem.getAttribute('data-value');

        // toggle the filled class based on star's data value
        // is less or equal to the star selected value.

        starElem.classList.toggle('filled', starDataValue <= starValueSelected)
    });

    rating.textContent = starValueSelected;
    
}

