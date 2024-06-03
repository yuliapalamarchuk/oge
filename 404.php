<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404</title>
  <link rel='stylesheet' href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'>
  <link rel="stylesheet" href="css/mainpage.css">
  <link rel="stylesheet" href="css/404.css">
  <link rel="stylesheet" href="css/search.css">
</head>

<body>
  <!-- Модалка войти или зарегистрироваться -->
  <?php include_once 'system/auth-or-reg.php'; ?>

  <!-- Модалка регистрации, подтверждение регистрации -->

  <?php include_once 'system/reg.php'; ?>


  <!-- Модалка войти -->

  <?php include_once 'system/auth.php'; ?>

  <!-- Модалка забыли пароль -->

  <?php include_once 'system/forgot-password.php'; ?>


  <?php include_once 'system/header.php'; ?>

  <section class="page_404">
    <div class="container">
      <div class="wrapper">

        <div class="info-wrapper">

          <div class="title_wrapper">
            <h1 class="title">404</h1>
          </div>

          <div class="text-wrapper">
            <p class="text">Мы выслали за тобой спасательную
              бригаду драконов, они отведут тебя в
              безопасное
              место</p>
            <button class="btn" style="cursor: pointer;" onclick="location.href='mainpage.php'">
              Вернуться на главную
            </button>
          </div>

        </div>

        <div class="img-wrapper">
          <img src="./img/dragon_404.png" alt>
        </div>
      </div>

    </div>
  </section>

  <?php include_once 'system/footer.php'; ?>

  <script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="./js/burger-menu.js"></script>
  <script src="js/search.js"></script>
</body>

</html>