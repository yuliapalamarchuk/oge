<?php
require_once __DIR__ . '/boot.php';

// $search = $_GET['search'];
$arr = [];

    $result = pdo()->prepare("SELECT `title`, `text` FROM `rools` 
     WHERE `active`=:active");
    $result->execute([
        'active' => '1',
    ]);

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $arr[] = [
            'title' => $row['title'],
            'text' => $row['text']
        ];
    }

echo json_encode($arr);