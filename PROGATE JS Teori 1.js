// Selamat Datang di JavaScript
console.log("Hello World");

console.log(5*3);

console.log("Bakso"+"Sapi");


// Mendeklarasikan Variabel
let nama = "Namaku Jhon";
console.log(nama);

let num = 5;
console.log(num*5);


// Update Variabel
let ver1 = "Versi lama";
ver1 = "Versi Baru";
console.log(ver1);


// Memperbarui Variable, Menggunakan Nilainya
let numb = 3;
numb = numb + 2;
console.log(numb);

let numbr = 5;
numbr *= 2;
console.log(numbr);


// Mendeklarasikan Constant
const userName = "Aka";
console.log(userName);


// Constant tidak bisa dirubah, sesuai dengan namanya
// name = "Sahadi";
// console.log(name);
// Langsung error nanti


// Template Literal
const umur = 19;
const char = "Mikago";
console.log(`Ini adalah ${char}, dia berumur ${umur}`);


// Operator Perbandingan
// a === b : Sebanding
// a !== b : Tidak sebanding
// a > b : Lebih dari
// a >= b : Lebih dari atau Sama dengan
// a < b : Kurang dari
// a <= b : Kurang dari atau Sama dengan


// IF
const nomo = 12;
if (nomo > 10) {
    console.log(`Hasilnya ${nomo} lebih dari 10`);
    console.log(nomo >= 10);
    console.log(nomo < 1);
}


// ELSE
const jeneng = "Aka";
const waktu = 12;
if (waktu < 10) {
    console.log(`Di pagi hari ${jeneng} biasanya masih tidur`);
} else {
    console.log(`Di siang hari ${jeneng} biasanya sudah bangun`);
}


// ELSE IF
const time = 21;
if (time < 10) {
    console.log(`Di pagi hari ${jeneng} biasanya masih tidur`);
} else if (time > 19) {
    console.log(`Di malam hari ${jeneng} biasanya olahraga`);
} else {
    console.log("Kalau tidak, ya udah");
}


// && (Dan)
// Dua syarat yang HARUS terpenuhi
const mobil = 2;
if (mobil > 1 && mobil < 3) {
    console.log(`Aku hanya punya mobil tidak lebih dari ${mobil}`);
}


// || (Atau)
// Salah satu/semua syarat yg harus terpenuhi
const kue = 3;
if (kue < 2 || kue > 2) {
    console.log(`Terkadang aku punya kue kurang dari 3, tapi sekarang hanya ada ${kue}`);
}


// Percabangan SWITCH CASE
const lampu = "merah";
switch (lampu) {
    case "merah":
        console.log("Berhenti");
        break;
    case "kuning":
        console.log("Siaga");
        break;
    case "hijau":
        console.log("Jalan");
        break;
    default:
        console.log("Ini bukan lampu merah");
        break;
}


