/*
## Soal 1
```js
// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {
  //code disini
}
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false

```
*/

function bandingkanAngka(angka1, angka2) {
    if (angka2 > angka1){ //pengkondisian 1
        return true; //mengembalikan nilai true pada kondisi 1 ke function
    } else if ( angka2 === angka1){ //pengkondisian 2
        return -1; //mengambalikan nilai -1 pada kondisi 2 ke function
    } else { //pengkondisian 3, otomatis angka 2 lebih kecil dari angka 1 dan tidak sama dengan angka 2 karena sudah melewati pengkondisian 1 dan 2
        return false; //mengembalikan nilai false pada kondisi 3 ke function
    }
    //code disini
  }
    
    // TEST CASES
    console.log(bandingkanAngka(5, 8)); // true
    console.log(bandingkanAngka(5, 3)); // false
    console.log(bandingkanAngka(4, 4)); // -1
    console.log(bandingkanAngka(3, 3)); // -1
    console.log(bandingkanAngka(17, 2)); // false
  