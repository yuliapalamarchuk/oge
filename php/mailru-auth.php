<?php
require_once __DIR__.'/boot.php';
if(!empty($_SESSION['user_id'])) {
    // setcookie('userID', $_SESSION['user_id']);
    header('Location: https://oge5to5.ru/profile.php');
    exit;
}
else {
// require '/var/www/club_vrar/data/www/oge5.isp.sprint.1t.ru/vendor/autoload.php';

// $provider = new Jokerov\OAuth2\Client\Provider\Mailru([
//     'clientId'     => '789633',
//     'clientSecret' => '50fd719b73510ff664f9f917031ec816',
//     'redirectUri'  => 'https://oge5.isp.sprint.1t.ru/php/mailru-auth.php',
// ]);

    $client_id = '789633'; // ID
    $client_secret = '50fd719b73510ff664f9f917031ec816'; // Секретный ключ

    $redirect_uri = 'https://oge5to5.ru/php/mailru-auth.php'; // Ссылка на приложение

// $url = 'https://connect.mail.ru/oauth/authorize'; 

// $url = 'https://oauth.mail.ru/login';

// $params = array( 'client_id' => $client_id, 'response_type' => 'code', 'redirect_uri' => $redirect_uri); 

// echo $link = '<p><a href="' . $url . '?' . urldecode(http_build_query($params)) . '">Аутентификация через Mail.ru</a></p>'; 

    if (isset($_GET['code']))
    {
        // echo $_GET['code'];
        $result = true;
        $params = array( 'client_id' => $client_id, 'client_secret' => $client_secret, 'grant_type' => 'authorization_code', 'code' => $_GET['code'], 'redirect_uri' => $redirect_uri );
        $url = 'https://connect.mail.ru/oauth/token';
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, urldecode(http_build_query($params)));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        $result = curl_exec($curl);
        curl_close($curl);
        $tokenInfo = json_decode($result, true);
        // var_dump($tokenInfo);
        if (isset($tokenInfo['access_token']))
        {
            $uid=$tokenInfo['x_mailru_vid'];
            $token=$tokenInfo['access_token'];
            if ($result) {
                // проверяем ест ли такой mailruid в бд
                $request = pdo()->prepare("SELECT `id` FROM `user` WHERE `mailru_id`=:mailru_id");
                $request->execute([
                    'mailru_id' => $uid
                ]);
                $row = $request->fetch(PDO::FETCH_ASSOC);
                if($row){
                    $_SESSION['user_id'] = $row['id'];
                    header('Location: https://oge5to5.ru/profile.php');
                }
                else {
                    $role = json_encode(["ROLE_USER"]);
                    $request2 = pdo()->prepare("INSERT INTO `user` (`roles`, `mailru_id`, `token`)
            VALUES (:roles, :mailru_id, :token)");
                    $request2->execute([
                        'roles' => $role,
                        'mailru_id' => $uid,
                        'token' => $token
                    ]);
                    $request3 = pdo()->prepare("SELECT `id` FROM `user` WHERE `mailru_id`=:mailru_id");
                    $request3->execute([
                        'mailru_id' => $uid
                    ]);
                    $row3 = $request3->fetch(PDO::FETCH_ASSOC);
                    $_SESSION['user_id'] = $row3['id'];
                    header('Location: https://oge5to5.ru/profile.php');
                }
                // echo $uid;
                // echo ';';
                // $token=$tokenInfo['access_token'];

                // $request_params = Array(
                // 	'app_id'	=>	$client_id,
                // 	'method'	=>	'users.getInfo',
                // 	'secure'	=>	1,
                // 	'session_key'	=>	$token
                // );

                // //Параметры обязательно должны быть отсортированы в алфавитном порядке
                // ksort($request_params);
                // $params = '';
                // foreach ($request_params as $key => $value) {
                // 	$params .= "$key=$value";
                // }

                // $sig = md5("app_id={$client_id}method=users.getInfosecure=1session_key={$token}{$client_secret}");
                // $url_params = [
                //      'method' => 'users.getInfo', 'app_id' => $client_id, 'session_key' => $token, 'sig' => $sig
                // ];

                // //Формируем запрос'secure' => '1',
                // $url='http://appsmail.ru/platform/api';
                // // echo $url;
                // $curl = curl_init();
                // curl_setopt($curl, CURLOPT_URL, $url);
                // curl_setopt($curl, CURLOPT_POST, 1);
                // curl_setopt($curl, CURLOPT_POSTFIELDS, urldecode(http_build_query($url_params)));
                // curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                // curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
                // $result = curl_exec($curl);
                // curl_close($curl);
                // $userInfo = json_decode($result, true);
                // // $userInfo = file_get_contents($url);

                // var_dump($userInfo);
            }
        }}}