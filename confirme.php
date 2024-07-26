<?php
// Подключаем коннект к БД
require_once '/var/www/club_vrar/data/www/oge5.isp.sprint.1t.ru/public/php/boot.php';
 
// Проверка есть ли хеш
if ($_GET['hash']) {
    $hash = $_GET['hash'];
    // Получаем id и подтверждено ли Email

    $result = pdo()->prepare("SELECT `id`, `verified` FROM `user` WHERE `hash`=:hash");
    $result->execute([
        'hash' => $hash
    ]);
    if ($result) {
        while( $row = $result->fetch(PDO::FETCH_ASSOC) ) { 
            // echo $row['id'] . " " . $row['verified'];
            // Проверяет получаем ли id и Email подтверждён ли 
            if ($row['verified'] == 0) {
                // Если всё верно, то делаем подтверждение
                $result2 = pdo()->prepare("UPDATE `user` SET `verified`=:verified WHERE `id`=:id");
                $result2->execute([
                    'verified' => 1,
                    'id' => $row['id']
                ]);
                echo "Email подтверждён.";
            } else {
                echo "Что-то пошло не так";
            }
        } 
    } else {
        echo "Что-то пошло не так";
    }
} else {
    echo "Что-то пошло не так";
}