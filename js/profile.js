// Вкладки (табы)
const tabs = document.querySelectorAll(".profile-card");
const contents = document.querySelectorAll(".profile-content");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (event) => {
    document.querySelectorAll(".profile-card").forEach((el) => {
      if (el.classList.contains("profile-card--active")) {
        el.classList.remove("profile-card--active");
      }
    });
    tabs[i].classList.add("profile-card--active");

    // ------------------

    document.querySelectorAll(".profile-card-title").forEach((el) => {
      if (el.classList.contains("profile-card-title--active")) {
        el.classList.remove("profile-card-title--active");
      }
    });
    document
      .querySelectorAll(".profile-card-title")
      [i].classList.add("profile-card-title--active");

    //   ---------------------

    document.querySelectorAll(".icon-svg").forEach((el) => {
      if (el.classList.contains("icon-svg--active")) {
        el.classList.remove("icon-svg--active");
      }
    });
    document.querySelectorAll(".icon-svg")[i].classList.add("icon-svg--active");

    // ---------------------

    const iconSVG = document.querySelector(".icon-svg--especial");

    if (iconSVG.classList.contains("icon-svg--active")) {
      iconSVG.classList.add("icon-svg--especial_activ");
    } else {
      iconSVG.classList.remove("icon-svg--especial_activ");
    }

    // -------------------------

    document.querySelectorAll(".profile-content").forEach((el) => {
      if (el.classList.contains("profile-content--active")) {
        el.classList.remove("profile-content--active");
      }
    });
    contents[i].classList.add("profile-content--active");
  });
}

