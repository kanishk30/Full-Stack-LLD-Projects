function User(name) {
    this.name = name;
    this.msg = function() {
        console.log(`Hello ${this.name}`)
    }
}

const user1 = new User('Kohli');
const user2 = new User('DHoni');

console.log(user1)
console.log(user2)
// console.log(user1.msg())
// console.log(user2.msg())

console.log('different instantitation : User', user1.msg === user2.msg)


function BetterUser(name) {
    this.name = name;
    BetterUser.prototype.msg = function() {
        console.log(`Hello ${this.name}`)
    }
}
const user3 = new BetterUser('Rohit');
const user4 = new BetterUser('SKY');

console.log(user3)
console.log(user4)

console.log('BetterUser', user3.msg === user4.msg)