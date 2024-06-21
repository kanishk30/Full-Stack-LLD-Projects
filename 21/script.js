const grandparent = document.querySelector('#grandparent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

// bubbling
// grandparent.addEventListener('click', function() {
//     console.log('grandparent clicked')
// }, false)

// parent.addEventListener('click', function() {
//     console.log('parent clicked')
// })

// child.addEventListener('click', function() {
//     console.log('child clicked')
// })

// event capturing
grandparent.addEventListener('click', function() {
    console.log('grandparent clicked capturing')
}, true)

parent.addEventListener('click', function() {
    console.log('parent clicked capturing')
}, true)

child.addEventListener('click', function() {
    console.log('child clicked capturing')
}, true)