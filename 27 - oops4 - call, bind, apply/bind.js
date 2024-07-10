// const user = {
//     name: 'Alice',
//     age: 20,
//     greet: function() {
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`)
//     }
// }

// const boundGreet = user.greet.bind(user);

// const user2 = {
//     name: 'Bob',
//     age: 60
// }

// const boundGreet2 = user.greet.bind(user2);

// boundGreet()
// boundGreet2()


const alice = {
    name: 'Alice',
    age: 20,
    introduce: function() {
        console.log(this)
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}

const button = document.getElementById('introduceBtn');

const boundIntroduce = alice.introduce.bind(alice);

button.addEventListener('click', boundIntroduce);

// button.addEventListener('click', alice.introduce) // this will be lost. 