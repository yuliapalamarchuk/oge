<?php
require_once __DIR__.'/boot.php';
// session_start();
$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
if(!$userid){
    echo "Для просмотра этой страницы необходимо авторизоваться.";
    die;
}
else {

// echo json_encode($email);
// Проверяем наличие пользователя с указанным именем
$stmt = pdo()->prepare("SELECT t.serialnumber, r.result, r.data FROM `test` as t, `resultest` as r 
WHERE r.user_id = :user_id and t.id=r.test_id ORDER BY r.data, t.serialnumber");
$stmt->execute(['user_id' => $userid]);
if (!$stmt->rowCount()) {
    echo json_encode('empty');
}
else {
    $arr = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $arr[] = [
            'serialnumber' => $row['serialnumber'],
            'result' => $row['result'],
            'data' => $row['data'],
        ];
    }
    echo json_encode($arr);
}
}
// flash('Пароль неверен');
// header('Location: login.php');
