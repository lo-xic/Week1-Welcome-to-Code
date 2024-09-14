// cara membuat variabel

var a = 'a';
let = 'b';
const c = 'c';

// gunakan let atau const untuk variabel (yg sering digunakan, jangan var sudah jadul)

// variabel bisa menampung tipe data string (text), integer (number), boolean, array, odject

let nama = 'LoXic'; //string
console.log(nama);
let umur = 20; //number
console.log(umur);
let apakahBenar = true; //boolean
console.log(apakahBenar);
let uang = 999.9 //number namun ada koma
console.log(uang);

// operator aritmatika

let angka1 = 9;
let angka2 = 19;
console.log(angka1 + angka2, 'penjumlahan'); //penjumlahan
console.log(angka1 - angka2, 'pengurangan'); //pengurangan
console.log(angka1 / angka2, 'pembagian'); //pembagian
console.log(angka1 * angka2, 'perkalian'); //perkalian


// penulisan variabel dengan awal kata menggunakan kapital (huruf besar) disebut camel case

let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); //28

// ketika variabel sudah dideklarasikan
// maka untuk mengubah nilai pada variabel tidak perlu menggunakan let lagi

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); //-10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika); //?

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika); //?

// string juga bisa ditambah namun string ga bisa dikurang dengan operator artimatika
let firstname = 'Ire';
let lastname = 'Secrvyiv';
let fullname = firstname + lastname;
console.log(fullname, 'nama nya gabung');
fullname = firstname + ' ' + lastname; //mengubah nilai di variabel dengan menambahkan spasi
console.log(fullname, 'nama nya terpisah');
console.log(firstname - lastname); //NaN

//alur pembacaan code
//untuk membaca code kalian harus membacanya dari kiri ke kanan, dan atas ke bawah
//contoh

let number = 10;
console.log(number + 9); //19
number = 19; //mengubah nilai variabel number dengan nilai yang baru
console.log(number + 9); //28
number = false; //mengubah nilai variabel number dengan nilai yang baru
console.log(number + 9); //9

// pertanyaan?
// kenapa false + 9 tetap menjadi 9????
// karena false = 0 dan true = 1

number = true;
console.log(number + 9); //10

// membaca error
// error itu jangan kalian takut, justru kalian harus takut kalau ada tidak ada yang namanya error dalam pemrograman
// karena dalam pekerjaan, suatu fitur berjalan namun ada bug tapi tidak error, itu bikin si programmer rada
// muak buat mencari errornya atau letak kesalahan kodenya

// contoh error
// const hewan = 'gagak'; //variabel konstan, tidak dapat diubah
// console.log(hewan);
// hewan = 'hiu'; // error disini

// hasilnya 
// TypeError: Assignment to constant variable. dasar1.js:80:7

// auto komentar bisa mencet ctrl + /
