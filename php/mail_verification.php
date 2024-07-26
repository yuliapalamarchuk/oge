<?php
use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require '../../vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Recipients
    $mail->CharSet = "utf-8";
    $mail->setFrom('webmaster@ogena5.ru','OGE5',0);
    $mail->addAddress($_GET["email"]);     //Add a recipient     

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Добро пожаловать на ОГЭ на 5!';
    $mail->Body    = '
                <html>
                <head>
                <title>Подтвердите Email</title>
                </head>
                <body>
                <p>Чтобы подтвердить Email, перейдите по <a href="https://oge5.isp.sprint.1t.ru/confirme.php?hash=' . $hash . '">ссылке</a></p>
                </body>
                </html>
                ';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    // echo 'success';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}