<?php
require_once __DIR__.'/boot.php';
session_start();
$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
if(!$userid){
    echo "Для просмотра этой страницы необходимо авторизоваться.";
    // die;
}
else {
$_POST=json_decode(file_get_contents('php://input'),true);
$results=$_POST["result"];
// echo json_encode($_POST);
foreach ($results as $result)
{
    $stmt = pdo()->prepare("INSERT INTO `resultest` (`user_id`, `test_id`, `result`) VALUES
    (:user_id, :test_id, :result) ");
    $stmt->execute([
        'user_id' => $userid,
        'test_id' => $result['id'],
        'result' => $result['answer'],
        ]);
}
echo json_encode('success');
}

// flash('Пароль неверен');
// header('Location: login.php');
