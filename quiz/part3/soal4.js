/*
## Soal 4. counter kelipatan
```js
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
```
*/
console.log("");

for (let i = 1; i < 100; i++){ //perulangan i dari 1 sampai 100
    i += 2; //untuk menghasilkan kelipatan 3, i ditambahkan 2 dan i++ tambah 1 jadi i disetiap looping mulai dari 3
    if (i % 3 === 0){
        console.log(i + " kelipatan 3");
    }
}

console.log("");

for (let i = 1; i < 100; i++){ //perulangan i dari 1 sampai 100
    i += 5; //untuk menghasilkan kelipatan 6, i ditambahkan 5 dan i++ tambah 1 jadi i disetiap looping mulai dari 6
    if (i % 6 === 0 && i < 100){ //ditambah i < 100 untuk pengkondisian agar loping terakhir tidak melebihi 100
        console.log(i + " kelipatan 6");
    }
}

console.log("");

for (let i = 1; i <= 100; i++){ //perulangan i dari 1 sampai 100
    i += 9; //untuk menghasilkan kelipatan 10, i ditambahkan 9 dan i++ tambah 1 jadi i disetiap looping mulai dari 10
    if (i % 10 === 0 && i <= 100){ //ditambah i <= 100 untuk pengkondisian agar loping terakhir tidak melebihi 100
        console.log(i + " kelipatan 10");
    }
}

console.log("");