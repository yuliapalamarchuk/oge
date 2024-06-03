<div id="modalReg" class="modal-reg">
    <div class="modal-content-reg">
      <span class="close-modal-reg close-modal" id="closeModalReg">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6.11612 5.88388C6.35054 5.64946 6.71081 5.5601 7.11767 5.63544C7.52454 5.71079 7.94467 5.94467 8.28565 6.28565L33.9986 31.9986C34.3396 32.3396 34.5735 32.7597 34.6488 33.1666C34.7242 33.5735 34.6348 33.9337 34.4004 34.1682C34.166 34.4026 33.8057 34.4919 33.3988 34.4166C32.992 34.3413 32.5718 34.1074 32.2309 33.7664L6.51788 8.05342C6.17691 7.71244 5.94302 7.29231 5.86767 6.88544C5.79233 6.47858 5.8817 6.1183 6.11612 5.88388Z"
            fill="#5C0C70" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M34.1161 6.11612C34.3505 6.35054 34.4399 6.71081 34.3646 7.11767C34.2892 7.52454 34.0553 7.94467 33.7144 8.28565L8.00137 33.9986C7.6604 34.3396 7.24026 34.5735 6.8334 34.6488C6.42653 34.7242 6.06626 34.6348 5.83184 34.4004C5.59742 34.166 5.50805 33.8057 5.5834 33.3988C5.65874 32.992 5.89263 32.5718 6.23361 32.2309L31.9466 6.51788C32.2876 6.17691 32.7077 5.94302 33.1146 5.86767C33.5214 5.79233 33.8817 5.8817 34.1161 6.11612Z"
            fill="#5C0C70" />
        </svg>
      </span>
      <div class="modal-reg-display-flex">
        <div class="modal-reg-img-wrapper">
          <img src="img/modal-reg-img.webp" alt="dragon">
        </div>

        <div class="modal-reg-form-wrapper">
          <h2 class="modal-reg-title">Регистрация</h2>
          <form action="#" class="modal-reg-form" id="form-validate">

            <label class="reg-label">
              <span>Фамилия</span>
              <input class type="text" id="surname" name="surname" placeholder="Введите Фамилию" tabindex="1" required>
            </label>

            <label class="reg-label">
              <span>Имя</span>
              <input type="text" id="name" name="name" placeholder="Введите Имя" tabindex="2" required>
            </label>

            <label class="reg-label">
              <span>E-mail</span>
              <input type="email" id="email" name="email" placeholder="Введите E-mail" tabindex="3" required>
            </label>

            <label class="reg-label">
              <span>Пароль</span>
              <input type="password" id="password-input" name="password-input" class="password"
                placeholder="Введите пароль" tabindex="4" required>
              <!-- <a href="#" class="password-control"></a> -->
              <button class="password-control"></button>
            </label>

            <label class="reg-label">
              <span>Подтвердите пароль</span>
              <input type="password" id="confirmPassword" name="confirmPassword" tabindex="5"
                placeholder="Подтвердите пароль" required>
              <a href="#" class="password-control2"></a>
            </label>

            <div class="modal-reg-button-wrapper">
              <button class="modal-reg-btn" id="openModalConfirmReg">Зарегистрироваться</button>
            </div>
          </form>

          <p class="modal-reg-privacy-policy">
            Нажимая на кнопку «Зарегистрироваться», вы подтверждаете, что
            ознакомлены с <a target="_blank" href="docs/soglasie.pdf">Пользовательским
              соглашением</a> и <a target="_blank" href="docs/policy.pdf">Политикой о персональных
              данных</a>
          </p>
          <p class="modal-reg-or">Или</p>
          <div class="modal-auth-reg-social-icons">
            <!-- <a href="https://www.google.com" target="_blank">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="white" />
                  <path
                    d="M34.4397 20.8205C34.4397 19.6335 34.3415 18.7672 34.1287 17.8689H20.2969V23.2268H28.4159C28.2522 24.5583 27.3683 26.5635 25.4039 27.9109L25.3764 28.0903L29.7498 31.4105L30.0528 31.4401C32.8355 28.9216 34.4397 25.2159 34.4397 20.8205Z"
                    fill="#4285F4" />
                  <path
                    d="M20.2935 34.9374C24.2711 34.9374 27.6103 33.654 30.0494 31.4402L25.4006 27.911C24.1566 28.7612 22.4869 29.3547 20.2935 29.3547C16.3978 29.3547 13.0912 26.8362 11.9125 23.3552L11.7398 23.3696L7.19228 26.8186L7.13281 26.9806C9.5554 31.6968 14.5316 34.9374 20.2935 34.9374Z"
                    fill="#34A853" />
                  <path
                    d="M11.9136 23.3556C11.6026 22.4572 11.4226 21.4947 11.4226 20.5001C11.4226 19.5055 11.6026 18.543 11.8973 17.6447L11.889 17.4533L7.28453 13.949L7.13389 14.0192C6.13542 15.9764 5.5625 18.174 5.5625 20.5001C5.5625 22.8261 6.13542 25.0238 7.13389 26.9809L11.9136 23.3556Z"
                    fill="#FBBC05" />
                  <path
                    d="M20.2936 11.645C23.0599 11.645 24.926 12.816 25.99 13.7946L30.1477 9.81625C27.5942 7.49021 24.2712 6.0625 20.2936 6.0625C14.5316 6.0625 9.55541 9.30289 7.13281 14.0191L11.8962 17.6446C13.0913 14.1635 16.3978 11.645 20.2936 11.645Z"
                    fill="#EB4335" />
                </svg>

              </a> -->
            <button class="vk_auth" target="_blank">

              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#5181B8" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M32.7189 13.7789C32.9044 13.1608 32.7189 12.7065 31.8366 12.7065H28.9193C28.1774 12.7065 27.8357 13.0989 27.6502 13.5317C27.6502 13.5317 26.1665 17.1478 24.0648 19.4967C23.3848 20.1766 23.0758 20.3927 22.7049 20.3927C22.5194 20.3927 22.251 20.1766 22.251 19.5586V13.7789C22.251 13.037 22.0358 12.7065 21.4175 12.7065H16.8331C16.3697 12.7065 16.0908 13.0508 16.0908 13.3771C16.0908 14.0804 17.1415 14.2425 17.2499 16.2205V20.5167C17.2499 21.4586 17.0798 21.6295 16.7089 21.6295C15.7199 21.6295 13.3144 17.9969 11.8874 13.8408C11.6077 13.0329 11.3272 12.7065 10.5816 12.7065H7.6643C6.83077 12.7065 6.66406 13.0989 6.66406 13.5317C6.66406 14.3044 7.65325 18.137 11.2693 23.2057C13.6803 26.6669 17.0765 28.5436 20.1672 28.5436C22.0218 28.5436 22.251 28.1268 22.251 27.4089V24.7927C22.251 23.9592 22.4267 23.7929 23.0137 23.7929C23.4467 23.7929 24.1884 24.0092 25.9194 25.6781C27.8974 27.6559 28.2233 28.5436 29.336 28.5436H32.2534C33.0869 28.5436 33.5037 28.1268 33.2632 27.3043C33.0002 26.4845 32.0558 25.2955 30.8026 23.8856C30.1227 23.0819 29.1026 22.2165 28.7938 21.7839C28.361 21.2275 28.4846 20.9803 28.7938 20.4861C28.7938 20.4861 32.348 15.4791 32.7189 13.7791V13.7789Z"
                  fill="white" />
              </svg>

            </button>
            <!-- <div class="mailru-login-button" data-ui="userpic login_as"
                data-type="login" style="width: 300px; height: 48px;"></div> -->
            <a href="https://www.mail.ru" target="_blank">

              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#005FF9" />
                <path
                  d="M24.0079 20.0001C24.0079 22.2115 22.2088 24.0106 19.9974 24.0106C17.786 24.0106 15.9869 22.2115 15.9869 20.0001C15.9869 17.7887 17.786 15.9896 19.9974 15.9896C22.2088 15.9896 24.0079 17.7887 24.0079 20.0001ZM19.9974 6.66675C12.645 6.66675 6.66406 12.6477 6.66406 20.0001C6.66406 27.3525 12.645 33.3334 19.9974 33.3334C22.6907 33.3334 25.2879 32.5315 27.5079 31.0144L27.546 30.9877L25.7498 28.9001L25.7193 28.9191C24.0107 30.0191 22.0317 30.6001 19.9974 30.6001C14.1526 30.6001 9.3974 25.8448 9.3974 20.0001C9.3974 14.1553 14.1526 9.40008 19.9974 9.40008C25.8422 9.40008 30.5974 14.1553 30.5974 20.0001C30.5974 20.7572 30.5126 21.5239 30.3479 22.2782C30.0126 23.6544 29.0488 24.0753 28.326 24.0201C27.5984 23.961 26.7469 23.4429 26.7412 22.1744V21.2077V20.0001C26.7412 16.281 23.7164 13.2563 19.9974 13.2563C16.2783 13.2563 13.2536 16.281 13.2536 20.0001C13.2536 23.7191 16.2783 26.7439 19.9974 26.7439C21.8041 26.7439 23.4983 26.0382 24.7755 24.7534C25.5183 25.9096 26.7288 26.6344 28.1069 26.7448C28.225 26.7544 28.346 26.7591 28.465 26.7591C29.4355 26.7591 30.3964 26.4344 31.1717 25.8467C31.9707 25.2391 32.5679 24.362 32.8974 23.3077C32.9498 23.1372 33.0469 22.7477 33.0469 22.7448L33.0498 22.7306C33.2441 21.8848 33.3307 21.042 33.3307 20.0001C33.3307 12.6477 27.3498 6.66675 19.9974 6.66675Z"
                  fill="white" />
              </svg>

            </a>
            <a href="#" target="_blank">

              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#FF0000" />
                <path
                  d="M24.9288 6.66675H20.8883C16.9179 6.66675 13.551 9.68875 13.551 15.556C13.551 19.0758 15.1816 21.6709 18.0876 22.9511L12.6648 32.7647C12.4873 33.0851 12.6648 33.3334 12.9482 33.3334H15.4648C15.6775 33.3334 15.8198 33.2626 15.8906 33.0851L20.8172 23.4492H22.5895V33.0851C22.5895 33.1911 22.6955 33.3334 22.8373 33.3334H25.0352C25.2478 33.3334 25.3186 33.2268 25.3186 33.05V7.02222C25.3188 6.77331 25.1772 6.66675 24.9288 6.66675ZM22.5894 21.1738H21.1008C18.7617 21.1738 16.4935 19.4671 16.4935 15.2004C16.4935 10.7553 18.6199 8.94216 20.7816 8.94216H22.5895V21.1738H22.5894Z"
                  fill="white" />
              </svg>

            </a>
          </div>
          <p class="modal-reg-already-have-account">Уже есть аккаунт? <a href="#" id="switchtoLogin"><b>Войдите</b> </a>
          </p>
        </div>

      </div>

    </div>

  </div>


  <div id="modalConfirmReg" class="modal-reg">
    <div class="modal-content-reg">
      <span class="close-modal-reg close-modal" id="closeModalReg">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6.11612 5.88388C6.35054 5.64946 6.71081 5.5601 7.11767 5.63544C7.52454 5.71079 7.94467 5.94467 8.28565 6.28565L33.9986 31.9986C34.3396 32.3396 34.5735 32.7597 34.6488 33.1666C34.7242 33.5735 34.6348 33.9337 34.4004 34.1682C34.166 34.4026 33.8057 34.4919 33.3988 34.4166C32.992 34.3413 32.5718 34.1074 32.2309 33.7664L6.51788 8.05342C6.17691 7.71244 5.94302 7.29231 5.86767 6.88544C5.79233 6.47858 5.8817 6.1183 6.11612 5.88388Z"
            fill="#5C0C70" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M34.1161 6.11612C34.3505 6.35054 34.4399 6.71081 34.3646 7.11767C34.2892 7.52454 34.0553 7.94467 33.7144 8.28565L8.00137 33.9986C7.6604 34.3396 7.24026 34.5735 6.8334 34.6488C6.42653 34.7242 6.06626 34.6348 5.83184 34.4004C5.59742 34.166 5.50805 33.8057 5.5834 33.3988C5.65874 32.992 5.89263 32.5718 6.23361 32.2309L31.9466 6.51788C32.2876 6.17691 32.7077 5.94302 33.1146 5.86767C33.5214 5.79233 33.8817 5.8817 34.1161 6.11612Z"
            fill="#5C0C70" />
        </svg>
      </span>
      <div>

        <div class="modal-reg-form-wrapper">
          <h2 class="modal-reg-title">Подтверждение регистрации</h2>

          <p class="modal-reg-confirm-text">
            Подтверждение учётной записи, ознакомьтесь с письмом, отправленным
            на указанную электронную почту
          </p>

        </div>

      </div>

    </div>

  </div>