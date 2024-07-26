<?php
require_once __DIR__.'/boot.php';
$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
$_GET=json_decode(file_get_contents('php://input'),true);
// $email=$_GET["email"];
$current_password=$_GET["currentPass"];
$new_password=$_GET["newPass"];

// Проверяем наличие пользователя с указанным id
$stmt = pdo()->prepare("SELECT `password` FROM `user` WHERE `id` = :id");
$stmt->execute(['id' => $userid]);
if (!$stmt->rowCount()) {
    echo json_encode('empty');
}
else {
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if (password_verify($current_password, $user['password'])) {
            $password = password_hash($new_password, PASSWORD_DEFAULT);
            $request = pdo()->prepare("UPDATE `user` SET `password`=:password WHERE `id`=:id");
            $request->execute([
                'id' => $userid,
                'password' => $password,
            ]);
            echo json_encode('success');
    }
    else {
         echo json_encode('error.wrong_password');
    }
}

// flash('Пароль неверен');
// header('Location: login.php');
