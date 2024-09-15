/*
## Soal 2
```js
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.

//bikin fungsinya disini

let num1 = 1
let num2 = 2

let hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

// ------------------------------------
console.log('')
// -----------------------------------
```
*/

let num1 = 3;
let num2 = 5;

function calculateMultiply(num1, num2){ //menambahkan parameter
    return num1 * num2; //mengambalikan nilai ke fungsi berupa hasil kali dari dua parameter yang dikirim
}

console.log(calculateMultiply(2,4));
console.log(calculateMultiply(3,6));
console.log(calculateMultiply(4,8));
console.log(calculateMultiply(6,10));
console.log(calculateMultiply(8,12));