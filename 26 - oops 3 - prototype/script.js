const animal = {
    eats: true,
    sleep: true,
    walk: function() {
        console.log('animal walk')
    }
}

const herbivore = {
    eatsMeet: 'no',
    __proto__: animal
};

const carnivore = {
    eatsMeet: 'yes',
    __proto__: animal
}

console.log(animal);

const rabbit = {
    isWhite: true,
    __proto__: herbivore
}

const tiger = {
    canKill: true,
    __proto__: carnivore
}




console.log('rabbit', rabbit)
console.log('tiger', tiger)
console.log('herbivore', herbivore)
console.log('carnivore', carnivore)
console.log('animal', animal)

// prototype chaining
// rabbit.__proto__
// {eatsMeet: 'no'}
// rabbit.__proto__.__proto__
// {eats: true, sleep: true, walk: ƒ}
// rabbit.__proto__.__proto__.__proto__
// null
