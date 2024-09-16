// BELUM SELESAI

/*
## Soal 3
```js

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    // you can only write your code here!
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
```
*/

function konversiMenit(menit) {
    let jam = menit/60;
    let menit1 = menit % 60;
    const angkaToString = menit1.toString();

    
    for (let i = angkaToString.length - 1; i >= 0; i--){
        
    }
    while (angkaToString.length < i){
        if (menit1[0] !== 0){
            menit1 += menit1[i];
        }
    }

    let result = Math.floor(jam) + ":" + menit1;
    return result.toString();
    // you can only write your code here!
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00