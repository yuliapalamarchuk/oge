// Вкладки (табы)
const tabs = document.querySelectorAll(".lifehack_cards");
const contents = document.querySelectorAll(".lifehack_content");

for (let i = 0; i < tabs.length; i++) {
  if (i == 0) {
    tabs[i].classList.add('lifehack_cards--active');
    contents[i].classList.add('lifehack_content--active');
}

  tabs[i].addEventListener("click", (event) => {
    document.querySelectorAll(".lifehack_cards").forEach((el) => {
      if (el.classList.contains("lifehack_cards--active")) {
        el.classList.remove("lifehack_cards--active");
      }
    });
    tabs[i].classList.add("lifehack_cards--active");

    document.querySelectorAll(".lifehack_content").forEach((el) => {
      if (el.classList.contains("lifehack_content--active")) {
        el.classList.remove("lifehack_content--active");
      }
    });
    contents[i].classList.add("lifehack_content--active");
  });
}

// Открытие материалов в мобильной версии
const mediaQuery = window.matchMedia("(max-width: 768px)");
function handleTabletChange(e) {
  if (e.matches) {
    document.querySelector(".lifehack_information").style.display = "none";
    document.querySelectorAll(".lifehack_content").forEach((el) => {
      el.classList.remove("lifehack_content--active");
    });

    document.querySelectorAll(".lifehack_cards").forEach((el) => {
      el.classList.remove("lifehack_cards--active");
    });

    const cards = document.querySelectorAll(".lifehack_cards");
    const lifehack = document.querySelectorAll(".lifehack_content");

    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", (e) => {
        e.preventDefault();
        lifehack[i].classList.add("lifehack_content--active");
        document.querySelector(".lifehack_information").style.display = "block";
        document.querySelector(".lifehack_name").style.display = "none";
        document.querySelector(".hero").style.display = "none";
        document.querySelector(".back-wrap").style.display = "none";
        document.querySelector(".btn-wrap").style.display = "none";
        document.body.append(document.querySelector(".lifehack_information"));
        document.querySelector(".lifehack").style.marginBottom = "0";
        document.querySelector("header").style.display = "none";
        document.querySelector("footer").style.display = "none";
      });
    }

    const close = document.querySelectorAll(".lifehack_img_close");

    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener("click", (e) => {
        e.preventDefault();
        document.body.style = "";
        lifehack[i].classList.remove("lifehack_content--active");
        cards[i].classList.remove("lifehack_cards--active");
        document.querySelector(".lifehack_information").style.display = "none";
        document.querySelector(".lifehack_name").style.display = "block";
        document.querySelector(".hero").style.display = "block";
        document.querySelector(".back-wrap").style.display = "block";
        document.querySelector(".btn-wrap").style.display = "block";
        document.querySelector(".lifehack").style.marginBottom = "60px";
        document.querySelector("header").style.display = "block";
        document.querySelector("footer").style.display = "block";
      });
    }
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

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

const inputWithClear = document.querySelectorAll(".form-input");

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

// Модалка
const btnLifehack = document.querySelector(".btn-lifehack");
const modalOpen = document.querySelector(".modal-open");
const btnClose = document.querySelector(".btn-close");
let body = document.querySelector("body");

btnLifehack.onclick = () => {
  modalOpen.style.display = "flex";
  body.classList.add("noscroll");
};

btnClose.onclick = () => {
  modalOpen.style.display = "none";
  body.classList.remove("noscroll");
};

// Выпадающий список
const select = document.querySelector(".form-select");
const choices = new Choices(select, {
  searchEnabled: false,
  itemSelectText: "",
});

// Запрет ввода некоторых символов
const words = /[А-Яа-яёЁa-zA-Z ]/;
const letters = /[А-Яа-яёЁ]/;

const fio = document.querySelectorAll(".form-name");
const mail = document.querySelectorAll(".form-mail");

fio.forEach((el) => {
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

// Валидация
let validation = new JustValidate("#form");

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Введите Ф.И.О",
    },
    {
      rule: "customRegexp",
      value: /[a-zа-яё]/i,
      errorMessage: "Введите корректное Ф.И.О",
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
  ])

  .addField("#lifehack", [
    {
      rule: "required",
      errorMessage: "Напишите свой лайфхак",
    },
  ]);

// Модалка Спасибо
const form = document.querySelector(".form");
const btnForm = document.querySelector(".btn-form");
const thanksModal = document.querySelector(".thanks-modal");
const thanksClose = document.querySelector(".thanks-btn_close");

