<?php
require_once __DIR__.'/boot.php';
session_start();
$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
if(!$userid){
    echo json_encode("error.no_id");
    die;
}
else {
$_POST=json_decode(file_get_contents('php://input'),true);

$results=$_POST["result"];
// echo json_encode($results);
// $userid=5;
foreach ($results as $result)
{
    $check = pdo()->prepare("SELECT `user_id`, `question_id`, `result` FROM `resultquestion`
    WHERE `user_id`=:user_id AND `question_id` = :question_id");
    $check->execute([
        'user_id' => $userid,
        'question_id' => $result['id'],
        ]);
    $row = $check->fetch(PDO::FETCH_ASSOC);
    // echo json_encode($row);
    if($row){
        if($row['result'] != $result['answer'])
        {
            $stmt = pdo()->prepare("UPDATE `resultquestion` 
            SET `result` = :result 
            WHERE `user_id`=:user_id AND `question_id` = :question_id");
            $stmt->execute([
            'user_id' => $userid,
            'question_id' => $result['id'],
            'result' => $result['answer'],
            ]);
            echo json_encode('UPDATE');
        }
        else {
            echo json_encode('same');
        }            
    }
    else{
        $stmt = pdo()->prepare("INSERT INTO `resultquestion` (`user_id`, `question_id`, `result`) VALUES
        (:user_id, :question_id, :result) ");
        $stmt->execute([
        'user_id' => $userid,
        'question_id' => $result['id'],
        'result' => $result['answer'],
        ]);
        echo json_encode('INSERT');
    }
}
    
}
// echo json_encode('success');


// flash('Пароль неверен');
// header('Location: login.php');
