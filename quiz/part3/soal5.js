/*
## Soal 5. Bintang asteriks
```js
// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
```
*/

let n = 5; //deklarasi variabel untuk banyaknya kolom ke bawah
let string = ""; //deklarasi variabel string untuk input *

for (let i = 0; i < n; i++){ //looping luar untuk menjalankan jumlah looping n
    for (let j = 0; j <= i; j++){ //looping dalam untuk menjalankan jumlah looping i dan memperbanyak *
        string += "*"; // += panambahan * ke string kemudian nilainya ditambah lagi
    }
    string += "\n"; //penambahan setiap kolom baru ke bawah dari hasil looping dalam
}
console.log(string);