validation.onSuccess(() => {
  thanksModal.style.display = "flex";
  body.classList.add("noscroll");
});

thanksClose.onclick = () => {
  thanksModal.style.display = "none";
  modalOpen.style.display = "none";
  body.classList.remove("noscroll");
};

// const name = document.getElementById("name").value;
// const email = document.getElementById("email").value;
// const who = document.getElementById("who").value;
// const lifehack = document.getElementById("lifehack").value;

// Отправляем POST-запрос
validation.onSuccess(() => {
  btnForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    axios
      .post("/php/add_lhack.php", {
        params: {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          who: document.getElementById("who").value,
          lifehack: document.getElementById("lifehack").value,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  });
});

// Адаптив
const mediaQuery2 = window.matchMedia("(max-width: 1750px)");
function handleTabletChange2(e) {
  if (e.matches) {
    const stick3 = document.querySelector(".stick3-wrap");
    const stick2 = document.querySelector(".stick2-wrap");
    const stick1 = document.querySelector(".stick1-wrap");
    stick3.innerHTML = `<svg width="192" height="60" viewBox="0 0 192 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="-9" x2="192.33" y2="-9" transform="matrix(0.976032 0.217629 -0.217433 0.976075 0.347656 18.0322)" stroke="#FF4E00" stroke-width="18"/>
        </svg>`;
    stick2.innerHTML = `<svg width="191" height="69" viewBox="0 0 191 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="-9" x2="192.332" y2="-9" transform="matrix(0.964307 -0.264786 0.264554 0.964371 5.53125 68.7004)" stroke="#FF4E00" stroke-width="18"/>
        </svg>`;
    stick1.innerHTML = `<svg width="194" height="49" viewBox="0 0 194 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="-9" x2="192.328" y2="-9" transform="matrix(0.987446 0.157959 -0.157814 0.987469 0.601562 18.2998)" stroke="#FF4E00" stroke-width="18"/>
        </svg>`;
  }
}
mediaQuery2.addListener(handleTabletChange2);
handleTabletChange2(mediaQuery2);

// ------------------------

const mediaQuery3 = window.matchMedia("(max-width: 1200px)");
function handleTabletChange3(e) {
  if (e.matches) {
    const lifehackName = document.querySelector(".lifehack-name");
    lifehackName.innerHTML = `<svg class="lifehack_title" xmlns="http://www.w3.org/2000/svg" width="378" height="108" viewBox="0 0 378 108">
        <path id="path-title" d="M15.8613 53.1673C15.8613 53.1673 62.8415 73.1629 106.4 66.6658C148.635 60.3659 164.841 38.3201 207.513 39.9937C247.102 41.5463 258.324 62.537 293.096 66.6658C315.52 69.3282 372.07 61.399 372.07 61.399" stroke="#FFD983" stroke-width="80"/>
        <text dy="15%">
          <textpath fill="#5C0C70" href="#path-title" startoffset="20">Лайфхаки</textpath>
      </text>
    </svg>`;
  }
}
mediaQuery3.addListener(handleTabletChange3);
handleTabletChange3(mediaQuery3);

// --------------------------

const mediaQuery4 = window.matchMedia("(max-width: 1024px)");
function handleTabletChange4(e) {
  if (e.matches) {
    const lifehackName = document.querySelector(".lifehack-name");
    lifehackName.innerHTML = `<svg class="lifehack_title" xmlns="http://www.w3.org/2000/svg" width="294" height="79" viewBox="0 0 294 79">
      <path id="path-title" d="M11 39.0574C11 39.0574 47.7972 54.7746 81.9147 49.6675C114.995 44.7157 127.688 27.3872 161.111 28.7026C192.119 29.9231 200.908 46.4222 228.144 49.6675C245.707 51.7603 290 45.5277 290 45.5277" stroke="#FFD983" stroke-width="56"/>
        <text dy="20%">
          <textpath fill="#5C0C70" href="#path-title" startoffset="20">Лайфхаки</textpath>
      </text>
    </svg>`;
  }
}
mediaQuery4.addListener(handleTabletChange4);
handleTabletChange4(mediaQuery4);

// --------------------------

const mediaQuery5 = window.matchMedia("(max-width: 992px)");
function handleTabletChange5(e) {
  if (e.matches) {
    const stick3 = document.querySelector(".stick3-wrap");
    const stick2 = document.querySelector(".stick2-wrap");
    const stick1 = document.querySelector(".stick1-wrap");

    stick3.innerHTML = `<svg width="102" height="31" viewBox="0 0 102 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.21484 4.43066L101.036 26.6908" stroke="#FF4E00" stroke-width="8"/>
        </svg>`;
    stick2.innerHTML = `<svg width="101" height="36" viewBox="0 0 101 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.65625 31.3305L100.28 4.24658" stroke="#FF4E00" stroke-width="8"/>
        </svg>`;
    stick1.innerHTML = `<svg width="103" height="25" viewBox="0 0 103 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.06641 4.02441L102.054 20.1809" stroke="#FF4E00" stroke-width="8"/>
        </svg>`;
  }
}
mediaQuery5.addListener(handleTabletChange5);
handleTabletChange5(mediaQuery5);

// --------------------------

const mediaQuery6 = window.matchMedia("(max-width: 576px)");
function handleTabletChange6(e) {
  if (e.matches) {
    const heroBack = document.querySelector(".hero-back");
    heroBack.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46934 12.5301C3.32889 12.3895 3.25 12.1988 3.25 12.0001C3.25 11.8013 3.32889 11.6107 3.46934 11.4701L9.46934 5.47009C9.538 5.3964 9.6208 5.3373 9.7128 5.29631C9.8048 5.25532 9.90412 5.23328 10.0048 5.2315C10.1055 5.22972 10.2055 5.24825 10.2989 5.28597C10.3923 5.32369 10.4772 5.37984 10.5484 5.45105C10.6196 5.52227 10.6757 5.60711 10.7135 5.70049C10.7512 5.79388 10.7697 5.89391 10.7679 5.99461C10.7662 6.09532 10.7441 6.19463 10.7031 6.28663C10.6621 6.37863 10.603 6.46143 10.5293 6.53009L5.80934 11.2501L19.9993 11.2501C20.1983 11.2501 20.389 11.3291 20.5297 11.4698C20.6703 11.6104 20.7493 11.8012 20.7493 12.0001C20.7493 12.199 20.6703 12.3898 20.5297 12.5304C20.389 12.6711 20.1983 12.7501 19.9993 12.7501L5.80934 12.7501L10.5293 17.4701C10.603 17.5388 10.6621 17.6216 10.7031 17.7136C10.7441 17.8056 10.7662 17.9049 10.7679 18.0056C10.7697 18.1063 10.7512 18.2063 10.7135 18.2997C10.6757 18.3931 10.6196 18.4779 10.5484 18.5491C10.4772 18.6203 10.3923 18.6765 10.2989 18.7142C10.2055 18.7519 10.1055 18.7705 10.0048 18.7687C9.90412 18.7669 9.8048 18.7449 9.7128 18.7039C9.6208 18.6629 9.538 18.6038 9.46934 18.5301L3.46934 12.5301Z" fill="#5C0C70"/>
      </svg> Вернуться назад`;
  }
}
mediaQuery6.addListener(handleTabletChange6);
handleTabletChange6(mediaQuery6);

// ---------------------------

const mediaQuery7 = window.matchMedia("(max-width: 480px)");
function handleTabletChange7(e) {
  if (e.matches) {
    const lifehackName = document.querySelector(".lifehack-name");

    lifehackName.innerHTML = `<svg class="lifehack_title" xmlns="http://www.w3.org/2000/svg" width="264" height="80" viewBox="0 0 264 80">
    <path id="path-title" d="M12 39.5393C12 39.5393 44.5767 53.4538 74.7811 48.9325C104.067 44.5486 115.305 29.2076 144.894 30.3722C172.346 31.4527 180.127 46.0594 204.238 48.9325C219.787 50.7852 259 45.2675 259 45.2675" stroke="#FFD983" stroke-width="60"/>
        <text dy="15%">
          <textpath fill="#5C0C70" href="#path-title" startoffset="20">Лайфхаки</textpath>
      </text>
    </svg>`;
  }
}
mediaQuery7.addListener(handleTabletChange7);
handleTabletChange7(mediaQuery7);

// -------------------------------

const mediaQuery8 = window.matchMedia("(max-width: 375px)");
function handleTabletChange8(e) {
  if (e.matches) {
    const heroBackConteiner = document.querySelector(".hero-back_conteiner");
    const backWrap = document.querySelector(".back-wrap");
    heroBackConteiner.classList.add("wrapper", "hero-back_conteiner");
    backWrap.append(heroBackConteiner);
  }
}
mediaQuery8.addListener(handleTabletChange8);
handleTabletChange8(mediaQuery8);
