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
let shallowZoo = {...zoo};

// console.log(zoo);
// console.log(shallowZoo);

shallowZoo.location = 'Kerala, India';
// console.log('Location updated shallow zoo: ', shallowZoo); // updated kerala
// console.log('Zoo: ', zoo); // not updated lcoation - sydney


shallowZoo.animals[0].favouriteFood = 'Grass';
console.log('Shallow zoo', shallowZoo) //     { species: 'Lion', favouriteFood: 'Grass' },
console.log('zoo: ', zoo) //     { species: 'Lion', favouriteFood: 'Grass' },


