<?php
require_once __DIR__ . '/boot.php';
$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
if(!$userid){
    echo json_encode("error.no_id");
    die;
}
else {
// $search = $_GET['search'];
$arr = [];

    $result = pdo()->prepare("SELECT `id`,`text1`,`text2`,`picture`, `answer`, `serialnumber` FROM `test` 
     WHERE `active`=:active 
     ORDER BY `serialnumber`");
    $result->execute([
        'active' => '1',
    ]);

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $arr[] = [
            'text1' => $row['text1'],
            'text2' => $row['text2'],            
            'picture' => $row['picture'],
            'answer' => $row['answer'],
            'serialnumber' => $row['serialnumber'],
            'id' => $row['id']
        ];
    }

echo json_encode($arr);
}