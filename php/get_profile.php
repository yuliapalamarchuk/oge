<?php
require_once __DIR__.'/boot.php';
// session_start();
$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
if(!$userid){
    echo json_encode("error.no_id");
    die;
}
else {
    $request = pdo()->prepare("SELECT `surname`, `name`, `email`, `city`, `phone`, `school` 
    FROM `user` WHERE `id`=:id");
    $request->execute([
        'id' => $userid
    ]);
    $row = $request->fetch(PDO::FETCH_ASSOC);
    $arr = [];
    $arr[] = [
        'surname' => $row['surname'],
        'name' => $row['name'],
        'email' => $row['email'],
        'city' => $row['city'],
        'phone' => $row['phone'],
        'school' => $row['school'],
    ];
    echo json_encode($arr);
}

// flash('Пароль неверен');
// header('Location: login.php');
