<?php
require_once __DIR__.'/boot.php';

$_GET=json_decode(file_get_contents('php://input'),true);

$likes=$_GET["likes"];
$video_id=$_GET["video_id"];

    $request = pdo()->prepare("UPDATE `video` SET `likes`=:likes WHERE `id`=:id");
    $request->execute([
                'likes' => $likes,
                'id' => $video_id,
            ]);
            echo json_encode('success');
   

// flash('Пароль неверен');
// header('Location: login.php');
