// while (), bagaimana true ke false
// for ()

// let i = 0;

// while (i < 5){ 
//     console.log(i);
//     i++
// } //berhasil


// dalam looping ada yang namanya arah, kiri atau kanan
// kiri itu pengurangan, kanan itu penambahan
// hati hati akan infinite loop, atau loopnya tidak nyala


// for (let i = 0; i < 5; i++){ //penambahan, arah ke kanan
//     console.log(i);
// } //berhasil

// for (let j = 3; j >= 0; j--){ //pengurangan, arah ke kiri
//     console.log(j);
// } //berhasil

// let name = "LoXic";

// ada yang namnaya metode length untuk tipe data string dan array
// method lenght mengembalikan nilai angka, total huruf yang ada pada string, atau total elemen yang ada pada array
// for (let i = 0; i < name.length; i++){
//     console.log(name[i]);
// } //berhasil

// jadi pada tipe data string atau array di javascript, ada yang namnaya indexing
// dimana indek itu SUDAH PASTI MULAI DARI 0;

// console.log(name[0] + name[5]);

// diberikan kasus untuk mengembalikan suatu kata, tanpa menggunakan method reverse

// let name = "LoXic"; //length 5, sedangkan index itu dari 0, l->0, o ->1, x ->2, i ->3, dan c ->4
// let result =""; //untuk membalikan kata nama buat variabel baru

// for (let i = name.length - 1; i >= 0; i--) { // i = 5 - 1; 4 - 1 >= 0; i--
//     result += name[i];
// }
// console.log(result);


// nested loop, di looping ada luping lagi

for (let i = 0; i < 5; i++){ //pada setiap looping i akan dijalankan looping j
    for (let j = 0; j < 5; j++){
        console.log(j);
    }
    console.log('');
}
console.log("selesai");

// kesimpulan looping akan selalu bertemu dengan method length
// looping itu agar membuat code jadi lebih enteng
// looping itu agar membuat suatu proses menjadi dinamis