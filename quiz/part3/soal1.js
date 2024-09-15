/*
## Soal 1

```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
```
*/
let i = 0; //deklarasi variabel i
let text = ""; //deklarasi variabel text
let urutan = ["Pertama", "Kedua", "Ketiga", "Keempat", "Kelima", "Keenam", "Ketujuh", "Kedelapan", "Kesembilan", "Kesepuluh"]; //deklarasi array string untuk digunakan di looping

while (i < 5 && i < urutan.length){ // && kondisi harus terpenuhi semua, berarti yang banyak mengikuti yang sedikit
    text = "Looping " + urutan[i]; //text looping urutannya akan sesuai dengan urutan string di array sesuai i
    i++; //penambahan
    console.log(text);
    if (i % 2 === 0){ //kondisi untuk mengecek i, apakah ood atau even
        console.log("Mundur");
    } else {
        console.log("Maju");
    }

}