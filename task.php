<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="css/normalize.css">
      <link rel="stylesheet" href="./css/mainpage.css">
      <link rel="stylesheet" href="css/tasks.css">
      <link rel="stylesheet" href="css/task.css">
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

      <main>
            <section class="task">
                  <div class="container">
                        <a class="back" href="/mainpage.php">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62668 16.7066C4.43941 16.5191 4.33423 16.265 4.33423 16C4.33423 15.735 4.43941 15.4808 4.62668 15.2933L12.6267 7.29329C12.7182 7.19504 12.8286 7.11624 12.9513 7.06158C13.074 7.00693 13.2064 6.97754 13.3407 6.97517C13.4749 6.9728 13.6083 6.9975 13.7328 7.0478C13.8573 7.09809 13.9704 7.17295 14.0654 7.26791C14.1604 7.36287 14.2352 7.47598 14.2855 7.6005C14.3358 7.72501 14.3605 7.85839 14.3581 7.99265C14.3558 8.12693 14.3264 8.25935 14.2717 8.38201C14.2171 8.50468 14.1383 8.61508 14.04 8.70663L7.74668 15L26.6667 15C26.9319 15 27.1863 15.1053 27.3738 15.2929C27.5613 15.4804 27.6667 15.7347 27.6667 16C27.6667 16.2652 27.5613 16.5195 27.3738 16.7071C27.1863 16.8946 26.9319 17 26.6667 17H7.74668L14.04 23.2933C14.1383 23.3848 14.2171 23.4952 14.2717 23.6179C14.3264 23.7406 14.3558 23.873 14.3581 24.0073C14.3605 24.1415 14.3358 24.2749 14.2855 24.3994C14.2352 24.5239 14.1604 24.6371 14.0654 24.732C13.9704 24.827 13.8573 24.9018 13.7328 24.9521C13.6083 25.0024 13.4749 25.0271 13.3407 25.0247C13.2064 25.0224 13.074 24.993 12.9513 24.9383C12.8286 24.8837 12.7182 24.8049 12.6267 24.7066L4.62668 16.7066Z" fill="#5C0C70"></path>
                              </svg>
                              Вернуться назад
                        </a>

                        <div id="task" class="task__block"></div>

                        <div class="modal modal-task">
                              <div class="modal__overlay">
                                    <div class="modal__window">
                                          <div class="modal__content">
                                                <button class="modal__close btn-reset">
                                                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.11612 5.88388C6.35054 5.64946 6.71081 5.5601 7.11767 5.63544C7.52454 5.71079 7.94467 5.94467 8.28565 6.28565L33.9986 31.9986C34.3396 32.3396 34.5735 32.7597 34.6488 33.1666C34.7242 33.5735 34.6348 33.9337 34.4004 34.1682C34.166 34.4026 33.8057 34.4919 33.3988 34.4166C32.992 34.3413 32.5718 34.1074 32.2309 33.7664L6.51788 8.05342C6.17691 7.71244 5.94302 7.29231 5.86767 6.88544C5.79233 6.47858 5.8817 6.1183 6.11612 5.88388Z" fill="#5C0C70" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.1161 6.11612C34.3505 6.35054 34.4399 6.71081 34.3646 7.11767C34.2892 7.52454 34.0553 7.94467 33.7144 8.28565L8.00137 33.9986C7.6604 34.3396 7.24026 34.5735 6.8334 34.6488C6.42653 34.7242 6.06626 34.6348 5.83184 34.4004C5.59742 34.166 5.50805 33.8057 5.5834 33.3988C5.65874 32.992 5.89263 32.5718 6.23361 32.2309L31.9466 6.51788C32.2876 6.17691 32.7077 5.94302 33.1146 5.86767C33.5214 5.79233 33.8817 5.8817 34.1161 6.11612Z" fill="#5C0C70" />
                                                      </svg>

                                                </button>
                                                <p class="modal__text">Ответ принят!</p>
                                                <p class="modal__text">Итоги смотри в личном кабинете, раздел «Результаты».</p>
                                                <a class="modal__btn" href="/profile.php">Личный кабинет</a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      </main>

      <?php include_once 'system/footer.php'; ?>
      <script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>
      <script src="js/task.js"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="./js/burger-menu.js"></script>
      <script src="./js/jquery.js"></script>
      <script type="module" src="./js/max.js"></script>
      <script type="module" src="./js/auth/auth.js"></script>
      <script type="module" src="./js/auth/registration.js"></script>
      <script src="https://oauth.mail.ru/sdk/v0.16.2/oauth.js"></script>
      <script>
            MR.init({
                  clientId: "0a66d6c9d00a4551b690f08eaa1d0cca",
                  onlogin: function(state) {
                        if (state.user) {
                              console.info("MR.login:", state);
                        }
                  },
                  onlogout: function() {
                        console.info("MR.logout");
                  },
            });
      </script>
      <script src="js/search.js"></script>
      <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
</body>

</html>