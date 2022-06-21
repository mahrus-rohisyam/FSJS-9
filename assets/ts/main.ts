const isPrime = (num: number): any => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const countNumber = (a: number, b: number): any => {
  return a + b;
};

// console.log(countNumber(10, 13));
// console.log(isPrime(120));

// Class
let variable = 10
class Animal {
	//Type
  _animalName: string;
  _animalType: string;

	//Constructor
  constructor(_animalName: string, _animalType: string) {
    this._animalName = _animalName;
    this._animalType = _animalType;
  }

	//Method
  printAnimal() {
    return `I am a ${this._animalName} and i am ${this._animalType}`;
  }
}

class Zoo extends Animal {
	_habbit: boolean
  
  constructor(_habbit: boolean, _animalName: string, _animalType: string){
		super(_animalName, _animalType)
		this._habbit = _habbit
	}

	printZoo(): string{
		return `Hi, i am ${this._habbit}`
	}
}

const zebra = new Animal("Zebra", "Herbivore");
const frog = new Zoo(true, "Frog", "Omnivore")
console.log(frog._animalName)

function namaFunction (a: number, b: number): number {
	return a + b
}

const perkalian = (a: number, b: number): number => {
	return a * b
}

console.log(perkalian(2, 7))
console.log(namaFunction(2, 5))