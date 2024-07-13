<?php
require_once __DIR__ . '/php/boot.php';
$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
$sql = "select id, serialnumber, name, text, url, img from tasks where active=1 order by serialnumber";

$results = pdo()->prepare($sql);
$results->execute();
$i = 0;
$tasks = [];
while ($row = $results->fetch(PDO::FETCH_ASSOC)) {
      $tasks[$i] = $row; // кладем в массив все поля из БД по ключу ID
      $i++;
};
$lenght = $i;
// var_dump($lenght);
$adress_img = "./uploads/images/";
?>
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="./css/normalize.css">
      <link rel="stylesheet" href="./css/mainpage.css">
      <link rel="stylesheet" href="./css/tasks.css">
      <link rel='stylesheet' href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'>
      <link rel="stylesheet" href="./css/search.css">

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
            <section class="tasks">
                  <div class="container">

                        <div class="tasks__container">
                              <a class="back" href="/mainpage.php">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62668 16.7066C4.43941 16.5191 4.33423 16.265 4.33423 16C4.33423 15.735 4.43941 15.4808 4.62668 15.2933L12.6267 7.29329C12.7182 7.19504 12.8286 7.11624 12.9513 7.06158C13.074 7.00693 13.2064 6.97754 13.3407 6.97517C13.4749 6.9728 13.6083 6.9975 13.7328 7.0478C13.8573 7.09809 13.9704 7.17295 14.0654 7.26791C14.1604 7.36287 14.2352 7.47598 14.2855 7.6005C14.3358 7.72501 14.3605 7.85839 14.3581 7.99265C14.3558 8.12693 14.3264 8.25935 14.2717 8.38201C14.2171 8.50468 14.1383 8.61508 14.04 8.70663L7.74668 15L26.6667 15C26.9319 15 27.1863 15.1053 27.3738 15.2929C27.5613 15.4804 27.6667 15.7347 27.6667 16C27.6667 16.2652 27.5613 16.5195 27.3738 16.7071C27.1863 16.8946 26.9319 17 26.6667 17H7.74668L14.04 23.2933C14.1383 23.3848 14.2171 23.4952 14.2717 23.6179C14.3264 23.7406 14.3558 23.873 14.3581 24.0073C14.3605 24.1415 14.3358 24.2749 14.2855 24.3994C14.2352 24.5239 14.1604 24.6371 14.0654 24.732C13.9704 24.827 13.8573 24.9018 13.7328 24.9521C13.6083 25.0024 13.4749 25.0271 13.3407 25.0247C13.2064 25.0224 13.074 24.993 12.9513 24.9383C12.8286 24.8837 12.7182 24.8049 12.6267 24.7066L4.62668 16.7066Z" fill="#5C0C70" />
                                    </svg>
                                    Вернуться назад
                              </a>
                              <div class="tasks__left">

                                    <div class="tasks__theme theme">
                                          <button class="btn-reset theme__btn">Темы</button>
                                          <div class="tasks__block">
                                                <button class="btn-reset close"></button>
                                                <ul class="list-reset tasks__list">
                                                      <?php
                                                      foreach ($tasks as $task) {
                                                      ?>
                                                            <li class="tasks__item">
                                                                  <a href class="tasks__link"><?= $task["name"] ?></a>
                                                            </li>
                                                      <?php
                                                      }
                                                      ?>

                                                </ul>
                                          </div>

                                    </div>

                              </div>

                              <div class="tasks__right">
                                    <?php
                                    for ($i = 0; $i < $lenght; $i++) {
                                    ?>
                                          <div class="content">
                                                <div class="tasks__banner">
                                                      <div class="banner">
                                                            <h1 class="banner__title"><?= $tasks[$i]["name"] ?></h1>
                                                            <p class="banner__text"><?= $tasks[$i]["text"] ?>
                                                            </p>
                                                      </div>

                                                      <img class="banner__img" src="<?= $adress_img . $tasks[$i]["img"] ?>" alt>
                                                </div>
                                                <?php
                                                $sql = "select id, url, name, likes from video where task_id=:task_id order by likes";
                                                $results = pdo()->prepare($sql);
                                                $results->execute([
                                                      'task_id' => $tasks[$i]['id'],
                                                ]);
                                                $videos = [];
                                                while ($row = $results->fetch(PDO::FETCH_ASSOC)) {
                                                      $videos[$row['id']] = $row; // кладем в массив все поля из БД по ключу ID
                                                };


                                                ?>
                                                <ul class="list-reset tasks__cards cards">
                                                      <?php
                                                      foreach ($videos as $video) {
                                                            $sql_f = "select id from favorite where user_id=:user_id and video_id_id=:video_id";
                                                            $result_f = pdo()->prepare($sql_f);
                                                            $result_f->execute([
                                                                  'user_id' => $userid,
                                                                  'video_id' => $video['id'],
                                                            ]);
                                                            // $fav = '';
                                                            $fav = $result_f->fetch(PDO::FETCH_ASSOC);

                                                      ?>

                                                            <li class="cards__item" id="<?= $video['id'] ?>">
                                                                  <?php
                                                                  if ($fav) {
                                                                  ?>
                                                                        <button class="card__favorite btn-reset active" data-itemid="<?= $video['id'] ?>">
                                                                              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="34" viewBox="0 0 38 34" fill="none">
                                                                                    <path d="M4.08831 3.70689C8.20606 -0.272806 14.8823 -0.272624 19 6.47004C23.1178 -0.272806 29.7939 -0.272806 33.9117 3.70689C38.0294 7.71769 38.0294 14.4648 33.9117 18.4756L19 33L4.08831 18.4756C-0.0294372 14.4648 -0.0294372 7.71769 4.08831 3.70689Z" fill="#FAEEEB" stroke="#191812" stroke-width="2" stroke-linejoin="round">
                                                                                    </path>
                                                                              </svg>
                                                                        </button>
                                                                  <?php
                                                                  } else {
                                                                  ?>
                                                                        <button class="card__favorite btn-reset" data-itemid="<?= $video['id'] ?>">
                                                                              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="34" viewBox="0 0 38 34" fill="none">
                                                                                    <path d="M4.08831 3.70689C8.20606 -0.272806 14.8823 -0.272624 19 6.47004C23.1178 -0.272806 29.7939 -0.272806 33.9117 3.70689C38.0294 7.71769 38.0294 14.4648 33.9117 18.4756L19 33L4.08831 18.4756C-0.0294372 14.4648 -0.0294372 7.71769 4.08831 3.70689Z" fill="#FAEEEB" stroke="#191812" stroke-width="2" stroke-linejoin="round">
                                                                                    </path>
                                                                              </svg>
                                                                        </button>
                                                                  <?php
                                                                  }

                                                                  ?>
                                                                  <a href="task.php">
                                                                        <div class="card">

                                                                        </div>


                                                                        <h2 class="cards__title"><?= $video['name'] ?></h2>
                                                                  </a>
                                                                  <button data-count="<?= $video['likes'] ?>" data-id="<?= $video['id'] ?>" class="cards__count btn-reset"><?= $video['likes'] ?></button>
                                                            </li>
                                                      <?php
                                                      }
                                                      ?>

                                                </ul>

                                          </div>
                                    <?php
                                    }
                                    ?>


                              </div>
                        </div>
                  </div>
            </section>
      </main>

      <?php include_once 'system/footer.php'; ?>

      <script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>
      <script src="./js/tasks.js"></script>
      <script src="./js/burger-menu.js"></script>
      <script src="./js/t-scroll.min.js"></script>
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
      <script src="./js/search.js"></script>
      <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
</body>

</html>