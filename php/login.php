<?php
// session_start();
require_once __DIR__.'/boot.php';
// $_GET=json_decode(file_get_contents('php://input'),true);
$email=$_GET["email"];
$pass=$_GET["pass"];
// echo json_encode($email);
// Проверяем наличие пользователя с указанным именем
$stmt = pdo()->prepare("SELECT `id`, `roles`, `verified`, `name`, `password` FROM `user` 
WHERE `email` = :email");
$stmt->execute(['email' => $email]);
if (!$stmt->rowCount()) {
    echo json_encode('empty');
}
else {
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if($user['verified']==0) {
        $response = [
            'status' => 'error',
            'message' => 'Email не подтвержден!',
            'data' => [
                'id' => $user['id'],
            ]
        ];
        http_response_code(401);
        echo json_encode($response);
        die;
    }
    else {
        if (password_verify($pass, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            header('Content-Type: application/json');
            $response = [
                'status' => 'success',
                'message' => 'Авторизация выполнена успешно!',
                'data' => [
                    'id' => $user['id'],
                ]
            ];
            http_response_code(200);
            echo json_encode($response);
        }
    }
    
}

