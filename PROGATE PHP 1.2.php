<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Progate</title>
    <link rel="stylesheet" type="text/css" href="PROGATE PHP 1.2.css">
</head>
<body>
    <div class="header">
        <div class="header-left">Progate</div>
        <div class="header-right">
        <ul>
            <li>Tentang Progate</li>
            <li>Pengerahan</li>
            <li class="selected">Kontak</li>
        </ul>
        </div>
    </div>
<!-- ---------------------------------------------------------------- -->
    <div class="main">
        <div class="contact-form">
                <!-- FORM -->
            <div class="form-title">Kontak</div>
                <!-- Tulis tag <form> dibawah -->
                <!-- Saat membuat formulir, mari menggunakan tag HTML <form>. Untuk attribute action, tentukan URL untuk meneruskan data. 
                Attribute method diberikan 'get' atau 'post' untuk mengirim nilai formulir.
                Saat menggunakan 'get', nilai yang akan dikirim ditampilkan di URL sedangkan saat menggunakan 'post', nilainnya akan disembunyikan dari URL. -->
                <form action="sent.php" method="post">
                    <div class="form-item">Nama</div>
                    <input type="text" name="name">

                    <div class="form-item">Pesan</div>
                    <textarea name="body"></textarea>


                    <!-- DROPDOWN -->
                    <div class="form-item">Umur</div>
                    <!-- Tulis tag <select> dibawah -->
                        <select name="age">
                            <option value="pilih">Pilih</option>
                            <option value="20-29">20-29</option>
                            <option value="30-39">30-39</option>
                            <!-- Konten yang dikirim menggunakan method POST akan diterima oleh halaman sent.php. -->
                        </select>
                        
                    <!-- LOOP DROPDOWN -->
                    <div class="form-item">Umur Advance</div>
                    <select name="ageAdvance">
                        <option value="pilih">Pilih</option>
                        <!-- Gunakan loop for untuk membuat umur antara 6 hingga 100 -->
                        <?php 
                        for ($i = 6; $i <= 100; $i++) {
                            echo "<option value='{$i}'>{$i}</option>";
                        } 
                        ?>
                    </select>

                    <!-- FOREACH -->
                    <div class="form-item">Kategori</div>
                        <?php 
                        $types = array('Tentang Progate', 'Komentar/Opini', 'Karier', 'Media', 'Pembayaran', 'Lainnya');
                        ?>
                        <select name="category">
                            <option value="pilih">Alasan menghubungi kami</option>
                            <?php
                                foreach ($types as $type) {
                                    echo "<option value='{$type}'>{$type}</option>";
                                }
                            ?>
                        </select>
                </form>


                <!-- MENERIMA DATA DARI FORMULIR -->
                <!-- Kita dapat menggunakan $_POST untuk menerima nilai yang kita kirimkan di formulir. 
                $_POST adalah array associative. 
                Oleh karena itu, kita bisa menerima nilai yang kita kirimkan dengan meletakkan attribute name dari <input> dan <textarea> dalam tanda kurung []. -->
                <input type="submit" value="Kirim">
                <!-- Konten yang dikirim menggunakan method POST akan diterima oleh halaman sent.php. -->
            </div>
    </div>
<!-- ---------------------------------------------------------------- -->
    <div class="footer">
        <div class="footer-left">
            <ul>
                <li>Tentang Progate</li>
                <li>Pengerahan</li>
                <li>Kontak</li>
            </ul>
        </div>
        <div class="like-box">
            <iframe src="https://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FProgate%2F742679992421539&amp;show_faces=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:300px;" allowTransparency="true"></iframe>
            </div>
        </div>
    </body>
    </html>
    <!-- CARA RUN FILE INI -->
    <!-- ketik di terminal "php -S localhost:8000" -->
    <!-- lalu buka browser dan ketik "http://localhost:8000/PROGATE/PROGATE%20PHP%201.2.php" -->