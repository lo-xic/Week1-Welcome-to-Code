let text1 = "      Hello World!      ";
let text2 = text1.trim();
let text3 = text1.trimStart();
let text4 = text1.trimEnd();

console.log(text2);
console.log(text3);
console.log(text4);

console.log("");

let text5 = "5";
let padded = text5.padStart(4,"0");
console.log(padded); //menambahkan

let text6 = "5";
let padded1 = text6.padEnd(4,"0");
console.log(padded1);

// .repeat() //menampilkan string sesuai dengan jumlah repeat
// .replace(x,y) //mereplace string yang bernama x di sebuah text dengan string y hanya yang pertama
// jika mau ditambahkan /g untuk mengubah string yang smaa sekaligus

let text7 = "Please locate where 'locate' occurs!";
let result = text7.search("locate");

console.log(result);

let text8 = "The rain in SPAIN stays mainly in the plain";
let result1 = text8.match(/ain/gi);
let result2 = text8.includes("ain");

console.log(result1);
console.log(result2);
