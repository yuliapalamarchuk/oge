<?php
require_once __DIR__ . '/boot.php';
// $_GET = json_decode(file_get_contents('php://input'), true);
$search = $_GET['search'];
// echo json_encode($search);
// $arr = [];

    $result = pdo()->prepare("SELECT `id`,`name` FROM `video` 
     WHERE `name` LIKE :search1 or `description` LIKE :search2 or `conspect` LIKE :search3
     ORDER BY `name` ");
    $result->execute([
        'search1' => '%'.$search.'%',
        'search2' => '%'.$search.'%',
        'search3' => '%'.$search.'%',
    ]);

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $arr[] = [
            'id' => $row["id"],
            'name' => $row["name"]
        ];
    }

echo json_encode($arr);