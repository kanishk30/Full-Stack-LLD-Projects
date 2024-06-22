const grandparent = document.querySelector('#grandparent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

// bubbling
// grandparent.addEventListener('click', function() {
//     console.log('grandparent clicked (Bubbling)')
// }, false)

// parent.addEventListener('click', function() {
//     console.log('parent clicked (Bubbling)')
// })

// child.addEventListener('click', function(e) {
//     console.log('child clicked (Bubbling)');
    
//     // stop propagation after clicking the child element.
//     e.stopPropagation();
// })

// event capturing
// useCapture paramerter ( third param (boolean))
grandparent.addEventListener('click', function() {
    console.log('grandparent clicked capturing')
}, true)

parent.addEventListener('click', function(e) {
    console.log('parent clicked capturing')
    e.stopPropagation();
}, true)

child.addEventListener('click', function() {
    console.log('child clicked capturing')
}, true)