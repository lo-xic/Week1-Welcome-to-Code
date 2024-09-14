// dilanjutkan nanti, blm selesai
// MUMET BANGET IKI :((((
// HASILNYA BELUM SESUAI, PERLU PERBAIKAN. LANJUTIN MATERI DULU.


/*
Algoritma deskriptif (contoh 1)

cara memasukan baju ke mesin cuci
misal mesin cuci hanya muat 3 baju saja
lalu kita butuh mencuci 4 baju

langkah awal
kita masukan 3 baju sekaligus ke mesin cuci tersebut
kalau kita memasukan 4 baju sekaligus maka akan ada peringatan dari mesin cucinya

lalu kalau sudah memasukan 3 baju atau kurang dari itu
baju yang kotor dikurangi baju yang masuk ke mesin cuci tersebut

lalu lakukan hal tersebut sampai baju kotornya habis

*/

// contoh1

let mesinCuci = 0; //variabel dikosongkan dulu
let bajuKotor = 7;
let bajuBersih = 0; //belum mulai mencuci, dikosongkan
let masukanKeMesinCuci = 3;
let otomatis = 0;

mesinCuci = masukanKeMesinCuci; //mengubah nilai variabel mesinCuci menjadi nilai variabel masukanKeMesinCuci
bajuKotor = bajuKotor - masukanKeMesinCuci;

if (mesinCuci > 3){ //Kondisi akan terpicu jika baju kotor yang dimasukan melebihi kapasitas
   console.log("Peringatan, Mesin Cuci tidak bisa berputar. Kapasitas melebihi batas, kurangi pakaian Anda!"); //peringatan dari mesin cuci
   mesinCuci = 0; //mesin cuci dikosongkan kembali, baju kotor dikeluarkan dulu

   console.log("Baju kotor Anda tersisa", bajuKotor + masukanKeMesinCuci);
} else if (1 <= masukanKeMesinCuci <=3){ //kondisi akan terpicu jika
   bajuBersih = masukanKeMesinCuci;
   console.log("Baju yang Anda cuci telah bersih");
   console.log("Baju bersih Anda =", bajuBersih);
   console.log("Sisa baju kotor Anda =", bajuKotor);

   if (bajuKotor === 0){
    console.log("Baju Anda telah bersih semua");
    console.log("Baju bersih Anda =", bajuBersih);
    console.log("Sisa baju kotor Anda =", bajuKotor);
} else {
    mesinCuci = bajuKotor;
    if (mesinCuci > 3){ //Kondisi akan terpicu jika baju kotor yang dimasukan melebihi kapasitas
        console.log("Peringatan, Mesin Cuci tidak bisa berputar. Kapasitas melebihi batas, kurangi pakaian Anda!"); //peringatan dari mesin cuci
     
        console.log("Baju kotor Anda tersisa", mesinCuci);
        console.log("Tunggu sebentar");
        if (mesinCuci % 3 === 0){
            otomatis = mesinCuci / 3;

            console.log("Tunggu sebentar");
            console.log("Pakaian Anda akan dicuci dalam", otomatis, "putaran");

            for (let i = 0; i < otomatis; i++){
                console.log("Putaran ", i);
                console.log("Tunggu sebentar");
            }
            console.log("Pakaian Anda telah dicuci");
            otomatis = otomatis * 3;
            bajuBersih = bajuBersih + otomatis;
            console.log("Baju Anda telah bersih semua");
            console.log("Baju bersih Anda =", bajuBersih);
            console.log("Baju kotor Anda tidak tersisa");
        } else {
            otomatis = mesinCuci / 3;
            otomatis = Math.ceil(otomatis);

            for (let i = 0; i < otomatis; i++){
                console.log("Putaran ", i);
                console.log("Tunggu sebentar");
            }
            console.log("Pakaian Anda telah dicuci");
            otomatis = otomatis - 1;
            bajuBersih = bajuBersih + otomatis;
            console.log("Baju Anda telah bersih semua");
            console.log("Baju bersih Anda =", bajuBersih);
            console.log("Baju kotor Anda tidak tersisa");
        }
    } else {
        bajuBersih = bajuBersih + mesinCuci;
        console.log("Baju Anda telah bersih semua");
        console.log("Baju bersih Anda =", bajuBersih);
        console.log("Baju kotor Anda tidak tersisa");
    }
}
}




/*
Algoritma deskriptif (contoh 2)

cara menyimpan barang di lemari
misal lemari memiliki kapasitas 7
dan kamu punya 10 barang

langkah awal
kita mencoba masukan barang ke lemari
kita memasukan barang satu per satu ke lemari sampai penuh
kalau kita memaksakan untuk memasukan 10 barang sekaligus ke lemari maka lemari itu tidak cukup
maka ada barang yang tidak masuk ke lemari

kalau barang sudah dimasukan ke lemari sebanyak 7 atau kurang dari itu
maka barang yang tersisa dikurangi barang yang dimasukan ke lemari

lalu barang yang tersisa dimasukan ke lemari yang lain

lakukan hal itu sampai semua barang masuk ke dalam lemari yang diinginkan

*/

/*
Algoritma deskriptif (contoh 3)

cara membuang sampah
misal kantong sampah memiliki kapasitas 20
lalu kita memiliki sampah berkapasitas 23
kantong sampah masih bisa terus diisi sampai total kapasitasnya 20
apabila kantong sampah sudah penuh maka kantong sampah menolak untuk diisi sampah

kalau kantong sampah penuh maka sampah yang tersisa harus menununggu
sammpah yang ada dikurangi sampah yang masuk ke kantong sampah
kemudian sampah yang ada di kantong sampah harus dikosongkan terlebih dahulu

kalau kantong sampah penuh maka sampah yang tersimpan harus dibuang ke tempat sampah terlebih dulu
setelah kantong sampah dikosongkan, baru kantong sampah bisa menerima kembali sampah yang tersisa

lakukan hal itu sampai semua sampah tidak tersisa
*/