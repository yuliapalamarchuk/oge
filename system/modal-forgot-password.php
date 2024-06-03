<div id="modalForgotPassword" class="modal-forgot-password">
    <div class="modal-content-forgot-password">
      <span class="close-modal-reg close-modal close-modal-forgot-password" id="closeModalForgotPassword">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6.11612 5.88388C6.35054 5.64946 6.71081 5.5601 7.11767 5.63544C7.52454 5.71079 7.94467 5.94467 8.28565 6.28565L33.9986 31.9986C34.3396 32.3396 34.5735 32.7597 34.6488 33.1666C34.7242 33.5735 34.6348 33.9337 34.4004 34.1682C34.166 34.4026 33.8057 34.4919 33.3988 34.4166C32.992 34.3413 32.5718 34.1074 32.2309 33.7664L6.51788 8.05342C6.17691 7.71244 5.94302 7.29231 5.86767 6.88544C5.79233 6.47858 5.8817 6.1183 6.11612 5.88388Z"
            fill="#5C0C70" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M34.1161 6.11612C34.3505 6.35054 34.4399 6.71081 34.3646 7.11767C34.2892 7.52454 34.0553 7.94467 33.7144 8.28565L8.00137 33.9986C7.6604 34.3396 7.24026 34.5735 6.8334 34.6488C6.42653 34.7242 6.06626 34.6348 5.83184 34.4004C5.59742 34.166 5.50805 33.8057 5.5834 33.3988C5.65874 32.992 5.89263 32.5718 6.23361 32.2309L31.9466 6.51788C32.2876 6.17691 32.7077 5.94302 33.1146 5.86767C33.5214 5.79233 33.8817 5.8817 34.1161 6.11612Z"
            fill="#5C0C70" />
        </svg>
      </span>
      <div class="modal-content-forgot-content">
        <h2 class="modal-forgot-password-title">Восстановление пароля</h2>
        <p class="modal-forgot-password-text">Введите почту привязанную к
          аккаунту</p>
        <div class="modal-forgot-password-form-wrapper">
          <form action class="modal-forgot-password-form">
            <label for="email">E-mail:</label>
            <input type="email" name="email" placeholder="Введите E-mail" required>

            <button type="submit" class="modal-reg-btn modal-forgot-password-btn" id="forgotPassword2">Далее</button>
          </form>
        </div>

      </div>

    </div>

  </div>

  <!-- Модалка забыли пароль 2-->
  <div id="modalForgotPassword2" class="modal-forgot-password modal-forgot-password2">
    <div class="modal-content-forgot-password">
      <span class="close-modal-reg close-modal close-modal-forgot-password" id="closeModalForgotPassword">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6.11612 5.88388C6.35054 5.64946 6.71081 5.5601 7.11767 5.63544C7.52454 5.71079 7.94467 5.94467 8.28565 6.28565L33.9986 31.9986C34.3396 32.3396 34.5735 32.7597 34.6488 33.1666C34.7242 33.5735 34.6348 33.9337 34.4004 34.1682C34.166 34.4026 33.8057 34.4919 33.3988 34.4166C32.992 34.3413 32.5718 34.1074 32.2309 33.7664L6.51788 8.05342C6.17691 7.71244 5.94302 7.29231 5.86767 6.88544C5.79233 6.47858 5.8817 6.1183 6.11612 5.88388Z"
            fill="#5C0C70" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M34.1161 6.11612C34.3505 6.35054 34.4399 6.71081 34.3646 7.11767C34.2892 7.52454 34.0553 7.94467 33.7144 8.28565L8.00137 33.9986C7.6604 34.3396 7.24026 34.5735 6.8334 34.6488C6.42653 34.7242 6.06626 34.6348 5.83184 34.4004C5.59742 34.166 5.50805 33.8057 5.5834 33.3988C5.65874 32.992 5.89263 32.5718 6.23361 32.2309L31.9466 6.51788C32.2876 6.17691 32.7077 5.94302 33.1146 5.86767C33.5214 5.79233 33.8817 5.8817 34.1161 6.11612Z"
            fill="#5C0C70" />
        </svg>
      </span>
      <div class="modal-content-forgot-content">
        <h2 class="modal-forgot-password-title">Восстановление пароля</h2>
        <p class="modal-forgot-password-text">Введите код с почты</p>
        <div class="modal-forgot-password-form-wrapper">
          <form action class="modal-forgot-password-form">
            <input type="number" name="number" id="inputNumberforgotPass2" placeholder="_ _ _ _" required>
            <p class="modal-forgot-password-remind">Мы отправили проверочный
              код на почту по адресу
              qwertyy@yandex.ru. Если сообщение не пришло, повторите
              попытку.</p>
            <div class="timer">
              <div class="timer_text">
                <p>Отправить код еще раз</p>

                <div class="timer__items">
                  <p>через</p>
                  <div class="timer__item timer__minutes">00</div>
                  <div class="timer__item timer__seconds">00</div>
                </div>
              </div>

            </div>
            <button type="submit" class="modal-reg-btn modal-forgot-password-btn" id="forgotPassword3">Далее</button>
          </form>
        </div>

      </div>

    </div>

  </div>

  <!-- Модалка забыли пароль 3-->
  <div id="modalForgotPassword3" class="modal-forgot-password">
    <div class="modal-content-forgot-password">
      <span class="close-modal-reg close-modal close-modal-forgot-password" id="closeModalForgotPassword">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6.11612 5.88388C6.35054 5.64946 6.71081 5.5601 7.11767 5.63544C7.52454 5.71079 7.94467 5.94467 8.28565 6.28565L33.9986 31.9986C34.3396 32.3396 34.5735 32.7597 34.6488 33.1666C34.7242 33.5735 34.6348 33.9337 34.4004 34.1682C34.166 34.4026 33.8057 34.4919 33.3988 34.4166C32.992 34.3413 32.5718 34.1074 32.2309 33.7664L6.51788 8.05342C6.17691 7.71244 5.94302 7.29231 5.86767 6.88544C5.79233 6.47858 5.8817 6.1183 6.11612 5.88388Z"
            fill="#5C0C70" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M34.1161 6.11612C34.3505 6.35054 34.4399 6.71081 34.3646 7.11767C34.2892 7.52454 34.0553 7.94467 33.7144 8.28565L8.00137 33.9986C7.6604 34.3396 7.24026 34.5735 6.8334 34.6488C6.42653 34.7242 6.06626 34.6348 5.83184 34.4004C5.59742 34.166 5.50805 33.8057 5.5834 33.3988C5.65874 32.992 5.89263 32.5718 6.23361 32.2309L31.9466 6.51788C32.2876 6.17691 32.7077 5.94302 33.1146 5.86767C33.5214 5.79233 33.8817 5.8817 34.1161 6.11612Z"
            fill="#5C0C70" />
        </svg>
      </span>
      <div class="modal-content-forgot-content">
        <h2 class="modal-forgot-password-title">Восстановление пароля</h2>
        <p class="modal-forgot-password-text">Введите новый пароль</p>
        <div class="modal-forgot-password-form-wrapper">
          <form action class="modal-forgot-password-form">
            <input type="password" name="password" required>

            <button type="submit" class="modal-reg-btn modal-forgot-password-btn" id="forgotPassword2">Далее</button>
          </form>
        </div>

      </div>

    </div>

  </div>