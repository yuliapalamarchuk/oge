// Модальные окна
const modalEnter = document.querySelector("#modalAuthReg"); // Модалка выбора
const modalReg = document.querySelector("#modalReg"); //Модалка регистрации
const modalAuth = document.querySelector("#modalAuth"); // Модалка входа
const modalForgotPassword = document.querySelector("#modalForgotPassword");
const modalForgotPassword2 = document.querySelector("#modalForgotPassword2");
const modalForgotPassword3 = document.querySelector("#modalForgotPassword3");
const modalConfirmReg = document.querySelector("#modalConfirmReg");

// Кнопки
const closeModal = document.querySelectorAll(".close-modal"); // Кнопка закрытия
const openModalAuthReg = document.querySelector("#openModalAuthReg"); // Кнопка "Вход"
const openModalReg = document.querySelector("#openModalReg"); // Кнопка "Зарегистрироваться"
const openModalAuth = document.querySelector("#openModalAuth"); // Кнопка "Войти"
const switchToReg = document.querySelector("#switchToReg"); // Кнопка "Перейти к регистрации"
const switchtoLogin = document.querySelector("#switchtoLogin"); // Кнопка "Перейти ко входу"
const openModalAuthRegMobile = document.querySelector(
  "#openModalAuthRegMobile"
); //Кнопка "вход" на мобилке
const forgotPassword = document.querySelector("#forgotPassword"); //Кнопка забыли пароль?
const forgotPassword2 = document.querySelector("#forgotPassword2");
const forgotPassword3 = document.querySelector("#forgotPassword3");
const openModalConfirmReg = document.querySelector("#openModalConfirmReg");

//Хедер блюр
const headerBlur = document.querySelector("header");
const mainBlur = document.querySelector("main");
const footerBlur = document.querySelector("footer");

// Ф-ия открытия модального окна
const openModalFunc = (modal) => {
  closeModalFunc();
  modal.classList.toggle("showModal");
  headerBlur.classList.add("blur");
  mainBlur.classList.add("blur");
  footerBlur.classList.add("blur");
};

// Ф-ия закртыия модального окна
const closeModalFunc = () => {
  let openModal = document.querySelector(".showModal");
  if (openModal) openModal.classList.toggle("showModal");
  headerBlur.classList.remove("blur");
  mainBlur.classList.remove("blur");
  footerBlur.classList.remove("blur");
};

//Вешаем слушатели события на кнопки

closeModal.forEach((item) => {
  item.addEventListener("click", () => {
    closeModalFunc();
  });
});

openModalAuthReg.addEventListener("click", () => {
  openModalFunc(modalEnter);
});
openModalReg.addEventListener("click", () => {
  openModalFunc(modalReg);
});
openModalAuth.addEventListener("click", () => {
  openModalFunc(modalAuth);
});
switchToReg.addEventListener("click", () => {
  openModalFunc(modalReg);
});
switchtoLogin.addEventListener("click", () => {
  openModalFunc(modalAuth);
});
openModalAuthRegMobile.addEventListener("click", () => {
  openModalFunc(modalEnter);
});
forgotPassword.addEventListener("click", () => {
  openModalFunc(modalForgotPassword);
});
// forgotPassword2.addEventListener("click", () => {
//   openModalFunc(modalForgotPassword2);
// });
forgotPassword3.addEventListener("click", () => {
  openModalFunc(modalForgotPassword3);
});
// openModalConfirmReg.addEventListener("click", () => {
//   openModalFunc(modalConfirmReg);
// });

//ПО КЛИКУ НА ГЛАЗИК ПОКАЗЫВАЕТ И СКРЫВАЕТ ПАРОЛЬ

$("body").on("click", ".password-control", function () {
  if ($("#password-input").attr("type") == "password") {
    $(this).addClass("view");
    $("#password-input").attr("type", "text");
  } else {
    $(this).removeClass("view");
    $("#password-input").attr("type", "password");
  }
  return false;
});

$("body").on("click", ".password-control2", function () {
  if ($("#confirmPassword").attr("type") == "password") {
    $(this).addClass("view");
    $("#confirmPassword").attr("type", "text");
  } else {
    $(this).removeClass("view");
    $("#confirmPassword").attr("type", "password");
  }
  return false;
});

