// BELUM SELESAI

/*
## Soal 4
```js
//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
```
*/

function xo(str) {
    let cekx = str.match(/x/gi); //search x di str dan dikembalikan ke array
    let ceko = str.match(/o/gi); //search o di str dan dikembalikan ke array
    let resultx = cekx.length; //menghitung array x di variabel cekx
    let resulto = ceko.length; //menghitung array o di variabel ceko

    if (resultx == resulto){ //pengkondisian jumlah variabel sama
        return true; //mengembalikan nilai ke function
    } else { //pengkondisian jumlah variabel tidak sama
        return false; //mengembalikan nilai ke function
    }
    // you can only write your code here!
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true