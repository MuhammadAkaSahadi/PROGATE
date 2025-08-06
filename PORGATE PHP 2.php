<?php
class Menu {
  // Deklarasikan property $name
    public $name;
    // Definisikan method hello
    public function hello() {
        echo 'Saya adalah instance dari class Menu'."\n";
        echo 'Saya adalah '.$this->name."\n"; 
        // $this hanya dapat digunakan di dalam definisi sebuah method di dalam class. 
        // Saat sebuah method dipanggil, $this digantikan oleh sebuah instance yang memanggil method.
    }
    public function __construct() {
        echo 'Sebuah instance telah diciptakan.'."\n";
        // Jika Anda mendefinisikan method spesial yang bernama __construct(), 
        // method ini akan dipanggil secara otomatis saat Anda membuat sebuah instance menggunakan new. 
        // Method jenis ini yang dipanggil saat instance baru dibuat disebut constructor.
    }
}

class Bakso {
    public $name;
    public function hai() {
        echo 'Saya suka '.$this->name;
    }
    public function __construct($name) {
        // Tetapkan $name ke property name
        $this->name=$name;
        
    }

}

$curry = new Menu(); // Constructor dipangil secara otomatis
$pasta = new Menu();
// Tetapkan 'GULAI' ke property name $curry
$curry->name = 'GULAI';
$pasta->name = 'PASTA';
// Cetak property name $curry
echo $curry->name;
echo "\n";
echo $pasta->name;
echo "\n";
$curry->hello();
$pasta->hello();

$bakso = new Bakso('BAKSO');
echo $bakso->name;
echo "\n";
$bakso->hai();

?>