const toggle = document.querySelector(".menu input");
const nav = document.querySelector("nav ul");

toggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const articleLoader = () => {
  article = let;
  article = [
    { title: "Psychology", route: "/articles/psychology" },
    { title: "Introvert", route: "/articles/introvert" },
    { title: "Psychology", route: "/articles/psychology" },
  ];
};

/* -------------------------------- Variables ------------------------------- */
// var, variable yang mendefinisikan secara global (Tidak memiliki scope)
var x = 10;
var x = 5;
// console.log(x)

// let, variable yang dapat diubah dan memiliki scope
let greeting = "say Hi";
let times = 4;

// if (times > 3) {
//     let hello = "say Hello instead";
//     console.log(hello) // "say Hello instead"
// }
// console.log(hello) // hello is not defined

// const, variable tidak dapat diubah dan memiliki scope
const fruit = "Jeruk";

/* -------------------------------- Tipe data ------------------------------- */
//JSON adalah JavaScript Object Notation
// console.log(1 == 2)
let creator = "Mahrus";
let normalString = "Hi, im new string" + " " + "Thanks";
let literalString = `
I am support multiline string
and i am created by ${creator}
`;
// console.log(literalString)
let user = {
  name: "John",
  age: 25,
  address: {
    country: "ID",
    province: "Bekasi",
  },
  // function: console.log(`Hi, my name is John`)
};
// console.log(`Hi, my name is ${user.name} and i am ${user.age} old.`)
// console.log(user.function())

//Array urutannya dimulai dari nol, jumlah array - 1, atau n - 1
let animal = ["elephant", "tiger", "chicken", "sheep", "baboon"];
// console.log(animal[4])

let multiObjectDimensional = {
  name: "Mahrus",
  address: "Bekasi",
  grade: [
    { title: "science", score: 90 },
    { title: "math", score: 75 },
    { title: "social", score: 100 },
  ],
};
// console.log(multiObjectDimensional.grade[0].score)
// console.log(multiObjectDimensional.grade[1].score)
// console.log(multiObjectDimensional.grade[2].score)
// multiObjectDimensional.grade.map((v, i) => {
//     console.log(v.score)
// })

/* -------------------------------- Function -------------------------------- */
function namaFunction(number) {
  //Punya parameter
  //Action atau yang dikerjakan
  return number * number;
}

function namaFunction2() {
  //Ngga punya parameter
  let a = 9;
  let b = 3;
  return a * b;
}
// console.log(namaFunction2())

const namaFungsi = () => {
  //Arrow function ga pake param
  let a = 9;
  let b = 3;
  return a * b;
};

const namaFungsi2 = (a, b) => {
  //Arrow function pake param
  return a * b;
};
// console.log(namaFungsi())
/* -------------------------------- Operator -------------------------------- */
// console.log(7 + 7)
// Komparasi
// console.log(2 == '2')       //true       //perbandingan value atau nilai dari data yang diberikan
// console.log(2 === '2')      //false      //Perbandingan tipe data, string atau number
// console.log(39 < '76')    //true       //Karena 76 > 39
// console.log(76 === '76')    //false      //Karena tipe data berbeda
// console.log(13 == '13')   //true       //Karena dibaca string

/* ------------------------------- Conditional ------------------------------ */
// let login = true
// let pengguna = 'Exist'
// let email = null

// if (login == false) {
//     alert('Login berhasil !')
// } else if (email == null) {
//     alert('Silahkan masukan email')
// } else {
//     alert('Error')
// }
/* --------------------------------- Looping -------------------------------- */

/* --------------------------------- Latihan -------------------------------- */

// Segitiga
const luasSegitiga = (alas, tinggi) => {
  let result = (alas * tinggi) / 2;
  console.log(result);
};

const kelilingSegitiga = (alas) => {
  let result = alas + alas + alas;
  console.log(result);
};

//Lingkaran
const phi = 3.14;

const luasLingkaran = (ruas) => {
  let result = Math.PI * (ruas * ruas);
  console.log(result.toFixed(0));
};

const kelilingLingkaran = (ruas) => {
  let result = 2 * phi * ruas;
  console.log(result.toFixed(0));
};

//Jajar genjang
const luasJajarGenjang = (alas, tinggi) => {
  let result = alas * tinggi;
  console.log(result);
};

const kelilingJajarGenjang = (sisiMiring, alas) => {
  let result = 2 * (alas * sisiMiring);
  console.log(result);
};

//Prisma
const luasPermukaanPrisma = (luasAlas, LuasSelimut) => {
  let result = 2 * (luasAlas + LuasSelimut);
  console.log(result);
};

const volumePrisma = (luasAlas, tinggi) => {
  let result = luasAlas * tinggi;
  console.log(result);
};

//Volume balok dan Kubus
const volumeBalok = (panjang, lebar) => {
  let result = panjang * lebar;
  console.log(result);
};

const volumeKubus = (sisi) => {
  let result = sisi * sisi;
  console.log(result);
};

//Volume kerucut
const luasPermukaanKerucut = (ruas, sisiMiring) => {
  let result = phi * ruas(ruas + sisiMiring);
  console.log(result);
};

const volumeKerucut = (ruas, tinggi) => {
  let result = (1 / 3) * phi * ruas * ruas * tinggi;
  console.log(result);
};
//Testing
// console.log(luasLingkaran(20))

const angkaGanjil = () => {
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 1) {
      console.log("Angka ", i);
    }
  }
};

// const angkaGanjil = () => {
//     for(let i = 0 //Angka awal; i < 10 //Batas; i++ //Operasi){
//         if (i % 2 == 1) {
//             console.log('Angka ', i)     //Aksi
//         }
//     }
// }

// const looping = () => {
//     for(let i = 0; i >= 10; (i + 2)){
//         console.log(i)
//     }
// }

// angkaGanjil()
// looping()

/* -------------------------------- Function -------------------------------- */
function pertambahan(parameter1, parameter2) {
	//Aksinya
	return parameter1 + parameter2
}
console.log(pertambahan(1, 2), 'ini dari pertambahan')
// console.log('Mahrus')
const arrowFunction = (parameter1, parameter2) => {
	return parameter1 * parameter2
}

console.log(arrowFunction(1, 5), 'ini dari arrow Function')

/* --------------------------------- Promise -------------------------------- */


/* -------------------------------- Callback -------------------------------- */
const myDisplayer = (some) => {
  document.getElementById("demo").innerHTML = some;
}

const myCalculator = (num1, num2, myCallback) => {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

/* ------------------------------- Asynchronus ------------------------------ */


/* ------------------------------- Async Await ------------------------------ */
