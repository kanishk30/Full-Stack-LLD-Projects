let zoo = {
    name: 'Amazing zoo',
    location: 'Sydney, Australia',
    animals: [
        {
            species: 'Lion',
            favouriteFood: 'Meat'
        },
        {
            species: 'Goat',
            favouriteFood: 'Leaf'
        },
    ]
};

let zooStr = JSON.stringify(zoo);
let deepZoo = JSON.parse(zooStr);

// console.log(zoo);
// console.log(shallowZoo);

deepZoo.location = 'Kerala, India';
// console.log('Location updated shallow zoo: ', shallowZoo); // updated kerala
// console.log('Zoo: ', zoo); // not updated lcoation - sydney


deepZoo.animals[0].favouriteFood = 'Grass';
console.log('deep zoo', deepZoo) //     { species: 'Lion', favouriteFood: 'Grass' },
console.log('zoo: ', zoo) //     { species: 'Lion', favouriteFood: 'Meat' },


