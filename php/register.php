<?php
require_once __DIR__.'/boot.php';
$_GET=json_decode(file_get_contents('php://input'),true);
$surname=$_GET["surname"];
$name=$_GET["name"];
$email=$_GET["email"];
$pass=$_GET["pass"];
// Проверяем наличие пользователя с указанным именем
$stmt = pdo()->prepare("SELECT * FROM `user` WHERE `email` = :email");
$stmt->execute(['email' => $email]);

if ($stmt->rowCount() > 0) {
    http_response_code(402);
    echo json_encode([
        'status' => 'duplicate',
        'message' => 'Такой пользователь уже существует!',
        'data' => [
            'email' => $email,
        ]
    ]);
}
 //Если его нет, вносим в бд
else {
    $password = password_hash($pass, PASSWORD_DEFAULT);
    $role = json_encode(["ROLE_USER"]);
    $hash = md5($email . time());
    $request = pdo()->prepare("INSERT INTO `user` (`surname`, `name`, `email`, `password`, `roles`, `hash`, `verified`) VALUES 
    (:surname, :name, :email, :password, :roles, :hash, :verified)");
    $request->execute([
        'surname' => $surname,
        'name' => $name,
        'email' => $email,
        'password' => $password,
        'roles' => $role,
        'hash' => $hash,
        'verified' => 0
    ]);

    require __DIR__ . '/mail_verification.php';    
    
    $request2 = pdo()->prepare("SELECT `id` FROM `user` WHERE `email`=:email");
    $request2->execute([
        'email' => $email
    ]);
    $row = $request2->fetch(PDO::FETCH_ASSOC);
    $_SESSION['user_id'] = $row['id'];
    // setcookie("userid", $row['id'], time() + 3600*4);
    $response = [
        'status' => 'success',
        'message' => 'Авторизация выполнена успешно!',
        'data' => [
            'id' => $row['id'],
        ]
    ];
    echo json_encode($response);
}

// flash('Пароль неверен');
// header('Location: login.php');
