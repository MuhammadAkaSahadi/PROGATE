<?php
// String
echo "Hello";
?>

<?php
// Integer
echo 2+2;
?>

<?php
// Variabel
$box = "aku isinya ";
echo $box;
$boxnum = 2*3;
echo $boxnum;
?>

<?php
// Mengganti Variabel
$box1 = "aku tdk dipakai";
$box1 = "aku yg dipakai";
echo $box1;
?>

<?php
$box2 = 1;
$box2 = $box2 + 4;
echo $box2;
?>

<?php
$box3 = 3;
$box3 *=3;
echo $box3;
?>

<?php
$x = 9;
echo ++$x;
?>

<?php
// Penggabungan String
$a = "Hia";
echo $a."Hau";
// $a.$b juga bisa
// $a.="Hau" juga bisa
?>

<?php
// Substitusi variabel
$b = "Mobil";
echo "$b Terbang";
?>

<?php
// IF
$c = 2*4;
if ($c>5){
    echo "$c lebih besar dari 5";
}
?>

<?php
// IF ELSE
$d = 30;
if (30==1){
    echo "30 sama dengan 1";
} else {
    echo "30 tidak sama dengan 1";
}
?>

<?php
// ELSE IF
$e = 30;
if (30==1){
    echo "30 sama dengan 1";
} elseif (30==30){
    echo "30 sama dengan 30";
} else {
    echo "ini bukan nomor";
}
?>

<?php
// Dan '&&' dan Atau '||'
// Hasil dari statement dengan '&&' menjadi 'true' hanya jika ekspresi kiri dan kanan adalah true.
// Hasil statement dengan || menjadi true ketika salah satu atau kedua ekspresi kiri dan kanan adalah true.
$x = 1071;
if ($x % 3 == 0 && $x % 7 == 0) {
    echo 'x adalah kelipatan 3 dan kelipatan 7.';
} elseif ($x % 3 == 0) {
    echo 'x adalah kelipatan 3 tetapi bukan kelipatan 7.';
} elseif ($x % 7 == 0) {
    echo 'x adalah kelipatan 7 tetapi bukan kelipatan 3.';
} else {
    echo 'x bukan kelipatan 7 atau kelipatan 3.';
}
?>

<?php
// Meniadakan Kondisi '!'
// Anda dapat meniadakan sebuah kondisi dengan menggunakan !,
// dimana hasilnya menjadi false jika ekspresinya true, dan true jika ekspresinya false.
$x = 20;
if (!($x == 10)) {
    echo "$x tidak sama dengan 10";
}
?>

<?php
// Switch Case
$num = 1;
// Berikan sisa $num dibagi dengan 3
$remainder = $num%3; 
switch ($remainder) {
    case 0:
        echo 'Sangat beruntung!!';
        break;
    case 1:
        echo 'Beruntung!';
        break;
    case 2:
        echo 'Sedikit beruntung.';
        break;
    default:
        echo 'Tidak beruntung...';
        break;
    }
?>

<?php
// Array
// Anda dapat menyimpan beberapa nilai secara bersamaan menggunakan array, yang dapat diakses dengan menggunakan indeks atau key.
$colors = array('Merah','Biru','Kuning');
    echo $colors[0];
    $colors[]='Putih';
    echo $colors[3];
?>

<?php
// Array Associative
// Array associative memungkinkan kita untuk mengelola kumpulan data seperti array biasa. 
//Perbedaannya adalah daripada menggunakan nomor index untuk mengelola element individu, Anda dapat menentukan nilai sebagai kunci. Kunci bisa berbentuk string. 
$scores = array (
    'Matematika' => 70, // MTK = kunci, 70 = nilai
    'Bahasa' => 90,
    'Sains' => 80
);
$scores['Sains'] += 5;
echo $scores['Sains'];
?>

<?php
// Loop
for ($i=1;$i<=10;$i++) {
    echo $i;
}
?>

