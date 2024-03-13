//МОДАЛКА РЕГИСТРАЦИИ
// // Получаем элементы модального окна и кнопки открытия
// const modal = document.getElementById("myModal");
// console.log(modal);
// const btn = document.getElementById("openModalReg");
// const btnMobile = document.getElementById("openModalRegMobile");
// console.log(btn);
// const span = document.getElementsByClassName("close-reg")[0];
// console.log(span);

// // Открываем модальное окно при клике на кнопку
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// btnMobile.onclick = function () {
//   modal.style.display = "block";
// };

// // Закрываем модальное окно при клике на крестик
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // Закрываем модальное окно при клике вне его области
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

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
// window.onclick = function (event) {
//   if (event.target == modalAuthReg) {
//     modalAuthReg.style.display = "none";
//   }
// };

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

// window.onclick = function (event) {
//     if (event.target == modalReg) {
//         modalReg.style.display = "none";
//     }
//   };
