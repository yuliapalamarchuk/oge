<?php
require_once __DIR__.'/boot.php';
$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
$_POST=json_decode(file_get_contents('php://input'),true);
$video_id=$_POST["video_id"];
// echo json_encode($video_id);
if(!$userid){
    echo "Для просмотра этой страницы необходимо авторизоваться.";
    die;
}
else {
    $request1 = pdo()->prepare("SELECT id FROM `favorite` 
    WHERE `user_id`=:user_id AND `video_id_id`=:video_id");
    $request1->execute([
            'user_id' => $userid ,
            'video_id' => $video_id,
    ]);
    if ($request1->rowCount() > 0) {
        $row=$request1->fetch(PDO::FETCH_ASSOC);
        $request2 = pdo()->prepare("DELETE FROM `favorite` WHERE `id`=:id");
        $request2->execute([
            'id' => $row["id"] ,
        ]);
        
        echo json_encode('delete');
    }
    else {
        $request = pdo()->prepare("INSERT INTO `favorite` (`user_id`, `video_id_id`) VALUES 
            (:user_id, :video_id)");
        $request->execute([
                'user_id' => $userid ,
                'video_id' => $video_id,
        ]);
        
        echo json_encode('insert');
    }
}
