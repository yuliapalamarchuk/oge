//МОДАЛКА ВОЙТИ ИЛИ ЗАРЕГИСТРИРОВАТЬСЯ
const modalAuthReg = document.getElementById("modalAuthReg");
const openModalAuthReg = document.getElementById("openModalAuthReg");
const openModalAuthRegMobile = document.getElementById("openModalAuthRegMobile");
const closeModalAuthReg = document.getElementById("closeModalAuthReg");

modalAuthReg.classList.add("display-none");

openModalAuthReg.onclick = function () {
  modalAuthReg.classList.remove("display-none");
};

openModalAuthRegMobile.onclick = function () {
  modalAuthReg.classList.remove("display-none");
};

closeModalAuthReg.onclick = function () {
  modalAuthReg.classList.add("display-none");
};
document.addEventListener("click", function (event) {
  if (
    !modalAuthReg.contains(event.target) &&
    event.target !== openModalAuthReg &&
    event.target !== openModalAuthRegMobile
  ) {
    modalAuthReg.classList.add("display-none");
  }
});

//ОТКРЫВАЕМ МОДАЛКУ РЕГИСТРАЦИИ ПО КЛИКУ НА КНОПКУ 'ЗАРЕГИСТРИРОВАТЬСЯ'
const modalReg = document.getElementById("modalReg");
const closeModalReg = document.getElementById("closeModalReg");
const openModalReg = document.getElementById("openModalReg");

modalReg.classList.add("display-none");

openModalReg.onclick = () => {
  modalAuthReg.classList.add("display-none");
  modalReg.classList.remove("display-none");
};

closeModalReg.onclick = () => {
  modalReg.classList.add("display-none");
};

document.addEventListener("click", function (event) {
  if (!modalReg.contains(event.target) && event.target !== openModalReg) {
    modalReg.classList.add("display-none");
  }
});

//ОТКРЫВАЕМ МОДАЛКУ АВТОРИЗАЦИИ ПО КЛИКУ НА КНОПКУ 'ВОЙТИ'
const modalAuth = document.getElementById("modalAuth");
const closeModalAuth = document.getElementById("closeModalAuth");
const openModalAuth = document.getElementById("openModalAuth");

modalAuth.classList.add("display-none");

openModalAuth.onclick = () => {
  modalAuthReg.classList.add("display-none");
  modalAuth.classList.remove("display-none");
};

closeModalAuth.onclick = () => {
  modalAuth.classList.add("display-none");
};

document.addEventListener("click", function (event) {
  if (!modalAuth.contains(event.target) && event.target !== openModalAuth) {
    modalAuth.classList.add("display-none");
  }
});

//ПЕРЕХОДЫ МЕЖДУ МОДАЛКОЙ РЕГИСТРАЦИИ И АВТОРИЗАЦИИ ПО ССЫЛКАМ ВНИЗУ
const switchtoLogin = document.getElementById("switchtoLogin");

switchtoLogin.addEventListener("click", function (event) {
  event.preventDefault();
  modalReg.classList.add("display-none");
  modalAuth.style.display = "block";
});

const switchToReg = document.getElementById("switchToReg");

switchToReg.addEventListener("click", function (event) {
  event.preventDefault();
  modalAuth.classList.add("display-none");
  modalReg.style.display = "block";
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