$("body").on("click", ".password-control3", function () {
  if ($("#password-auth").attr("type") == "password") {
    $(this).addClass("view");
    $("#password-auth").attr("type", "text");
  } else {
    $(this).removeClass("view");
    $("#password-auth").attr("type", "password");
  }
  return false;
});

//Ограничиваем ввод количества чисел в модалке забыли пароль 2

const inputNumberforgotPass2 = document.querySelector(
  "#inputNumberforgotPass2"
);

document
  .getElementById("inputNumberforgotPass2")
  .addEventListener("input", function () {
    // Получаем значение из поля ввода
    let inputValue = this.value;
    // Ограничиваем количество символов
    let maxLength = 4; // Например, ограничить ввод тремя символами

    if (inputValue.length > maxLength) {
      // Если количество символов превышает допустимое, обрезаем введенное значение
      this.value = inputValue.slice(0, maxLength);
    }
  });

// Обратный отсчет в модалке забыли пароль 2
forgotPassword2.addEventListener("click", function () {
  openModalFunc(modalForgotPassword2);

  const deadline = new Date(new Date().getTime() + 60 * 1000);
  let timerId = null;

  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }

    // Calculate minutes and seconds
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    // Display minutes and seconds
    $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
  }

  // Select HTML elements for minutes and seconds
  const $minutes = document.querySelector(".timer__minutes");
  const $seconds = document.querySelector(".timer__seconds");

  // Initialize timer
  countdownTimer();

  // Start the countdown timer
  timerId = setInterval(countdownTimer, 1000);
});

// Валидация;

let form = document.getElementById("form-validate");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let validation = new JustValidate("#form-validate");
  let isValid = validation.validate();

  validation
    .addField("#surname", [
      {
        rule: "required",
        errorMessage: "Введите фамилию",
      },
      {
        rule: "customRegexp",
        value: /[a-zа-яё]/i,
        errorMessage: "Введите корректную фамилию",
      },
      {
        rule: "maxLength",
        value: 100,
        errorMessage: "Фамилия не может содержать больше 100 символов",
      },
    ])

    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Введите имя",
      },
      {
        rule: "customRegexp",
        value: /[a-zа-яё]/i,
        errorMessage: "Введите корректное имя",
      },
      {
        rule: "maxLength",
        value: 100,
        errorMessage: "Имя не может содержать больше 100 символов",
      },
    ])

    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Введите E-mail",
      },
      {
        rule: "email",
        errorMessage: "Введите корректный E-mail",
      },
      {
        rule: "maxLength",
        value: 256,
        errorMessage: "E-mail не может содержать больше 256 символов",
      },
    ])

    .addField("#password-input", [
      {
        rule: "required",
        errorMessage: "Введите пароль",
      },
      {
        rule: "maxLength",
        value: 64,
        errorMessage: "Пароль не может содержать больше 64 символов",
      },
    ]);

  if (isValid) {
    openModalConfirmReg.addEventListener("click", () => {
      openModalFunc(modalConfirmReg);
    });
  }
});

// let validation = new JustValidate("#form-validate", {
//   rules: {
//     surname: {
//       required: true,
//       maxLength: 100,
//       custom: /[a-zа-яё]/i,
//     },
//     name: {
//       required: true,
//       maxLength: 100,
//       custom: /[a-zа-яё]/i,
//     },
//     email: {
//       required: true,
//       email: true,
//       maxLength: 256,
//     },
//     "password-input": {
//       required: true,
//       maxLength: 64,
//     },
//   },
//   messages: {
//     surname: {
//       required: "Введите фамилию",
//       maxLength: "Фамилия не может содержать больше 100 символов",
//       custom: "Введите корректную фамилию",
//     },
//     name: {
//       required: "Введите имя",
//       maxLength: "Имя не может содержать больше 100 символов",
//       custom: "Введите корректное имя",
//     },
//     email: {
//       required: "Введите E-mail",
//       email: "Введите корректный E-mail",
//       maxLength: "E-mail не может содержать больше 256 символов",
//     },
//     "password-input": {
//       required: "Введите пароль",
//       maxLength: "Пароль не может содержать больше 64 символов",
//     },
//   },
// });

// let form = document.getElementById("form-validate");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   if (validation.validate()) {
//     openModalFunc(modalConfirmReg);
//   }
// });
