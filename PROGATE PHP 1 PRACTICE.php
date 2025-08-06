<?php
$money = 20;
$price = 10;
$taxRate = 0.08;
echo 'Nilai $money: '.$money."\n";
echo 'Nilai $price: '.$price."\n";
echo 'Nilai $taxRate: '.$taxRate."\n";
echo '-----'."\n";

// Ketik code Anda dibawah
function hitung($price, $taxRate) {
    return $price + $price * $taxRate;
}

$hasil1 = hitung($price, $taxRate);
if ($money > $hasil1) {
    echo 'Anda dapat membeli item ini';
} else if ($money == $hasil1) {
    echo 'Anda dapat membeli item ini, tetapi uang Anda akan habis';
} else if ($money < $hasil1) {
    echo 'Anda tidak dapat membeli item ini';
} else {
    echo 'Anda belum memasukkan uang';
}

?>

<?php
echo "\n";
for ($i=1;$i<=20;$i++) {
    if ($i % 5 == 0 && $i % 3 == 0) {
        echo 'FizzBuzz'."\n";
    } else if ($i % 5 == 0) {
        echo 'Buzz'."\n";
    } else if ($i % 3 == 0) {
        echo 'Fizz'."\n";
    } else { 
    echo $i."\n";
    }
}
?>

<?php
$prices = array(10, 6, 7, 8);
echo 'Nilai $prices: ';
foreach ($prices as $price) {
    echo $price.' ';
}
echo "\n";
echo '-----';
echo "\n";

// Ketik code Anda dibawah
$total = 0;
foreach ($prices as $price) {
    $total += $price;
}
echo 'Harga total adalah $'.$total;
echo "\n";
$max_price = max($prices);
$min_price = min($prices);
echo "Harga termahal adalah $" . $max_price;
echo "\n";
echo "Harga termurah adalah $" . $min_price;

?>

<?php
echo "\n";
$menu = array('name' => 'GULAI', 'price' => 9);
echo 'Nilai $menu: ';
// var_export adalah function untuk melihat isi variable
var_export($menu);
echo "\n";
echo '-----';
echo "\n";

// Ketik code Anda dibawah
echo $menu['name'].' berharga $'.$menu['price'];

?>

<?php
echo "\n";
$menus = array(
    array('name' => 'GULAI', 'price' => 9),
    array('name' => 'PASTA', 'price' => 12),
    array('name' => 'KOPI', 'price' => 6)
);

// Ketik code Anda dibawah
$totalPrice = 0;
$maxPrice = 0; // Variable untuk harga termahal
$maxPriceMenuName = ''; // Variable untuk menyimpan harga item termahal
foreach ($menus as $menu) {
    $name = $menu['name'];
    $price = $menu['price'];
    echo $name.' berharga $'.$price;
    echo "\n";
    $totalPrice += $price;
    // Ketika lebih besar dari nilai yang disimpan di $maxPrice
    if ($price > $maxPrice) {
        // Perbarui $maxPrice dengan nilai tertinggi
        $maxPrice = $price;
        // Perbarui $maxPriceMenuName dengan nama item termahal yang baru
        $maxPriceMenuName = $name;
    }
}
echo 'Harga total adalah $'.$totalPrice;
echo "\n";
echo 'Harga item termahal adalah'.$maxPriceMenuName.' dengan harga $'.$maxPrice;

?>