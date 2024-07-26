<?php
require_once __DIR__.'/boot.php';

$arr2 = [];
        $stmt2 = pdo()->prepare("SELECT tasks.name as task, video.name as video, question.serialnumber as serialnumber, question.id as question_id FROM video, question, tasks 
        WHERE question.video_id=video.id and video.task_id=tasks.id and question.active=1 and tasks.active=1 order by task, video, serialnumber");
        while ($row2 = $stmt2->fetch(PDO::FETCH_ASSOC)) {
            $arr2[] = [
                'task' => $row2['task'],
                'video' => $row2['video'],
                'serialnumber' => $row2['serialnumber'],
                'result' => $row2['id'],            
            ];
        }
        echo json_encode($arr2);
?>