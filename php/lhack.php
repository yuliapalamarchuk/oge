<?php
require_once __DIR__ . '/boot.php';

$arr = [];

    $result = pdo()->prepare("SELECT `id`,`title`,`url1`,`url2`,`url3`,`preview`,`text1`,`text2` FROM `lhack` 
     WHERE `active`=:active
     ORDER BY `id` ");
    $result->execute([
        'active' => 1,
    ]);

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $arr[] = [
            'title' => $row['title'],
            'url1' => $row['url1'],            
            'url2' => $row['url2'],
            'url3' => $row['url3'],
            'preview' => $row['preview'],
            'text1' => $row['text1'],
            'text2' => $row['text2']
        ];
    }

echo json_encode($arr);