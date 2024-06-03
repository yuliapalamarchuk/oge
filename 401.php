<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>401</title>
  <link rel='stylesheet' href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'>
  <link rel="stylesheet" href="css/mainpage.css">
  <link rel="stylesheet" href="css/401.css">
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

  <section class="page_401">
    <div class="bg_401">

      <div class="container">
        <div class="wrapper_401">
          <div class="img_wrapper">
            <img src="img/401.png" alt="401" class="img">
          </div>

          <div class="div_wrapper">
            <p class="text">Ой-ой-ой, кажется, ты наткнулся на
              закрытую дверь в драконьем логове! Чтобы
              продолжить, пожалуйста, войди или
              зарегистрируйся.</p>
            <div class="btn_wrapper">
              <button class="btn">
                Авторизоваться
              </button>
            </div>

          </div>

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