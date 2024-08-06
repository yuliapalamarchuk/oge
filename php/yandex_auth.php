<?php
require_once __DIR__.'/boot.php';
$params = array(
	'client_id'     => '85633fa4277643ceaf4bfd7bbdeb1d56',
	'redirect_uri'  => 'https://oge5to5.ru/php/yandex_auth.php',
	'response_type' => 'code',
	'state'         => '123'
);
 
$url = 'https://oauth.yandex.ru/authorize?' . urldecode(http_build_query($params));

if(!empty($_SESSION['user_id'])) {
    setcookie('userID', $_SESSION['user_id']);
    header('Location: https://oge5to5.ru/profile.php');
    exit;
} else {
    echo $url;
}

$state = $_GET['state']; // 123
 
if (!empty($_GET['code'])) {
	// Отправляем код для получения токена (POST-запрос).
	$params = array(
		'grant_type'    => 'authorization_code',
		'code'          => $_GET['code'],
		'client_id'     => '85633fa4277643ceaf4bfd7bbdeb1d56',
		'client_secret' => '67a970e256c7406b9ef94af4755ce7a8',
	);
	
	$ch = curl_init('https://oauth.yandex.ru/token');
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $params); 
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_HEADER, false);
	$data = curl_exec($ch);
	curl_close($ch);	
			 
	$data = json_decode($data, true);
	if (!empty($data['access_token'])) {
		// Токен получили, получаем данные пользователя.
		$ch = curl_init('https://login.yandex.ru/info');
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, array('format' => 'json')); 
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: OAuth ' . $data['access_token']));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_HEADER, false);
		$info = curl_exec($ch);
		curl_close($ch);
 
		$info = json_decode($info, true);
        // 		print_r($info);
		
		$request = pdo()->prepare("SELECT `id` FROM `user` WHERE `email`=:email");
        $request->execute([
            'email' => $info['default_email']
        ]);
        $row = $request->fetch(PDO::FETCH_ASSOC);
        if($row){
            $_SESSION['user_id'] = $row['id'];
            // setcookie('userID', $row['id']);
            header('Location: https://oge5to5.ru/profile.php');
        }
        else {
            $role = json_encode(["ROLE_USER"]);
            $request2 = pdo()->prepare("INSERT INTO `user` (`surname`, `name`, `roles`, `email`, `token`)
            VALUES (:surname, :name, :roles, :email, :token)");
            $request2->execute([
                'surname' => $info['last_name'],
                'name' => $info['first_name'],
                'roles' => $role,
                'email' => $info['default_email'],
                'token' => $token['access_token']
            ]); 
            $request3 = pdo()->prepare("SELECT `id` FROM `user` WHERE `email`=:email");
            $request3->execute([
                'email' => $info['default_email']
            ]);
            $row3 = $request3->fetch(PDO::FETCH_ASSOC);
             $_SESSION['user_id'] = $row3['id'];
            //  setcookie('userID', $row3['id']);
             header('Location: https://oge5to5.ru/profile.php');
        }
	}
}