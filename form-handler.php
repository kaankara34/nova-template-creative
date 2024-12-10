<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini alın
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $tel = htmlspecialchars(trim($_POST['tel']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Basit doğrulama
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Geçersiz bir e-posta adresi girdiniz.";
        exit;
    }

    // E-posta gönderme işlemi
    $to = "iletisim@nova.istanbul"; // Hangi adrese gönderileceği
    $subject = "Yeni İletişim Formu Mesajı";
    $body = "Ad Soyad: $name\nEmail: $email\nTelefon: $tel\nMesaj:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mesajınız başarıyla gönderildi.";
    } else {
        echo "Mesaj gönderilirken bir hata oluştu.";
    }
} else {
    echo "Form gönderimi başarısız.";
}
?>
