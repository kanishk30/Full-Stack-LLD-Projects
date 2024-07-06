const carPrototype = {
    displayInfo: function() {
        return `This is a car - year: ${this.year} model: ${this.model} `
    }
}

const car1 = Object.create(carPrototype);
car1.model = 'Toyota Corolla';
car1.year = '2024'; 

const car2 = Object.create(carPrototype);
car2.model = 'maruti swift';
car2.year = '2022';

console.log(car1.displayInfo())

