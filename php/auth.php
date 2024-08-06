<?php
// session_start();
require_once __DIR__.'/boot.php';
$client_id = 51940504; // ID приложения
$client_secret = 'B4X6qzrmsmCol7v8diGa'; // Защищённый ключ
$redirect_uri = 'https://oge5to5.ru/php/auth.php'; // Адрес сайта

$url = 'http://oauth.vk.com/authorize'; // Ссылка для авторизации на стороне ВК

$params = [ 'client_id' => $client_id, 'redirect_uri'  => $redirect_uri, 'response_type' => 'code', 'scope' => 'email']; // Массив данных, который нужно передать для ВК содержит ИД приложения код, ссылку для редиректа и запрос code для дальнейшей авторизации токеном

if(!empty($_SESSION['user_id'])) {
    setcookie('userID', $_SESSION['user_id']);
    header('Location: https://oge5to5.ru/profile.php');
    exit;
} else {
    // $link=$url . '?' . urldecode(http_build_query($params)) . '&scope=email';
    // echo $link;
    echo $link =  $url . '?' . urldecode(http_build_query($params));
}

if (isset($_GET['code'])) {
    $result = true;
    $params = [
        'client_id' => $client_id,
        'client_secret' => $client_secret,
        'code' => $_GET['code'],
        'redirect_uri' => $redirect_uri
    ];

    $token = json_decode(file_get_contents('https://oauth.vk.com/access_token' . '?' . urldecode(http_build_query($params))), true);

    if (isset($token['access_token'])) {
        $params = [
            'uids' => $token['user_id'],
            'fields' => 'uid,first_name,last_name,screen_name,sex,bdate,photo_big,email,city',
            'access_token' => $token['access_token'],
            'v' => '5.101'];

        $userInfo = json_decode(file_get_contents('https://api.vk.com/method/users.get' . '?' . urldecode(http_build_query($params))), true);
        if (isset($userInfo['response'][0]['id'])) {
            $userInfo = $userInfo['response'][0];
            $result = true;
        }
    }

    if ($result) {
        // проверяем ест ли такой вкid в бд
        $request = pdo()->prepare("SELECT `id` FROM `user` WHERE `vk_id`=:vk_id");
        $request->execute([
            'vk_id' => $userInfo['id']
        ]);
        $row = $request->fetch(PDO::FETCH_ASSOC);
        if($row){
            $_SESSION['user_id'] = $row['id'];
            setcookie('userID', $row['id']);
            header('Location: https://oge5to5.ru/profile.php');
        }
        else {
            $role = json_encode(["ROLE_USER"]);
            $request2 = pdo()->prepare("INSERT INTO `user` (`surname`, `name`, `roles`, `vk_id`, `token`)
            VALUES (:surname, :name, :roles, :vk_id, :token)");
            $request2->execute([
                'surname' => $userInfo['last_name'],
                'name' => $userInfo['first_name'],
                'roles' => $role,
                'vk_id' => $userInfo['id'],
                'token' => $token['access_token']
            ]); 
            $request3 = pdo()->prepare("SELECT `id` FROM `user` WHERE `vk_id`=:vk_id");
            $request3->execute([
                'vk_id' => $userInfo['id']
            ]);
            $row3 = $request3->fetch(PDO::FETCH_ASSOC);
             $_SESSION['user_id'] = $row3['id'];
             setcookie('userID', $row3['id']);
             header('Location: https://oge5to5.ru/profile.php');
        }
        // echo "ID пользователя: " . $userInfo['id'] . '<br />';
        // echo "Имя пользователя: " . $userInfo['first_name'] . '<br />';
        // echo "Фамилия пользователя: " . $userInfo['last_name'] . '<br />';
        // echo "Ссылка на профиль: " . $userInfo['screen_name'] . '<br />';
        // echo "Пол: " . $userInfo['sex'] . '<br />';
        // echo "День Рождения: " . $userInfo['bdate'] . '<br />';
        // echo "Email: " . $userInfo['email'] . '<br />';
        // echo "Город: " . $userInfo['city'] . '<br />';
        // echo '<img src="' . $userInfo['photo_big'] . '" />'; echo "<br />";

    }
}

