let nilai = 50;

console.log(nilai >= 50); //hasilnyua tergantung nilainya, antara true atau false

if (nilai>= 50){
    console.log("lulus pintar");
} else if (nilai >= 40){
    console.log("tidak lulus");
} else {
    console.log("tidak lulus pake banget");
}

// isi dari variabel nilai di atas berhenti di sini

nilai = 100; //isi dari variabel nilai dideklarasikan baru di sini
if (nilai >= 80 && nilai <= 100){
    nilai = "A";
} else if (nilai >= 70 && nilai < 80){
    nilai = "B";
} else if (nilai >= 60 && nilai < 70){
    nilai = "C";
} else if (nilai < 60){
    nilai = "D";
}

console.log(nilai);

// && semua kondisi harus dipenuhi baru akan menghasilkan nilai true
// or salah satu harus terpenuhi baru menghasilkan nilai true

nilai = 40; // isi dari variabel nilai di atas berhenti di sini
let banding = nilai >= 80 && nilai <= 100; //antara true atau false
console.log(banding, "&&");
let banding2 = nilai >= 80 || nilai < 100; //antara true atau false
console.log(banding2, "||");
let banding3 = nilai != 50;
console.log(banding3, "!");

// apa bedanya == dengan ===
let x = 50;
let y = "50";

let banding4 = x == y;
console.log(banding4, "4");
let banding5 = x ===y;
console.log(banding5, "5");

// if else ini bisa dibikin bersarang

let number = 5;
if (number > 5){
    if (number % 2 === 0){
        console.log("lebih besar dari 5 dan genap");
    } else {
        console.log("lebih besar dari 5 dan ganjil");
    }
} else {
    if (number % 2 === 0){
        console.log("lebih kecil dari 5 dan genap");
    } else {
        console.log("lebih kecil atau sama dengan 5 dan ganjil");
    }
}
