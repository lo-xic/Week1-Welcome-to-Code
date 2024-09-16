/*
## Soal 3
```js
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
```
*/

function processSentence(name, age, address, hobby){ //membuat fungsi dan parameter
    return "Nama saya " + name + ", umur saya " +  age + ", alamat saya di " + address + ", dan saya punya hobi yaitu " + hobby;
    // mengembalikan nilai pada fungsi yang memproses kalimat utuh
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name, age, address, hobby); //deklarasi function ke variabel
console.log(fullSentence); //variabel yang berisi function dipanggil