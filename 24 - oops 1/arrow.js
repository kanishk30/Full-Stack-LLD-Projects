const double = x => x*x;
// const double = (x, y) => {
//     console.log('x: ', x);
//     return x*y;
// }

// console.log(double(5));

let arr = [1,2,3];
// double all elements of the array.
// [2,4,9]

// const result = arr.map(function(num) {
//     return num*num
// })

// const result = arr.map(num => num*num);
// const result = arr.map((num) => num * num);
const result = arr.map((num) => {
    return num*num
});

// console.log(result)



// const person = {
//     name: 'joe',
//     arrow: () => console.log('arrow: ', this.name),
//     regular: function() {
//         console.log('Regular', this.name)
//     }
// }
// // window.name = 'zeus';

// person.arrow();
// person.regular();


const person = {
    name: 'joe',
    eventuallySayName: function() {
        function actuallySayName() {
            console.log(this, 'this in actuallySayName');
            console.log('First regular way', this.name);
        }

        // arrow function way >
        const actuallySayNameArrow = () => {
            console.log(this, 'this is arrow function');
            console.log('Second arrow way', this.name);
        }

        // actuallySayName()
        setTimeout(actuallySayName, 1000)
        setTimeout(actuallySayNameArrow, 1000)
    }
}
person.eventuallySayName();