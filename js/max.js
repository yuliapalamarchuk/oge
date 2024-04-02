// Модальные окна
const modalEnter = document.querySelector("#modalAuthReg"); // Модалка выбора
const modalReg = document.querySelector("#modalReg"); //Модалка регистрации
const modalAuth = document.querySelector("#modalAuth"); // Модалка входа
const modalForgotPassword = document.querySelector("#modalForgotPassword");

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
