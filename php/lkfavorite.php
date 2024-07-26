<?php
require_once __DIR__.'/boot.php';

$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
if(!$userid){
    echo "Для просмотра этой страницы необходимо авторизоваться.";
    die;
}
else {
    $stmt = pdo()->prepare("SELECT video.name as name, video.url as url, video.id as id FROM video, favorite 
    WHERE favorite.user_id = :user_id and video.id=favorite.video_id_id order by name");
    $stmt->execute(['user_id' => $userid]);
    if (!$stmt->rowCount()) {
        echo json_encode('empty');
    }
    else {
        $arr = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $arr[] = [
                'name' => $row['name'],
                'url' => $row['url'],
                'id' => $row['id'],
            ];
        }
        echo json_encode($arr);
    }
}
// flash('Пароль неверен');
// header('Location: login.php');