<?php
// Loop While
// Ketika sebuah kondisi ditentukan, code dalam loop akan dijalankan berulang kali selama nilainya adalah true. 
//Berbeda dari loop for, code untuk yang menaikkan variable, $i++;, harus ditulis dalam loop.
$i=2;
while ($i<=10) {
    echo $i;
    $i+=2; //Genap
} // bisa juga menggunakan break ketika kondisinya '>', pe
?>

<?php
// Break
for ($i=1;$i<=10;$i++) {
    if ($i>5) {
        break;
    }
    echo $i."\n";
}
?>

<?php
// Continue
// Ketika statement break mengeluarkan kita dari loop, statement continue hanya melewatkan iterasi saat ini tetapi tetap melanjutkan loop. 
// Statement continue juga bisa digunakan dalam statement iteratif seperti for, while,foreach, dll.
for ($i=1;$i<=10;$i++) {
    if ($i % 3 == 0) {
      continue; // Kelipatan 3 dihiraukan, lalu lanjut.
    }
    echo $i;
}
?>

<?php
// Loop Foreach
// Dalam loop foreach, nilai array secara berurutan ditetapkan ke variable kunci ($key) dan variable nilai ($value), lalu code dalam loop akan berulang kali dijalankan. 
//Nomor index (untuk array dengan index) atau kunci (untuk array associative) diberikan ke variable kunci.
$scores = array('Matematika' => 70, 
'Bahasa' => 90, 
'Sains' => 80);
foreach($scores as $key => $value) {
    echo $key.':'.$value.' ';
}
?>

<?php
// Function
// adalah bagian code yang dirancang untuk menyelesaikan tugas tertentu dan mereturn hasil.
// Beberapa function umum dan berguna sudah tertanam di PHP; function ini disebut built-in function.
echo strlen('Aka')."\n"; // Menghitung jumlah string
$city = array('Tokyo', 'Jakarta');
echo count($city)."\n"; // Menghitung jumlay data dalam array
echo rand(1, 5)."\n"; // Menghasilkan angka acak 1-5
?>

<?php
// Membuat function
function hello() {
    echo 'Hello world!'."\n";
}
hello();
function printRectangleArea($height, $width) {
    echo $height * $width;
}
echo 'Hasilnya ', printRectangleArea(5, 10);
?>

<?php
// Return
// Function dapat mengembalikan nilai dengan menggunakan perintah return.
// https://chatgpt.com/c/a4800b45-a09d-4888-96e7-4c40a07a0801
// Perbedaan antara menggunakan echo & return
function CircleArea($radius) {
    return $radius * $radius * 3 ."\n";
}
$circleArea = CircleArea(5);
echo $circleArea;
?>

<?php
// Penggunaan Return yang mengembalikan nilai
// Fungsi untuk menghitung area persegi panjang
function getRectangleArea($height, $width) {
    return $height * $width;
}

// Fungsi untuk menghitung area lingkaran
function getCircleArea($radius) {
    return $radius * $radius * 3.14; // Menggunakan nilai pi ~ 3.14
}

// Menghitung area dari dua persegi panjang
$rectangle1Area = getRectangleArea(5, 10);
$rectangle2Area = getRectangleArea(7, 8);

// Menghitung area dari dua lingkaran
$circle1Area = getCircleArea(5);
$circle2Area = getCircleArea(7);

// Menghitung total area
$totalArea = $rectangle1Area + $rectangle2Area + $circle1Area + $circle2Area;

// Menentukan apakah total area lebih besar dari nilai tertentu
$threshold = 300;
if ($totalArea > $threshold) {
    echo "Total area ($totalArea) is greater than $threshold.\n";
} else {
    echo "Total area ($totalArea) is less than or equal to $threshold.\n";
}
?>

<?php
?>

<?php
?>

<?php
?>

<?php
?>

<?php
?>

<?php
?>

<?php
?>

<?php
?>

<?php
?>

<?php
?>

<?php
?>

<?php
?>

<?php
?>

<?php
?>