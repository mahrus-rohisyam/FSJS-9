"use strict";
const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0)
            return false;
    return num > 1;
};
const countNumber = (a, b) => {
    return a + b;
};
// console.log(countNumber(10, 13));
// console.log(isPrime(120));
// Class
class Animal {
    constructor(_animalName, _animalType) {
        this._animalName = _animalName;
        this._animalType = _animalType;
    }
    printAnimal() {
        return `I am a ${this._animalName} and i am ${this._animalType}`;
    }
}
class Zoo extends Animal {
}
const zebra = new Animal("Zebra", "Herbivore");
console.log(zebra.printAnimal());
