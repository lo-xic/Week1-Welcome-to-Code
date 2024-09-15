/*
## Soal 2. Melakukan Looping Menggunakan For
```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
```
*/

let text = ""; //deklarasi variabel text
let urutan = ["Pertama", "Kedua", "Ketiga", "Keempat", "Kelima", "Keenam", "Ketujuh", "Kedelapan", "Kesembilan", "Kesepuluh"]; //deklarasi array string untuk digunakan di looping

for (let i =0; i <10 && i < urutan.length; i++){ // && kondisi harus terpenuhi semua
    text = "Looping " + urutan[i];
    console.log(text);
    if (i % 2 === 0){ //kondisi untuk mengecek odd atau even
        console.log("Maju");
    } else {
        console.log("Mundur");
    }
}