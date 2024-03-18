//МОДАЛКА ВОЙТИ ИЛИ ЗАРЕГИСТРИРОВАТЬСЯ
const modalAuthReg = document.getElementById("modalAuthReg");
const openModalAuthReg = document.getElementById("openModalAuthReg");
const openModalAuthRegMobile = document.getElementById(
  "openModalAuthRegMobile"
);
const closeModalAuthReg = document.getElementById("closeModalAuthReg");

openModalAuthReg.onclick = function () {
  modalAuthReg.style.display = "block";
};

openModalAuthRegMobile.onclick = function () {
  modalAuthReg.style.display = "block";
};

closeModalAuthReg.onclick = function () {
  modalAuthReg.style.display = "none";
};
document.addEventListener("click", function (event) {
  if (
    !modalAuthReg.contains(event.target) &&
    event.target !== openModalAuthReg &&
    event.target !== openModalAuthRegMobile
  ) {
    modalAuthReg.style.display = "none";
  }
});

//ОТКРЫВАЕМ МОДАЛКУ РЕГИСТРАЦИИ ПО КЛИКУ НА КНОПКУ 'ЗАРЕГИСТРИРОВАТЬСЯ'
const modalReg = document.getElementById("modalReg");
const closeModalReg = document.getElementById("closeModalReg");
const openModalReg = document.getElementById("openModalReg");

openModalReg.onclick = () => {
  modalAuthReg.style.display = "none";
  modalReg.style.display = "block";
};

closeModalReg.onclick = () => {
  modalReg.style.display = "none";
};

document.addEventListener("click", function (event) {
  if (!modalReg.contains(event.target) && event.target !== openModalReg) {
    modalReg.style.display = "none";
  }
});

//ОТКРЫВАЕМ МОДАЛКУ АВТОРИЗАЦИИ ПО КЛИКУ НА КНОПКУ 'ВОЙТИ'
const modalAuth = document.getElementById("modalAuth");
console.log(modalAuth);
const closeModalAuth = document.getElementById("closeModalAuth");
console.log(closeModalAuth);
const openModalAuth = document.getElementById("openModalAuth");
console.log(openModalAuth);

openModalAuth.onclick = () => {
  modalAuthReg.style.display = "none";
  modalAuth.style.display = "block";
};

closeModalAuth.onclick = () => {
  modalAuth.style.display = "none";
};

document.addEventListener("click", function (event) {
  if (!modalAuth.contains(event.target) && event.target !== openModalAuth) {
    modalAuth.style.display = "none";
  }
});

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
