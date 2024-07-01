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
const phoneInput = document.querySelector(".input-profile--phone");
const cityInput = document.querySelector(".input-city");
const schoolInput = document.querySelector(".input-school");

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

cityInput.addEventListener("keypress", (e) => {
  if (!cyrillicMarks.test(e.key)) {
    e.preventDefault();
  }
});

// phoneInput.addEventListener("keypress", (e) => {
//   if (!telNumber.test(e.key)) {
//     e.preventDefault();
//   }
// });

schoolInput.addEventListener("keypress", (e) => {
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
  ])
  // Отправка данных пользователя при заполнении своего профиля в лк
  .onSuccess(() => {
    const surname = document.getElementById("surname").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const phone = document.getElementById("phone").value;
    const school = document.getElementById("school").value;

    axios
      .post("/php/update_profile.php", {
        surname: surname,
        name: name,
        email: email,
        city: city,
        phone: phone,
        school: school,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Ошибка обновления профиля:", error);
      });
  });

const profileForm = document.querySelector(".form-profile");

// Отправляем данные по обновлению профиля
profileForm.addEventListener("submit", async (event) => {
  event.preventDefault();
});

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
  ])
  // Отправка данных для изменения пароля
  .onSuccess(() => {
    const currentPass = document.getElementById("current-password").value;
    const newPass = document.getElementById("new-password").value;
    const passError = document.querySelector(".password-error");
    const passSuccess = document.querySelector(".password-success");

    axios
      .post("/php/change_pass.php", {
        currentPass: currentPass,
        newPass: newPass,
      })
      .then((response) => {
        console.log(response.data);

        if (response.data == "success") {
          passSuccess.classList.remove("hidden-total");
        } else if (response.data == "error.wrong_password") {
          passSuccess.classList.add("hidden-total");
          passError.classList.remove("hidden-total");
        }
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  });

const changePass = document.querySelector(".changePasswordModal-form");

// Отправляем данные по изменению пароля
changePass.addEventListener("submit", async (event) => {
  event.preventDefault();
});

// Маска для ввода номера телефона
const maskOptions = {
  mask: "+7 (000) 000-00-00",
  // lazy: false
};
const mask = new IMask(phoneInput, maskOptions);

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
const passwordChangeClose = document.querySelector(".changePassword-btn-close");
const passwordChange = document.querySelector(".password-change");
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
