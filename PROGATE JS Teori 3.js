// Function
const intro = function() {
    console.log("Halo selamat datang!");
    console.log("Siap mengakhiri pikiranmu dengan Function?");
}
intro();
console.log("");


// Arrow Function (Alternatif cara untuk memanggil function, berlaku di versi ES6)
const form = () => {
    console.log("Masih kuat?");
    console.log("YO Haruss!");
}
form();
console.log("");


// Argument
// Nilai yang diteruskan saat Anda memanggil function disebut argument, namun variable yang tertulis dalam definisi disebut parameter.
// function (parameter) / (parameter) =>
const greet = (name, age) => {
    console.log(`Halo ${name}`);
    console.log(`Guru berumur ${age} tahun`);
};
greet("Guru Domba", 50);
// Kurang lebih argumen itu ini ("Guru Domba")
console.log("");


// Return
//  Nilai yang dihasilkan setelah function dipanggil, disebut nilai Return.
//  1 + 2 = "3" <- Return
const half = (number) => {
    return number /2;
};
const result = half(130);
console.log(`Separuh dari 130 adalah ${result}`);
console.log("");


// Jenis Nilai Return
// Salah satunya boolean
const check = (nomor) => {
    return nomor %2 === 0;
};
if (check(4)) {
    console.log("Benar");
} else {
    console.log("Salah");
}
console.log("");


// Scope (Cakupan) Constant di Dalam Function
// 1. Di dalam Function, tidak bisa di gunakan diluar function
const scup = () => {
    const nama = "Aka";
}
console.log(scup.nama);
// undifined hasilnya

// 2. Di luar Function, bisa digunakan di dalam maupun di luar function
// Definisikan constant name
const namee = "Ninja Ken";
const introduce = (namee) => {
    console.log(`Saya ${namee}`);
};
introduce("Guru Domba");
console.log(namee);
console.log("");



// LATIHAN GOBLOK
// Cari bilangan yang paling besar dari ketiga number ini
const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum
const getMax = (a, b, c) => {
    let max = a;
    
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    
    return max;
};

// Print "Nilai maksimum adalah __"
const max = getMax(number1, number2, number3);
console.log(`Nilai maksimum adalah ${max}`);