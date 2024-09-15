function helloWord(){
    return "Hello Word";
} //fungsi ini punya nilai "hello word";

console.log(helloWord());

function test(){
    console.log('test');
}

test();
// console.log(test());

// return memberikan nilai ke fungsi, bila tidak memberikan return di fungsi
// maka fungsi tersebut mempunyai nilai undefined

let hello = helloWord();
let hello1 = "Hello Word";
// keluarannya sama

function tambahAngka (angka1, angka2){ //parameter disini bisa banyak sekali, sesuai kebutuhan
    return angka1 + angka2; //memberikan nilai ke fungsi tambahAngka
}

console.log(tambahAngka(1, 2));
console.log(tambahAngka(3, 4));
console.log(tambahAngka(5, 6));
console.log(tambahAngka(7, 8));
console.log(tambahAngka(9, 10));
console.log(tambahAngka()); //misalkan tanpa parameter nilainya NaN

let angka5 = tambahAngka(2,3);
console.log(angka5);

console.log("");

// misal membuat fungsi balik kata

function balikKata (kata){
    let balikKata = "";
    for (let i = kata.length - 1; i >= 0; i--){
        balikKata += kata[i]; //
    }
    return balikKata; //memberikan nilai ke fungsi agar bisa diapnggil
}

console.log(balikKata("kucing"));
console.log(balikKata("gajah"));
console.log(balikKata("harimau"));
console.log(balikKata("hiu"));
console.log(balikKata("katak"));

console.log("");

function nambahinHurufBesarSetelahSpasi(kata){
    let result = "";
    for (let i = 0; i < kata.length; i++){
        if (i === 0 || kata[i -1] === " "){
            result += kata[i].toUpperCase(); //mengambil nilai string trs dijadikan kapital
        } else {
            result += kata[i]; //mengambil nilai string kemudian dijejer dngn result
        }
    }
    return result; //memberikan nilai di fungsi pada variabel yang digunakan
}

console.log(nambahinHurufBesarSetelahSpasi("sky piercer"));
console.log(nambahinHurufBesarSetelahSpasi("black hole"));
console.log(nambahinHurufBesarSetelahSpasi("quantum entangelment"));

/*

function ntahApaIni(a,b,c,d) {
  //suka suka kalian lah disini mau apa
}

ntahApaIni(1,2,3,4,5)
//kok ada 5, kan d itu sampe 4, sedangkan 5 itu ga ada di parameter?
//tenang saja angka 5 ga akan dianggap

let nama = "andi"; //variabel ini ada pada global scope
//yang mana bisa diakses pada fungsi fungsi yang sejajar

function hello() {
  let hello = "hello "; //variabel ini ada di local scope
//local scope fungsi hello, yang mana akan error kalau variabel hello kita panggil keluar
//dari fungsinya

  console.log(hello + nama1);
}

console.log(helo) //ini akan error wkwk

//simplenya penulis menyebutkan adanya hirarki pada pemrograman
//misal

let nilai = 50

if (nilai >= 50) {
  let hasil = "lulus" //disini bisa deklarasi variabel hasil
} else {
  let hasil = "Tidak lulus" ////disini juga bisa deklarasi variabel hasil
}

console.log(hasil) //namun bila dijalankan ya akan error, karena variabel hasil hanya bisa
//diakses pada local scope if dan else

console.log('');

//global scope
if (kondisi) {
    //block scope nya si if
  } else {
    //block scopenya si else
  }
  //ini masih global scope
  function ntahApa() {
    //local scopenya si fungsi ntahApa
    if (kondisi) {
      //ini makin dalam, yg dinamakan block scope
      //let hello = "woi wkwkw"
    }
  
    console.log(hello) //error nanti soalnya ga se scope
  }


let woi = "woi";
function ntahApa() {
  //local scopenya si fungsi ntahApa
  let hello = "";
  if (kondisi) {
    //ini block scope
    hello = "woi wkwkw"
    console.log(hello) //ini ga akan error, ya karena var hello ada di luar scopenya
    let akanError = "hehehe";
  }
  // console.log(akanError) //ini akan error, kenapa? pahami sendiri dah wkwk

  console.log(hello) //ini ga error, soalnya log ini dan var hello berada dalam scope yang sama
  console.log(woi) //ini juga ga error, karena memanggil var woi yang berada di luar/atas/global scope
}

*/

