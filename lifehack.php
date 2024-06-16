<?php
require_once __DIR__ . '/php/boot.php';

$sql = "select title, icon, image, picturetitle, preview, text1, url, text2 from lifehack where active=1";
$results = pdo()->prepare($sql);
$results->execute();
$i = 0;
$lifehacks = [];
while ($row = $results->fetch(PDO::FETCH_ASSOC)) {
  $lifehacks[$i] = $row; // кладем в массив все поля из БД
  $i++;
};
$lenght = $i;
$adress_img = "uploads/images/";
?>
<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Лайфхаки</title>
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <script src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"></script>
  <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
  <script defer src="js/lifehack.js"></script>
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/choices.js@9.0.1/public/assets/styles/choices.min.css" />
  <link rel="stylesheet" href="css/mainpage.css">
  <link rel="stylesheet" href="css/lifehack.css" />
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

    <div class="back-wrap"></div>

    <section class="hero">
      <div class="hero-back_conteiner">
        <a class="hero-back flex" href="mainpage.php">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.628391 10.7066C0.441124 10.5191 0.335937 10.265 0.335937 9.99996C0.335937 9.73496 0.441124 9.48079 0.628391 9.29329L8.62839 1.29329C8.71994 1.19504 8.83034 1.11624 8.95301 1.06158C9.07567 1.00693 9.20809 0.977541 9.34236 0.975172C9.47663 0.972803 9.61 0.997501 9.73452 1.0478C9.85904 1.09809 9.97215 1.17295 10.0671 1.26791C10.1621 1.36287 10.2369 1.47598 10.2872 1.6005C10.3375 1.72501 10.3622 1.85839 10.3598 1.99265C10.3575 2.12693 10.3281 2.25935 10.2734 2.38201C10.2188 2.50468 10.14 2.61508 10.0417 2.70663L3.74839 8.99996L22.6684 8.99996C22.9336 8.99996 23.188 9.10532 23.3755 9.29285C23.563 9.48039 23.6684 9.73474 23.6684 9.99996C23.6684 10.2652 23.563 10.5195 23.3755 10.7071C23.188 10.8946 22.9336 11 22.6684 11L3.74839 11L10.0417 17.2933C10.14 17.3848 10.2188 17.4952 10.2734 17.6179C10.3281 17.7406 10.3575 17.873 10.3598 18.0073C10.3622 18.1415 10.3375 18.2749 10.2872 18.3994C10.2369 18.5239 10.1621 18.6371 10.0671 18.732C9.97215 18.827 9.85904 18.9018 9.73452 18.9521C9.61 19.0024 9.47663 19.0271 9.34236 19.0247C9.20809 19.0224 9.07567 18.993 8.95301 18.9383C8.83034 18.8837 8.71994 18.8049 8.62839 18.7066L0.628391 10.7066Z" />
          </svg>
          Вернуться назад</a>
      </div>

      <div class="hero-top">
        <h1 class="lifehack-name">
          <svg class="lifehack_title" xmlns="http://www.w3.org/2000/svg" width="572" height="164" viewBox="0 0 572 164">
            <path id="path-title" fill="none" d="M24 80.7351C24 80.7351 95.0884 111.099 161 101.233C224.908 91.6663 249.43 58.1894 314 60.7307C373.904 63.0885 390.884 94.9632 443.5 101.233C477.431 105.276 563 93.2351 563 93.2351" stroke="#FFD983" stroke-width="120" />
            <text dy="15%">
              <textpath fill="#5C0C70" href="#path-title" startoffset="20">Лайфхаки</textpath>
            </text>
          </svg>
        </h1>

        <div class="hero_text-wrap">
          <p class="hero_text">На&nbsp;странице собраны статьи, которые
            помогут преодолеть трудности в&nbsp;учебе.
            Поделиться советом можно,
            нажав &laquo;предложить лайфхак&raquo;</p>
        </div>
      </div>

      <div class="hero-animation flex">
        <!-- буква Т -->
        <svg class="letter" width="304" height="345" viewBox="0 0 304 345" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M303.3 46.5618L241.035 0.702779L158.135 113.261L46.4438 31.0001L0.000948277 94.0584L111.692 176.32L21.2914 299.062L83.557 344.921L303.3 46.5618Z" fill="#C18ED1" />
        </svg>
        <!-- квадрат -->
        <svg class="square" width="236" height="236" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="236" height="236" fill="#FD8E5E" />
        </svg>
        <!-- шестерёнка -->
        <svg class="gear" width="404" height="400" viewBox="0 0 404 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M127.486 226.422L43.6235 324.348L103.806 375.955L187.668 278.029L230.464 399.647L305.231 373.282L262.435 251.664L389.093 275.356L403.678 197.385L277.02 173.693L360.882 75.7665L300.7 24.1593L216.838 122.085L174.042 0.467323L99.2749 26.8318L142.071 148.45L15.4125 124.758L0.827625 202.73L127.486 226.422Z" fill="#FFD983" />
        </svg>
        <!-- зеленый столбик -->
        <svg class="column" width="102" height="232" viewBox="0 0 102 232" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="102" height="232" fill="#84CA5D" />
        </svg>

        <div class="animation-right flex">
          <!-- мячик -->
          <svg class="ball" width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50.1523" cy="50" r="50" fill="#5C0C70" />
          </svg>
          <!-- палочка 1 -->
          <div class="stick1-wrap">
            <svg class="stick1" width="349" height="74" viewBox="0 0 349 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.57332" y1="9.11288" x2="347.183" y2="64.373" stroke="#FF4E00" stroke-width="18" />
            </svg>
          </div>
          <!-- палочка 2 -->
          <div class="stick2-wrap">
            <svg class="stick2" width="343" height="111" viewBox="0 0 343 111" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2.61797" y1="101.956" x2="340.137" y2="9.32108" stroke="#FF4E00" stroke-width="18" />
            </svg>
          </div>
          <!-- палочка 3 -->
          <div class="stick3-wrap">
            <svg class="stick3" width="347" height="94" viewBox="0 0 347 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2.92262" y1="9.02314" x2="344.541" y2="85.159" stroke="#FF4E00" stroke-width="18" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <div class="wrapper btn-wrap flex">
      <button class="btn-reset btn-lifehack flex">Предложить лайфхак
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="28" />
          <path d="M35 27H29V21C29 20.7348 28.8946 20.4804 28.7071 20.2929C28.5196 20.1054 28.2652 20 28 20C27.7348 20 27.4804 20.1054 27.2929 20.2929C27.1054 20.4804 27 20.7348 27 21V27H21C20.7348 27 20.4804 27.1054 20.2929 27.2929C20.1054 27.4804 20 27.7348 20 28C20 28.2652 20.1054 28.5196 20.2929 28.7071C20.4804 28.8946 20.7348 29 21 29H27V35C27 35.2652 27.1054 35.5196 27.2929 35.7071C27.4804 35.8946 27.7348 36 28 36C28.2652 36 28.5196 35.8946 28.7071 35.7071C28.8946 35.5196 29 35.2652 29 35V29H35C35.2652 29 35.5196 28.8946 35.7071 28.7071C35.8946 28.5196 36 28.2652 36 28C36 27.7348 35.8946 27.4804 35.7071 27.2929C35.5196 27.1054 35.2652 27 35 27Z" />
        </svg>
      </button>
    </div>

    <!-- Модальное окно Предложить лайфхак -->

    <div class="modal-open">
      <div class="offer-modal">
        <div class="form-close flex">
          <svg class="btn-close" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.11612 5.88388C6.35054 5.64946 6.71081 5.5601 7.11767 5.63544C7.52454 5.71079 7.94467 5.94467 8.28565 6.28565L33.9986 31.9986C34.3396 32.3396 34.5735 32.7597 34.6488 33.1666C34.7242 33.5735 34.6348 33.9337 34.4004 34.1682C34.166 34.4026 33.8057 34.4919 33.3988 34.4166C32.992 34.3413 32.5718 34.1074 32.2309 33.7664L6.51788 8.05342C6.17691 7.71244 5.94302 7.29231 5.86767 6.88544C5.79233 6.47858 5.8817 6.1183 6.11612 5.88388Z" fill="#5C0C70" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.1161 6.11612C34.3505 6.35054 34.4399 6.71081 34.3646 7.11767C34.2892 7.52454 34.0553 7.94467 33.7144 8.28565L8.00137 33.9986C7.6604 34.3396 7.24026 34.5735 6.8334 34.6488C6.42653 34.7242 6.06626 34.6348 5.83184 34.4004C5.59742 34.166 5.50805 33.8057 5.5834 33.3988C5.65874 32.992 5.89263 32.5718 6.23361 32.2309L31.9466 6.51788C32.2876 6.17691 32.7077 5.94302 33.1146 5.86767C33.5214 5.79233 33.8817 5.8817 34.1161 6.11612Z" fill="#5C0C70" />
          </svg>
        </div>

        <form action="#" class="form" id="form">
          <label class="form-label flex">
            <span class="input-name">Ф.И.О *</span>
            <input class="form-input form-name" id="name" type="text" name="name" placeholder="Введите Ф.И.О." required>
            <button class="btn-clear hidden"></button>
          </label>

          <label class="form-label flex">
            <span class="input-name">E-mail*</span>
            <input class="form-input form-mail" id="email" type="email" name="email" placeholder="Введите E-mail" required>
            <button class="btn-clear hidden"></button>
          </label>

          <label class="form-label flex">
            <span class="input-name">Ученик, педагог вы или родитель?</span>
            <select class="form-select" id="who" name="who">
              <option class="form-option" value>Выберите ответ</option>
              <option class="form-option" value="student">Ученик</option>
              <option class="form-option" value="teacher">Педагог</option>
              <option class="form-option" value="parent">Родитель</option>
            </select>
          </label>

          <label class="form-label label-aria flex">
            <span class="input-name">Напишите свой лайфхак *</span>
            <textarea class="form-textarea" id="lifehack" name="lifehack" placeholder="Введите описание"></textarea>
          </label>
          <button type="submit" class="btn-reset btn-form">Отправить</button>

          <div class="form-text_wrap">
            <p class="form-text">Нажимая на кнопку «Отправить», вы
              подтверждаете, что ознакомлены с
              <a class="form-docs" href="docs/soglasie.pdf" target="blank">Пользовательским
                соглашением</a> и <a class="form-docs" href="docs/policy.pdf" target="blank">Политикой
                о персональных данных</a>
            </p>
          </div>
        </form>
      </div>
    </div>

    <!-- Модальное окно Спасибо -->

    <div class="thanks-modal">
      <div class="thanks-modal_content">

        <div class="thanks-close flex">
          <svg class="thanks-btn_close" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.11612 5.88388C6.35054 5.64946 6.71081 5.5601 7.11767 5.63544C7.52454 5.71079 7.94467 5.94467 8.28565 6.28565L33.9986 31.9986C34.3396 32.3396 34.5735 32.7597 34.6488 33.1666C34.7242 33.5735 34.6348 33.9337 34.4004 34.1682C34.166 34.4026 33.8057 34.4919 33.3988 34.4166C32.992 34.3413 32.5718 34.1074 32.2309 33.7664L6.51788 8.05342C6.17691 7.71244 5.94302 7.29231 5.86767 6.88544C5.79233 6.47858 5.8817 6.1183 6.11612 5.88388Z" fill="#5C0C70" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.1161 6.11612C34.3505 6.35054 34.4399 6.71081 34.3646 7.11767C34.2892 7.52454 34.0553 7.94467 33.7144 8.28565L8.00137 33.9986C7.6604 34.3396 7.24026 34.5735 6.8334 34.6488C6.42653 34.7242 6.06626 34.6348 5.83184 34.4004C5.59742 34.166 5.50805 33.8057 5.5834 33.3988C5.65874 32.992 5.89263 32.5718 6.23361 32.2309L31.9466 6.51788C32.2876 6.17691 32.7077 5.94302 33.1146 5.86767C33.5214 5.79233 33.8817 5.8817 34.1161 6.11612Z" fill="#5C0C70" />
          </svg>
        </div>

        <p class="thanks-text">Спасибо за интересный лайфхак!</p>
        <p class="thanks-text thanks-text_bottom">После проверки поста
          модератором Вы сможете увидеть его на странице
          «Лайфхаки».</p>

        <div>
          <svg class="figure1" width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.5714 77.7011C59.8738 77.7011 77.1429 60.435 77.1429 39.1362C77.1429 17.8374 59.8738 0.571289 38.5714 0.571289C17.269 0.571289 0 17.8374 0 39.1362C0 60.435 17.269 77.7011 38.5714 77.7011Z" fill="#FD8E5E" />
          </svg>

          <svg class="figure2" width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.572266 0.571289H77.7151L38.1334 40.1462L0.572266 77.7011V0.571289Z" fill="#84CA5D" />
          </svg>

          <svg class="figure3" width="79" height="78" viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5394 71.6131C2.52968 61.2165 -3.74861 38.3064 6.34853 20.2098L72.1588 58.1993C61.5325 75.9901 38.5491 82.009 20.5394 71.6131ZM72.7302 57.2098L6.91996 19.2202C17.5462 1.42896 40.5297 -4.59002 58.5394 5.80625C76.5491 16.2025 82.8274 39.1129 72.7302 57.2098Z" fill="#FFD983" stroke="#FAEEEB" stroke-width="2" />
          </svg>

          <svg class="figure4" width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.88 47.1444L13.2977 69.6928L26.7034 77.7011L39.2863 55.1526L51.8691 77.7011L65.2748 69.6928L52.6926 47.1444H77.8577V31.1281H52.6926L65.2748 8.57948L51.8691 0.571289L39.2863 23.1199L26.7034 0.571289L13.2977 8.57948L25.88 31.1281H0.714844V47.1444H25.88Z" fill="#FFD983" />
          </svg>

          <svg class="figure5" width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.5709 39.4219L77.428 0.571289V77.7011H0.285156L38.5709 39.4219Z" fill="#C18ED1" />
          </svg>

          <svg class="figure6" width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.83176 45.3072C-1.77967 24.8305 11.7386 5.29539 32.094 1.39663L45.2895 76.2209C24.8283 79.518 5.44319 65.7838 1.83176 45.3072ZM46.4152 76.0226L33.2192 1.19821C53.6809 -2.09896 73.066 11.6355 76.6769 32.1122C80.2883 52.5887 66.7706 72.1238 46.4152 76.0226Z" fill="#84CA5D" stroke="#FAEEEB" stroke-width="2" />
          </svg>
        </div>
      </div>
    </div>


    <section class="wrapper lifehack flex">
      <div class="lifehack_name">
        <div class="cards-wrap">
          <?php
          for ($i = 0; $i < $lenght; $i++) {
          ?>
            <div class="lifehack_cards">
              <img class="lifehack-cards-img" src="<?= $adress_img . $lifehacks[$i]["icon"] ?>" alt>
              <div>
                <h3 class="lifehack-cards-name"><?= $lifehacks[$i]["title"] ?></h3>
                <p class="lifehack-cards-about"><?= $lifehacks[$i]["preview"] ?></p>
              </div>
            </div>
          <?php
          }
          ?>
        </div>

      </div>


      <div id="start" class="lifehack_information">
        <?php
        for ($i = 0; $i < $lenght; $i++) {
        ?>
          <div class="lifehack_content">
            <div class="lifehack_img_close"> <img src="img/close2.svg" alt></div>

            <div class="lifehack-information-about">
              <h2 class="lifehack-information-title"><?= $lifehacks[$i]["title"] ?></h2>
            </div>

            <div class="lifehack-information-about">
              <p class="lifehack-information-text"><?= $lifehacks[$i]["text1"] ?> </p>
            </div>

            <div class="lifehack-information-img">
              <img class="lifehack_foto" src="<?= $adress_img . $lifehacks[$i]["image"] ?>" alt>
            </div>

            <div class="lifehack-information-img_link">
              <a class="lifehack-information-photo_caption" href="<?= $lifehacks[$i]["url"] ?>" target="_blank"><?= $lifehacks[$i]["picturetitle"] ?></a>
            </div>

            <div class="lifehack-information-about information-outside">
              <p class="lifehack-information-text"><?= $lifehacks[$i]["text2"] ?></p>
            </div>

            <div class="lifehack-information-end">
              <a href="#start" class="lifehack-information-link">Вернуться к
                началу статьи</a>
            </div>
          </div>
        <?php
        }
        ?>
      </div>

    </section>
  </main>

  <?php include_once 'system/footer.php'; ?>

  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="./js/burger-menu.js"></script>
  <script src="./js/max.js"></script>
  <script src="js/search.js"></script>
</body>

</html>