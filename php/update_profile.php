<?php
require_once __DIR__.'/boot.php';
// session_start();
$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
// echo $userid;
if(!$userid){
    echo json_encode("error.no_id");
    die;
}
else {
    $_GET=json_decode(file_get_contents('php://input'),true);
    $surname=$_GET["surname"];
    $name=$_GET["name"];
    $email=$_GET["email"];
    $city=$_GET["city"];
    $phone=$_GET["phone"];
    $school=$_GET["school"];
    // echo $surname;
    // echo $name;
    // echo $email;
    // echo $city;
    // echo $phone;
    // echo $school;
    $request = pdo()->prepare("UPDATE `user` SET 
    `surname`=:surname, 
    `name`=:name, 
    `email`=:email, 
    `city`=:city, 
    `phone`=:phone, 
    `school`=:school
    WHERE `id`=:id");
    $request->execute([
        'surname' => $surname,
        'name' => $name,
        'email' => $email,
        'city' => $city,
        'phone' => $phone,
        'school' => $school,
        'id' => $userid
    ]);
    
    echo json_encode('success');
}

// flash('Пароль неверен');
// header('Location: login.php');