// Запрет ввода некоторых символов
const words = /[А-Яа-яёЁa-zA-Z ]/;
const letters = /[А-Яа-яёЁ]/;
// const telNumber = /\+?[0-9\s\-\+\(\)]+/;
// const telNumber = /^\d+$/;
const cyrillicMarks = /^[а-яёА-ЯЁ\s\-\,\.\!\?\:\;\"\(\)]+$/;
const noLatin = /^[а-яёА-ЯЁ\d\s.,:;!?\\"()№-]+$/;

const inputText = document.querySelectorAll(".input-profile--text");
const mail = document.querySelectorAll(".input-profile--mail");
const phone = document.querySelector(".input-profile--phone");
const city = document.querySelector(".input-city");
const school = document.querySelector(".input-school");

inputText.forEach((el) => {
  el.addEventListener("keypress", (e) => {
    if (!words.test(e.key)) {
      e.preventDefault();
    }
  });
});

mail.forEach((el) => {
  el.addEventListener("keypress", (e) => {
    if (letters.test(e.key)) {
      e.preventDefault();
    }
  });
});

city.addEventListener("keypress", (e) => {
  if (!cyrillicMarks.test(e.key)) {
    e.preventDefault();
  }
});

// phone.addEventListener("keypress", (e) => {
//   if (!telNumber.test(e.key)) {
//     e.preventDefault();
//   }
// });

school.addEventListener("keypress", (e) => {
  if (!noLatin.test(e.key)) {
    e.preventDefault();
  }
});

// Валидация
let validation = new JustValidate("#form-profile");

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

  .addField("#password", [
    {
      rule: "required",
      errorMessage: "Введите пароль",
    },
    {
      rule: "maxLength",
      value: 64,
      errorMessage: "Пароль не может содержать больше 64 символов",
    },
  ])

  .addField("#city", [
    // {
    //   rule: "required",
    //   errorMessage: "Введите город",
    // },
    {
      rule: "customRegexp",
      value: /^[а-яёА-ЯЁ\s\-\,\.\!\?\:\;\"\(\)]+$/,
      errorMessage: "Введите корректный город",
    },
    {
      rule: "maxLength",
      value: 50,
      errorMessage: "Название города не может содержать больше 50 символов",
    },
  ])

  // .addField("#phone", [
  //   // {
  //   //   rule: "required",
  //   //   errorMessage: "Введите ваш телефон",
  //   // },
  //   // {
  //   //   rule: "customRegexp",
  //   //   value: /^\d+$/,
  //   //   errorMessage: "Введите корректный номер телефона",
  //   // },
  //   // {
  //   //   rule: "maxLength",
  //   //   value: 10,
  //   //   errorMessage: "Номер телефона не может содержать больше 10 символов",
  //   // },
  // ])

  .addField("#school", [
    // {
    //   rule: "required",
    //   errorMessage: "Введите название школы",
    // },
    {
      rule: "customRegexp",
      value: /^[а-яёА-ЯЁ\d\s.,:;!?\\"()№-]+$/,
      errorMessage: "Введите корректное название школы",
    },
    {
      rule: "maxLength",
      value: 200,
      errorMessage: "Название школы не может содержать больше 200 символов",
    },
  ]);

// Валидация формы изменения пароля
let validationPassword = new JustValidate("#changePasswordModal-modal");
validationPassword
  .addField("#current-password", [
    {
      rule: "required",
      errorMessage: "Введите текущий пароль",
    },
    {
      rule: "maxLength",
      value: 64,
      errorMessage: "Пароль не может содержать больше 64 символов",
    },
  ])

  .addField("#new-password", [
    {
      rule: "required",
      errorMessage: "Введите новый пароль",
    },
    {
      rule: "maxLength",
      value: 64,
      errorMessage: "Пароль не может содержать больше 64 символов",
    },
  ]);

// Маска для ввода номера телефона
const maskOptions = {
    mask: '+7 (000) 000-00-00',
    // lazy: false
} 
const mask = new IMask(phone, maskOptions);

// Кнопка очистки инпутов
function updateButtonVisibility(input) {
  const button = input.nextElementSibling;
  if (input.value.length === 0) {
    button.classList.add("hidden");
  } else {
    button.classList.remove("hidden");
  }
}

function clearField(input) {
  input.value = "";
  updateButtonVisibility(input);
}

const inputWithClear = document.querySelectorAll(".input-profile--clear");

inputWithClear.forEach((item) => {
  item.addEventListener("input", () => {
    updateButtonVisibility(item);
  });

  const clearButton = item.nextElementSibling;
  clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    clearField(item);
  });
});

// Кнопка-глазик пароля
const passwordBtns = document.querySelectorAll(".btn-eye--off");
const inputPasswords = document.querySelectorAll(".form-profile--password");

for (let i = 0; i < passwordBtns.length; i++) {
  passwordBtns[i].addEventListener("click", function (e) {
    e.preventDefault();

    const inputPassword = inputPasswords[i];
    if (inputPassword.getAttribute("type") === "password") {
      inputPassword.setAttribute("type", "text");
      this.classList.add("btn-eye--on");
    } else {
      inputPassword.setAttribute("type", "password");
      this.classList.remove("btn-eye--on");
    }
  });
}

// Кнопка Изменить пароль
const mobileSmallMediaQueryList = window.matchMedia("(max-width: 480px)");

const passwordChange = document.querySelector(".password-change");
const passwordChangeClose = document.querySelector(".changePassword-btn-close");
const changePasswordModal = document.querySelector(".changePasswordModal");
let body = document.querySelector("body");
const headerBlur = document.querySelector("header");
const mainBlur = document.querySelector("main");
const footerBlur = document.querySelector("footer");

passwordChange.addEventListener("click", (e) => {
  e.preventDefault();
  changePasswordModal.classList.remove("hidden-total");
  headerBlur.classList.add("blur");
  mainBlur.classList.add("blur");
  footerBlur.classList.add("blur");

  if (mobileSmallMediaQueryList.matches) {
    body.classList.add("noscroll");
    headerBlur.classList.remove("blur");
    mainBlur.classList.remove("blur");
    footerBlur.classList.remove("blur");
  }
});

passwordChangeClose.addEventListener("click", (e) => {
  e.preventDefault();
  changePasswordModal.classList.add("hidden-total");
  headerBlur.classList.remove("blur");
  mainBlur.classList.remove("blur");
  footerBlur.classList.remove("blur");

  if (mobileSmallMediaQueryList.matches) {
    body.classList.remove("noscroll");
  }
});

// Кнопка "Показать больше" в избранном
const SHOW_INITIAL = 4;
const SHOW_MORE = 2;
const hidden = () => $items.slice(SHOW_INITIAL);
const $button = $(".favorite-btn-show");
const $buttonHide = $(".favorite-btn-hide");
const $items = $(".cards__item").hide();
const getHidden = () => $items.filter(":hidden");

if (hidden().length > 0) {
  $button.show();
}

showItems(SHOW_INITIAL);
$button.click(function () {
  showItems(SHOW_MORE);
  checkButtonVisibility();
  $buttonHide.show();
});

function showItems(count) {
  getHidden().slice(0, count).show();
}

function checkButtonVisibility() {
  if (getHidden().length === 0) {
    $button.hide();
    $buttonHide.css("margin-top", "0");
  }
}

//   Кнопка "Скрыть" в избранном
const showElementsButton = document.querySelector(".favorite-btn-show");
const hideElementsButton = document.querySelector(".favorite-btn-hide");
const listItems = document.querySelectorAll(".profile-cards li");

hideElementsButton.addEventListener("click", function () {
  for (let i = 4; i < listItems.length; i++) {
    listItems[i].style.display = "none";
    hideElementsButton.style.display = "none";
    showElementsButton.style.display = "block";
  }
});

// Удаление из избранного
// const deleteButtons = document.querySelectorAll('.card__favorite');

// deleteButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         const listItem = this.parentElement; // Получаем родительский элемент li
//         listItem.remove(); // Удаляем элемент из DOM
//     });
// });

// Вкладки результатов
const resultsBtn = document.querySelectorAll(".results-btn");
const resultsCard = document.querySelectorAll(".results-card");

for (let i = 0; i < resultsBtn.length; i++) {
  resultsBtn[i].addEventListener("click", (event) => {
    document.querySelectorAll(".results-btn").forEach((el) => {
      if (el.classList.contains("results-btn--active")) {
        el.classList.remove("results-btn--active");
      }
    });
    resultsBtn[i].classList.add("results-btn--active");

    document.querySelectorAll(".results-card").forEach((el) => {
      if (el.classList.contains("results-card--active")) {
        el.classList.remove("results-card--active");
      }
    });
    resultsCard[i].classList.add("results-card--active");
  });
}

// Показать и скрыть таблицу с результатами
const resultTest = document.querySelectorAll(".results-tests");
const taskTable = document.querySelectorAll(".task-table-wrap");

for (let i = 0; i < resultTest.length; i++) {
  resultTest[i].addEventListener("click", function () {
    const index = Array.from(resultTest).indexOf(this);

    taskTable.forEach((table, tableIndex) => {
      if (tableIndex === index) {
        table.classList.toggle("visible");
      } else {
        table.classList.remove("visible");
      }
    });
  });
}

// Кнопка Показать/скрыть результаты
const mobileMediaQueryList = window.matchMedia("(max-width: 768px)");
const resultLook = document.querySelector(".result-btn-look");
const resultHide = document.querySelector(".result-btn-hide");
const resultsAll = document.querySelector(".results-tests-wrap");
const btnAgain = document.querySelector(".btn-again");

resultLook.addEventListener("click", (e) => {
  e.preventDefault();
  resultsAll.classList.remove("hidden-total");
  resultHide.classList.remove("hidden-total");
  resultLook.classList.add("hidden-total");
  if (mobileMediaQueryList.matches) {
    btnAgain.classList.add("hidden-total");
  }
});

resultHide.addEventListener("click", (e) => {
  e.preventDefault();
  resultsAll.classList.add("hidden-total");
  resultHide.classList.add("hidden-total");
  resultLook.classList.remove("hidden-total");
  btnAgain.classList.remove("hidden-total");
});

// Результаты во вкладке Задания
$(document).ready(function () {
  $(".results-card--topic").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".results-card--hidden").slideUp(200);
      $(".card-svg").removeClass("minus").addClass("plus");
    } else {
      $(".card-svg").removeClass("minus").addClass("plus");
      $(this).find("i").removeClass("plus").addClass("minus");
      $(".results-card--topic").removeClass("active");
      $(this).addClass("active");
      $(".results-card--hidden").slideUp(200);
      $(this).siblings(".results-card--hidden").slideDown(200);
    }
  });
});

// Меню профиля
const btnMenu = document.querySelector(".profile-menu--icon");
const menuProfile = document.querySelector(".profile-left");
const menuProfileClose = document.querySelector(".profil-close");

btnMenu.addEventListener("click", (e) => {
  e.preventDefault();
  menuProfile.classList.toggle("appear");
});

menuProfileClose.addEventListener("click", (e) => {
  e.preventDefault();
  menuProfile.classList.remove("appear");
});
