<?php
require_once __DIR__ . '/boot.php';
// $_GET = json_decode(file_get_contents('php://input'), true);
$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
$id = $_GET['id'];
// echo $id;
// echo json_encode $_GET['search'];
$arr = [];

    $result = pdo()->prepare("SELECT `name`, `url`, `likes`, `description`, `conspect`, 
   IF ((SELECT id FROM favorite WHERE user_id=:user_id AND video_id_id=:video_id), 1, 0) as favorite
    FROM `video` 
     WHERE `id`=:id");
    $result->execute([
        'user_id' => $userid,
        'video_id' => $id,
        'id' => $id,
    ]);

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $arr[] = [
            'name' => $row['name'],
            'url' => $row['url'],
            'likes' => $row['likes'],
            'description' => $row['description'],
            'conspect' => $row['conspect'],
            'favorite' => $row['favorite'],
        ];
    }
    $result2 = pdo()->prepare("SELECT `id`, `serialnumber`, `text1`, `picture`, `text2`, `answer` FROM `question` 
    WHERE `video_id`=:id and `active`=:active order by `serialnumber`");
    $result2->execute([
       'id' => $id,
       'active' => 1,
   ]);

   while ($row2 = $result2->fetch(PDO::FETCH_ASSOC)) {
    $arr2[] = [
                'id' => $row2['id'],
                'serialnumber' => $row2['serialnumber'],
                'text1' => $row2['text1'],
                'picture' => $row2['picture'],
                'text2' => $row2['text2'],
                'answer' => $row2['answer'],
    ];
}
$arr[] = ['questions' => array($arr2)];
echo json_encode($arr);