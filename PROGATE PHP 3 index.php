<?php require_once('PROGATE PHP 3 data.php') ?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Café Progate</title>
    <link rel="stylesheet" type="text/css" href="PROGATE PHP 3 stylesheet.css">
    <link href='https://fonts.googleapis.com/css?family=Pacifico|Lato' rel='stylesheet' type='text/css'>
</head>
<body>
    <div class="menu-wrapper container">
        <h1 class="logo">Café Progate</h1>
        <div class="menu-items">
        <?php foreach ($menus as $menu): ?>
            <div class="menu-item">
            <!-- Cetak property image milik $menu -->
            <img src="<?php echo $menu->image ?>">
            <h3 class="menu-item-name"><?php echo $menu->name ?></h3>
            <!-- Cetak property price milik $menu -->
            <p class="price">$<?php echo $menu->price ?></p>
            </div>
        <?php endforeach ?>
        </div>
    </div>
</body>
</html>
    <!-- CARA RUN FILE INI -->
    <!-- ketik di terminal "php -S localhost:8000" -->
    <!-- lalu buka browser dan ketik "http://localhost:8000/PROGATE/PROGATE%20PHP%203%20index.php" -->