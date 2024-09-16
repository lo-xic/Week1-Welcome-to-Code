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
    let menit1 = menit % 60; //modulus untuk mencari sisa menit 
    let menit1toString = menit1.toString(); //diubah ke string untuk di padding
   
    let result = Math.floor(jam) + ":" + menit1toString.padStart(2, "0"); //math.floor membulatkan ke bawah diambil jamnya saja
     //pading variabel menit1toString di awal dengan 0 sampai panjangnya 2 
    //  jika panjangnya sudah 2 tidak dijalankan paddingnya, namun langsung ke nilai variabelnya

    return result.toString();
    // you can only write your code here!
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00