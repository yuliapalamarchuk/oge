<?php
require_once __DIR__.'/boot.php';

$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
if(!$userid){
    echo "Для просмотра этой страницы необходимо авторизоваться.";
    die;
}
else {
    $stmt = pdo()->prepare("SELECT t.serialnumber as task_serialnumber, t.name as task_name, v.name as video_name, 
    v.id as video_id, q.serialnumber as question_serialnumber, rq.result 
    FROM tasks t
    LEFT JOIN video v ON v.task_id = t.id
    LEFT JOIN question q ON q.video_id = v.id AND q.active = 1
    LEFT JOIN resultquestion rq ON rq.user_id = :user_id AND rq.question_id = q.id
    WHERE t.active = 1
    ORDER BY t.serialnumber, t.name, v.name, q.serialnumber");
    $stmt->execute(['user_id' => $userid]);
    if (!$stmt->rowCount()) {
        echo json_encode('empty');
    }
    else {
        $arr = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $arr[] = [
                'task_serialnumber' => $row['task_serialnumber'],
                'task_name' => $row['task_name'],
                'video_id' => $row['video_id'],
                'video_name' => $row['video_name'],
                'question_serialnumber' => $row['question_serialnumber'],    
                'result' => $row['result'],
            ];
        }
        echo json_encode($arr);
    }
}
// flash('Пароль неверен');
// header('Location: login.php');
