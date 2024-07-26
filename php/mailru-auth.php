<?php
require_once __DIR__.'/boot.php';
$client_id = '789633'; // ID 
$client_secret = '50fd719b73510ff664f9f917031ec816'; // Секретный ключ 

$redirect_uri = 'https://oge5.isp.sprint.1t.ru/php/mailru-auth.php'; // Ссылка на приложение 

$url = 'https://connect.mail.ru/oauth/authorize'; 

$params = array( 'client_id' => $client_id, 'response_type' => 'code', 'redirect_uri' => $redirect_uri ); 

echo $link = '<p><a href="' . $url . '?' . urldecode(http_build_query($params)) . '">Аутентификация через Mail.ru</a></p>'; 
if(!empty($_SESSION['user_id'])) {
    setcookie('userID', $_SESSION['user_id']);
    header('Location: https://oge5.isp.sprint.1t.ru/profile.php');
    exit;
} else {
    echo $link =  $url . '?' . urldecode(http_build_query($params));
}
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
        
        $request_params = Array(
        	'app_id'	=>	$client_id,
        	'method'	=>	'users.getInfo',
        	'secure'	=>	1,
        	'session_key'	=>	$token
        );
       
        //Параметры обязательно должны быть отсортированы в алфавитном порядке
        ksort($request_params);
        $params = '';
        foreach ($request_params as $key => $value) {
        	$params .= "$key=$value";
        }
        //В модели сервер-сервер подпись выглядит так
        // $sig = md5("app_id={$client_id}method=users.getInfosecure=1session_key={$tokenInfo['access_token']}{$client_secret}"); 
        // $params = array( 'method' => 'users.getInfo', 'secure' => '1', 'app_id' => $client_id, 'session_key' => $tokenInfo['access_token'], 'sig' => $sign );
        // app_id=423004method=friends.getsecure=1session_key=be6ef89965d58e56dec21acb9b62bdaa3dad9cbf9baaa0360c0f2ba372d25716)
    
        // $sig = md5("app_id=" . $client_id . "method=users.getInfosecure=1session_key=" . $token . $client_secret);
         $sig = md5("app_id={$client_id}method=users.getInfosecure=1session_key={$tokenInfo['access_token']}{$client_secret}");
        echo $sig;
        $url_params = [
            'method' => 'users.getInfo',
            'app_id' => $client_id,
            'session_key' => $token,
            'sig' => $sig,
            'uids' => $uid,
            'secure' => '1'
        ];
        
        //Формируем запрос
        $url='http://www.appsmail.ru/platform/api' . '?' . urldecode(http_build_query($url_params));
        echo $url;
        $userInfo = file_get_contents($url);
        // $url = "http://www.appsmail.ru/platform/api?method=users.getInfo&app_id={$client_id}&session_key={$token}&sig={$sig}&uids={$uid}&secure=1";
        
        // $response = file_get_contents($url);
        var_dump($userInfo);
        // $info = (array) json_decode($response);
        // $info = $info[0];
        
        //весь результат
        // var_dump($info);

    } 
}

