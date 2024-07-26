<?php
session_start();
$userid =  isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
if(!$userid){
    echo "Для просмотра этой страницы необходимо авторизоваться.";
    die;
}
else {
?>
<!DOCTYPE html>
<html lang="ru">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Профиль</title>
        <script src="js/jquery.js"></script>
        <script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>
        <script
            src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
        <script src="https://unpkg.com/imask"></script>
        <script defer src="js/profile.js"></script>
        <script defer src="js/profile-bd.js" type="module"></script>
        <script defer src="js/auth/auth.js" type="module"></script>
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="./css/mainpage.css">
        <link rel="stylesheet" href="css/tasks.css">
        <link rel="stylesheet" href="css/lifehack.css">
        <link rel="stylesheet" href="css/profile.css">
        <link rel="stylesheet" href="css/search.css">
    </head>

    <body>

        <!-- Модалка для смены пароля -->

        <div class="changePasswordModal hidden-total">
            <svg class="changePassword-btn-close" width="40" height="40"
                viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.11612 5.88388C6.35054 5.64946 6.71081 5.5601 7.11767 5.63544C7.52454 5.71079 7.94467 5.94467 8.28565 6.28565L33.9986 31.9986C34.3396 32.3396 34.5735 32.7597 34.6488 33.1666C34.7242 33.5735 34.6348 33.9337 34.4004 34.1682C34.166 34.4026 33.8057 34.4919 33.3988 34.4166C32.992 34.3413 32.5718 34.1074 32.2309 33.7664L6.51788 8.05342C6.17691 7.71244 5.94302 7.29231 5.86767 6.88544C5.79233 6.47858 5.8817 6.1183 6.11612 5.88388Z"
                    fill="#5C0C70" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M34.1161 6.11612C34.3505 6.35054 34.4399 6.71081 34.3646 7.11767C34.2892 7.52454 34.0553 7.94467 33.7144 8.28565L8.00137 33.9986C7.6604 34.3396 7.24026 34.5735 6.8334 34.6488C6.42653 34.7242 6.06626 34.6348 5.83184 34.4004C5.59742 34.166 5.50805 33.8057 5.5834 33.3988C5.65874 32.992 5.89263 32.5718 6.23361 32.2309L31.9466 6.51788C32.2876 6.17691 32.7077 5.94302 33.1146 5.86767C33.5214 5.79233 33.8817 5.8817 34.1161 6.11612Z"
                    fill="#5C0C70" />
            </svg>
            <h3 class="changePasswordModal-title profile-title">Пароль</h3>
            <form action="#" class="changePasswordModal-form"
                id="changePasswordModal-modal">
                <label
                    class="label-current-password changePasswordModal-label form-profile--label flex">
                    <span class="input-profile--info">Текущий пароль</span>
                    <input
                        class="input-password form-profile--input form-profile--password"
                        id="current-password"
                        type="password" name="password" maxlength="64" required>
                    <button class="btn-eye--off"></button>
                    <p class="password-result password-error hidden-total">Неверный пароль</p>
                </label>
                <label
                    class="changePasswordModal-label label-new-password form-profile--label flex">
                    <span class="input-profile--info">Новый пароль</span>
                    <input
                        class="input-password form-profile--input form-profile--password"
                        id="new-password"
                        type="password" name="password" maxlength="64" required>
                    <button class="btn-eye--off"></button>
                    <p class="password-result password-success hidden-total">Пароль успешно обновлен</p>
                </label>
                <button
                    class="btn-reset btn-form changePasswordModal-btn">Сохранить</button>
            </form>
        </div>

        <!-- -------------------------------- -->

        <header class="wrapper header-profile flex">
            <a class="profile-logo" href="mainpage.php">
                <img src="img/logo_header.png" alt="logo"></a>
            <a class="profile-back profile-back_margin"
                href="mainpage.php">Главная</a>

            <div class="exit-wrap flex">
                <svg width="26" height="29" viewBox="0 0 26 29" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.9987 1.16797H1.33203V24.5013C1.33203 25.3854 1.68322 26.2332 2.30834 26.8583C2.93346 27.4834 3.78131 27.8346 4.66536 27.8346H17.9987M19.6654 19.5013L24.6654 14.5013M24.6654 14.5013L19.6654 9.5013M24.6654 14.5013H7.9987"
                        stroke="#5C0C70" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <a class="profile-back" href="#">Выйти</a>
            </div>
        </header>

        <main>
            <div class="wrapper profile-menu flex hidden-total">
                <svg class="profile-menu--icon" width="36" height="24"
                    viewBox="0 0 36 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2H34M2 12H34M2 22C9.81049 22 26.1895 22 34 22"
                        stroke="#5C0C70" stroke-width="3"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p class="profile-menu--text">Меню</p>
            </div>

            <section class="wrapper profile flex">
                <div class="profile-left">
                    <button
                        class="btn-reset close profil-close hidden-total"></button>
                    <p class="profile-fio"></p>
                    <div class="profile-list">
                        <div class="profile-card profile-card--active flex">
                            <div class="profile-left-icon">
                                <svg class="icon-svg icon-svg1 icon-svg--active"
                                    width="40" height="33" viewBox="0 0 40 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M30.9666 1.4469C24.8597 -1.65502 21.0792 1.03492 25.611 2.1012C37.0978 4.81539 40.3818 19.2045 29.3555 27.1289C16.2692 36.5074 -3.48096 23.6667 4.85547 10.6289C8.3936 5.1036 14.003 2.05275 18.0016 1.93158C21.5155 1.83464 20.4007 0.0655593 16.8141 0.0655593C7.9688 0.0655593 -1.55508 11.3343 0.21399 19.7192C1.64378 26.5773 7.26605 31.0364 15.869 32.1026C35.9104 34.5987 47.9788 10.0741 30.9666 1.4469Z" />
                                    <path
                                        d="M16.3387 21.0687C15.357 19.9008 15.0461 19.399 13.8612 19.4676C12.3578 20.1285 13.3557 23.1285 16.7158 24.6597C19.9473 25.689 24.7226 25.1287 26.6527 23.4301C28.4868 21.8161 28.8548 18.3761 26.6527 19.2793C26.2205 19.4566 25.7954 19.9276 25.4704 20.4797C23.2479 24.2547 19.357 24.6597 16.3387 21.0687Z" />
                                    <path
                                        d="M16.6184 12.8368C16.6184 11.1404 15.5279 10.3649 14.0254 10.995C12.6683 11.5524 12.0382 14.1212 13.0076 15.0178C14.5343 16.3991 16.6184 15.1147 16.6184 12.8368Z" />
                                    <path
                                        d="M23.5379 12.8368C23.5379 11.1404 24.6283 10.3649 26.1308 10.995C27.4879 11.5524 28.118 14.1212 27.1487 15.0178C25.622 16.3991 23.5379 15.1147 23.5379 12.8368Z" />
                                </svg>
                            </div>
                            <p
                                class="profile-card-title profile-card-title--active">Профиль</p>
                        </div>

                        <div class="profile-card flex">
                            <div class="profile-left-icon">
                                <svg
                                    class="icon-svg icon-svg2 icon-svg--especial"
                                    width="44" height="40"
                                    viewBox="0 0 44 40" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 13.5C17.5 2.5 26 5 28 2C33.04 5.80207 36.2188 7.77028 42.5 11M16 13.5C7.5 12 4 23 2 24.5M16 13.5L29 24.7667M31 26.5C32.5 25 31.1113 24.7773 32 23C32.4122 22.1757 34.2509 20.7268 36.5 19.5C39.0669 18.0999 42 17 42 17C41.0039 15.1616 41.5807 13.6 42.5 11M31 26.5C29 28 29.5 26.5 27.5 27C25.5 27.5 16 36.5 16 36.5M31 26.5L29 24.7667M42.5 11C40 14 28.5 12 29 24.7667M2 24.5C6.95856 28.0015 10.195 30.122 13.695 33.852M2 24.5C3 25.5 3.5 26.5 3.5 26.5L16 36.5M16 36.5C15.2066 35.5239 14.4447 34.651 13.695 33.852M29 24.7667C20.5 20 18.5 32.5 13.695 33.852"
                                        stroke-width="2"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M18.2799 5.25691C17.7339 5.72886 17.2324 6.30283 17 7C19.5 6 21 7.5 25.5 11.5L25.0239 9.11961C25.0115 9.05773 25.0589 9 25.122 9H27.5L21.7736 5.18238C20.7116 4.47438 19.2455 4.42225 18.2799 5.25691Z"
                                        fill="#FFD983" stroke="#FFD983" />
                                </svg>
                            </div>
                            <p class="profile-card-title">Избранное</p>
                        </div>

                        <div class="profile-card flex">
                            <div class="profile-left-icon">
                                <svg class="icon-svg icon-svg3" width="30"
                                    height="39" viewBox="0 0 30 39" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M15.383 0.0115683C13.8593 -0.110907 12.799 0.737491 12.1151 1.69898C11.4478 2.63709 11.0361 3.81014 10.7614 4.70656C10.5989 5.23715 10.4593 6.08023 10.3395 6.9756C10.2166 7.8945 10.1053 8.94428 10.0117 9.93063C9.91803 10.9184 9.84145 11.8495 9.78831 12.5333C9.78092 12.6285 9.77397 12.719 9.76749 12.8041C9.51699 12.821 9.23811 12.847 8.9395 12.8864C7.76971 13.0407 6.20991 13.411 4.87778 14.3175C2.25029 16.1056 0.96549 19.0493 0.590234 22.616C-0.130008 29.4619 3.52098 35.9129 9.41188 38.19C12.5001 39.3838 15.7042 38.492 18.0052 37.4285C19.174 36.8883 20.1594 36.2814 20.8522 35.8104C21.1995 35.5743 21.4757 35.3708 21.6671 35.2245C21.7629 35.1514 21.8376 35.0924 21.8897 35.0507C21.9045 35.0388 21.9175 35.0283 21.9286 35.0193C21.937 35.0125 21.9443 35.0065 21.9505 35.0014L21.9678 34.9871L21.9731 34.9828L21.9749 34.9813L21.9756 34.9807C21.9759 34.9804 21.9762 34.9802 21.3345 34.2132C20.6929 33.4462 20.6931 33.446 20.6933 33.4459L20.6923 33.4467L20.683 33.4544C20.6739 33.4618 20.6591 33.4739 20.6388 33.4902C20.5982 33.5227 20.5357 33.5721 20.4529 33.6353C20.2872 33.7619 20.0411 33.9435 19.7278 34.1564C19.0995 34.5835 18.2105 35.1304 17.1661 35.613C15.0408 36.5953 12.4639 37.2256 10.133 36.3246C5.1856 34.4122 1.94176 28.8847 2.57926 22.8253C2.91911 19.595 4.03615 17.3094 6.00299 15.971C6.96802 15.3142 8.17665 15.0043 9.20098 14.8693C9.70402 14.8029 10.1416 14.7814 10.451 14.7765C10.6053 14.774 10.7266 14.7757 10.8067 14.7779L10.8491 14.7792C11.7442 14.9714 12.3078 15.1015 13.0413 15.346C13.1167 15.3711 13.2121 15.3987 13.3238 15.431C13.8663 15.5881 14.7923 15.8561 15.6682 16.4887L15.7007 16.5122L15.7349 16.5329C16.0415 16.7189 16.3085 16.8915 16.5529 17.0656C17.217 17.5386 17.7593 18.0544 18.4566 18.9416C18.8806 19.4811 19.0047 19.8457 19.0152 20.1272C19.0221 20.315 18.9814 20.5434 18.8399 20.8436L18.636 21.1696C18.0263 21.4776 17.4913 21.6351 16.9726 21.6793C16.3829 21.7295 15.7477 21.6389 14.973 21.368C14.2545 21.1168 13.3901 20.3167 12.6288 19.4121C12.2691 18.9848 11.9663 18.5757 11.7533 18.2731C11.6472 18.1223 11.5643 17.9992 11.5086 17.915L11.4828 17.8758L11.4479 17.8213L11.4265 17.7883L11.4206 17.7792L11.4188 17.7765L11.4182 17.7757L11.418 17.7753C11.418 17.7752 11.4179 17.7751 10.5817 18.3236L11.4179 17.7751L9.73472 18.8552L10.5817 18.3236C9.73472 18.8552 9.73482 18.8553 9.73492 18.8555L9.73517 18.8559L9.73581 18.8569L9.73766 18.8598L9.74361 18.8692L9.76439 18.9017L9.80297 18.9612L9.83585 19.013C9.89607 19.1081 9.98365 19.2483 10.0907 19.4251C10.3052 19.7791 10.5962 20.2769 10.9015 20.8506C11.5258 22.0236 12.1578 23.4183 12.3734 24.534C12.5453 25.4228 12.5512 26.6427 12.503 27.6953C12.4794 28.2102 12.4439 28.6648 12.4144 28.9903C12.3996 29.1528 12.3864 29.2824 12.377 29.3706C12.3723 29.4147 12.3685 29.4483 12.366 29.4705L12.3632 29.4949L12.3625 29.5004L12.3624 29.5014C12.3624 29.5014 12.3624 29.5013 13.3553 29.6206C14.3481 29.74 14.3481 29.7399 14.3481 29.7397L14.3482 29.7395L14.3483 29.7386L14.3486 29.7361L14.3496 29.7275L14.3531 29.6967C14.3562 29.6702 14.3604 29.632 14.3656 29.5832C14.3761 29.4855 14.3904 29.3452 14.4062 29.1711C14.4377 28.8233 14.4756 28.3382 14.5009 27.7869C14.5504 26.707 14.5563 25.2887 14.3371 24.1544C14.2749 23.8329 14.1884 23.5017 14.0843 23.1678C14.16 23.1997 14.2362 23.2291 14.3128 23.2559C15.2837 23.5954 16.2062 23.7518 17.1423 23.672C17.2036 23.6668 17.2647 23.6606 17.3256 23.6534C17.0791 24.1649 16.7905 24.844 16.4086 25.8974C15.8039 27.5653 15.9737 29.1753 16.821 30.3628C17.6695 31.5521 19.0955 32.1702 20.6792 32.0377C21.6122 31.9597 22.4783 31.4542 23.2099 30.825C23.9565 30.1829 24.6561 29.3324 25.2636 28.3961C26.4706 26.5362 27.4121 24.1844 27.5995 22.1275C27.6994 21.0313 27.5053 20.1047 27.0372 19.3712C26.5694 18.6382 25.8904 18.1961 25.1979 17.9558C24.6708 17.7729 24.1225 17.701 23.6103 17.702C24.5218 16.7609 25.6848 15.489 27.1685 13.7677C30.0626 10.4103 30.6084 7.41385 29.3574 5.46804C28.1027 3.5165 25.4397 3.29291 23.5956 4.83063C22.7691 5.5198 21.9024 6.57193 21.0876 7.7017C20.2626 8.84563 19.4495 10.1277 18.7353 11.3212C18.473 11.7595 18.2233 12.1873 17.9903 12.5936C18.0437 12.3846 18.0975 12.1703 18.1511 11.9523C18.4163 10.8745 18.68 9.69549 18.8694 8.59839C19.0558 7.51862 19.1821 6.45287 19.1429 5.6284C19.0744 4.19166 18.8928 2.869 18.3499 1.86518C18.0668 1.34161 17.6794 0.892144 17.1576 0.563862C16.6391 0.237625 16.0409 0.0644563 15.383 0.0115683ZM15.5146 14.1009C15.7099 13.4072 15.9616 12.4802 16.209 11.4745C16.4681 10.4214 16.7201 9.29193 16.8986 8.25818C17.08 7.20709 17.1735 6.31958 17.1451 5.72355C17.0782 4.31928 16.9028 3.39362 16.5907 2.81663C16.4464 2.5498 16.2818 2.37573 16.0926 2.25671C15.9002 2.13565 15.6283 2.03774 15.2227 2.00514C14.6579 1.95973 14.1962 2.22376 13.7449 2.85825C13.2769 3.51611 12.9402 4.42258 12.6737 5.29245C12.5657 5.64501 12.4431 6.33431 12.3219 7.24074C12.2038 8.12364 12.0953 9.14506 12.0028 10.1195C11.9105 11.0926 11.8349 12.0119 11.7823 12.6883C11.7757 12.7733 11.7695 12.8545 11.7636 12.9315C12.4332 13.0803 12.9917 13.2212 13.6738 13.4486C13.6997 13.4572 13.7457 13.47 13.8092 13.4877C14.1011 13.5687 14.7608 13.7519 15.5146 14.1009ZM18.7129 15.4044C18.5977 15.6168 18.4949 15.8086 18.4061 15.9756C18.9567 16.4449 19.4631 16.9856 20.0291 17.7057C20.1286 17.8324 20.2227 17.9605 20.3104 18.0904C20.343 18.063 20.377 18.0342 20.4124 18.0038C21.2786 17.2598 22.8635 15.6988 25.6537 12.4619C28.3638 9.31786 28.1853 7.34314 27.6751 6.54967C27.1686 5.76194 25.9419 5.47818 24.8764 6.36668C24.2481 6.89062 23.4995 7.7766 22.7097 8.87161C21.9302 9.95247 21.1494 11.1819 20.4515 12.3482C19.7547 13.5127 19.1468 14.6038 18.7129 15.4044ZM19.5305 23.7685C19.7203 23.4398 19.9323 23.0729 20.2495 22.401C20.344 22.2571 20.4318 22.1121 20.5119 21.9655C20.6371 21.7856 20.8068 21.5519 21.0059 21.3025C21.4655 20.727 21.9897 20.1867 22.4306 19.9426C22.5875 19.8557 22.9098 19.75 23.3327 19.7142C23.7457 19.6793 24.1757 19.7181 24.5422 19.8453C24.9003 19.9695 25.1726 20.1673 25.3513 20.4472C25.5296 20.7265 25.677 21.1858 25.6077 21.9461C25.4569 23.6024 24.6637 25.6465 23.5859 27.3074C23.0511 28.1316 22.4708 28.8227 21.9058 29.3087C21.3258 29.8075 20.8486 30.0166 20.5124 30.0447C19.5576 30.1246 18.8464 29.7581 18.4491 29.2013C18.0506 28.6427 17.8662 27.745 18.2888 26.5791C18.9328 24.8029 19.1977 24.3444 19.5304 23.7685L19.5305 23.7685Z" />
                                </svg>
                            </div>
                            <p class="profile-card-title">Результаты</p>
                        </div>
                    </div>
                </div>

                <div class="profile-right">
                    <div
                        class="profile-content profile-content--active profile-content--about">
                        <form action="#" class="form-profile" id="form-profile">
                            <div class="form-profile--content flex">
                                <div class="form-profile--left">
                                    <label class="form-profile--label flex">
                                        <span
                                            class="input-profile--info">Фамилия*</span>
                                        <input
                                            class="form-profile--input input-profile--text input-profile--clear"
                                            id="surname" type="text"
                                            name="surname"
                                            placeholder="Введите фамилию"
                                            maxlength="100" required>
                                        <button
                                            class="btn-clear btn-clear--profile hidden"></button>
                                    </label>

                                    <label class="form-profile--label flex">
                                        <span
                                            class="input-profile--info">Имя*</span>
                                        <input
                                            class="form-profile--input input-profile--text input-profile--clear"
                                            id="name" type="text" name="name"
                                            placeholder="Введите имя"
                                            maxlength="100"
                                            required>
                                        <button
                                            class="btn-clear btn-clear--profile hidden"></button>
                                    </label>

                                    <label class="form-profile--label flex">
                                        <span
                                            class="input-profile--info">E-mail*</span>
                                        <input
                                            class="form-profile--input input-profile--mail input-profile--clear"
                                            id="email" type="email" name="email"
                                            placeholder="Введите E-mail"
                                            maxlength="256" required>
                                        <button
                                            class="btn-clear btn-clear--profile hidden"></button>
                                    </label>

                                    <a class="password-change" href="#">Изменить
                                        пароль</a>
                                </div>

                                <div class="form-profile--right">
                                    <label class="form-profile--label flex">
                                        <span class="input-profile--info">Город,
                                            населенный пункт</span>
                                        <input
                                            class="form-profile--input input-city input-profile--clear"
                                            id="city"
                                            type="text" name="city"
                                            placeholder="Введите ваш город"
                                            maxlength="50">
                                        <button
                                            class="btn-clear btn-clear--profile hidden"></button>
                                    </label>

                                    <label class="form-profile--label flex">
                                        <span
                                            class="input-profile--info">Телефон</span>
                                        <input
                                            class="form-profile--input input-profile--phone input-profile--clear"
                                            id="phone" type="tel" name="phone"
                                            placeholder="+7 (000) 000-00-00"
                                            maxlength="18">
                                        <button
                                            class="btn-clear btn-clear--profile hidden"></button>
                                    </label>

                                    <label class="form-profile--label flex">
                                        <span
                                            class="input-profile--info">Название
                                            школы</span>
                                        <input                                            
                                            class="form-profile--input input-school input-profile--clear"
                                            id="school"
                                            type="text" name="school"
                                            placeholder="Введите название школы"
                                            maxlength="200">
                                        <button
                                            class="btn-clear btn-clear--profile hidden"></button>
                                    </label>
                                </div>
                            </div>
                            <button
                                class="btn-reset btn-profile btn-profile_save">Сохранить</button>
                        </form>
                    </div>

                    <div class="profile-content profile-content--favourite">
                        <p class="favourite-text profile-text hidden-total">Ты пока еще ничего не добавил в избранное.</p>
                        <ul class="list-reset tasks__cards cards profile-cards">
                        </ul>

                        <div class="favorite-btn-wrap flex">
                            <button
                                class="btn-reset favorite-btn favorite-btn-show">Показать
                                больше
                                <svg width="24" height="14" viewBox="0 0 24 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L12 12L22 2" stroke="#5C0C70"
                                        stroke-width="4" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>

                            <button
                                class="btn-reset favorite-btn favorite-btn-hide hidden-total">Скрыть
                                <svg width="24" height="14" viewBox="0 0 24 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12L12 2L22 12" stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="profile-content profile-content--results">
                        <div class="results-info">
                            <h3 class="profile-title">Результаты</h3>
                            <p class="profile-text">В этом разделе показаны твой
                                прогресс и уровень знаний на основе
                                результатов тестирования.</p>
                            <div class="results-btns flex">
                                <div class="results-btn results-btn--active">
                                    <p class="results-btn--text">Общий тест</p>
                                </div>
                                <div class="results-btn">
                                    <p class="results-btn--text">Задания</p>
                                </div>
                            </div>

                            <div class="results-card results-card--active">

                                <!-- Если нет баллов -->
                                <div class="result-no-points hidden-total">
                                <p class="profile-text profile-text--results">У вас нет пройденных тестов</p>
                                <a href="test.html" class="btn-profile btn-no-points">Пройти тест</a>
                                </div>

                                <!-- ---------------- -->

                                <!-- Если есть баллы -->
                                <div class="result-with-points">
                                    <p
                                        class="profile-text profile-text--test">Ниже
                                        ты можешь посмотреть результаты по
                                        каждому из заданий теста, а также при
                                        необходимости пройти его заново.</p>

                                    <table class="results-table">
                                        <tbody>
                                            <tr class="results-table--row1">
                                                <td
                                                    class="results-table--cell results-table--title cell-border-right">
                                                    Выполнено
                                                    заданий</td>
                                                <td
                                                    class="results-table--cell results-table--title cell-border-right">
                                                    Выполнено
                                                    верно</td>
                                                <td
                                                    class="results-table--cell results-table--title cell-breakword">
                                                    Результативность</td>
                                            </tr>
                                            <tr class="results-table--row2">
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div class="results-btn-wrap flex">
                                        <div class="btn-result">
                                            <button
                                                class="btn-reset favorite-btn result-btn-look">Посмотреть
                                                результаты
                                                <svg width="24" height="14"
                                                    viewBox="0 0 24 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 2L12 12L22 2"
                                                        stroke-width="4"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                            <button
                                                class="btn-reset favorite-btn result-btn-hide hidden-total">Скрыть
                                                результаты
                                                <svg width="24" height="14"
                                                    viewBox="0 0 24 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 12L12 2L22 12"
                                                        stroke-width="4"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </button>

                                            <div
                                                class="results-tests-wrap hidden-total">
                                            </div>
                                        </div>

                                        <div class="btn-again flex">
                                            <a href="test.html"
                                                class="favorite-btn result-btn-again">Пройти
                                                тест
                                                заново</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="results-card">
                                <p
                                    class="profile-text profile-text--margin">Ниже
                                    ты можешь посмотреть результаты по каждому
                                    из заданий теста, а
                                    также при необходимости пройти его
                                    заново.</p>

                                <ul class="results-card--test">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <?php include_once 'system/footer.php'; ?>
        <script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>
        <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
    </body>

</html>

<?php
}