<?php
require_once __DIR__.'/boot.php';
$_POST=json_decode(file_get_contents('php://input'),true);
$name=$_POST["name"];
// echo json_encode($name);
$email=$_POST["email"];
$who=$_POST["who"];
$lifehack=$_POST["lifehack"];

    $request = pdo()->prepare("INSERT INTO `lifehack` (`text1`, `fio`, `email`, `active`, `role`) VALUES 
    (:text1, :fio, :email, :active, :role)");
    $request->execute([
        'text1' => $lifehack,
        'fio' => $name,
        'email' => $email,
        'active' => '0',
        'role' => $who
    ]);
    echo json_encode('success');

