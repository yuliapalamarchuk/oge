const resultsTestsWrap = document.querySelector(".results-tests-wrap");

// Аксиосы на вывод результатов теста
let test = {};
let question = {};
let fio = {};

window.addEventListener("load", () => {
  axios
    .all([
      axios.get("/php/lktest.php", {
        params: {
          userID: localStorage.getItem("userID"),
        },
      }),
      axios.get("/php/lkquestions.php", {
        params: {
          userID: localStorage.getItem("userID"),
        },
      }),
      axios.get("/php/get_profile.php", {
        params: {
          userID: localStorage.getItem("userID"),
        },
      }),
    ])
    .then(
      axios.spread(function (testData, questionData, fioData) {
        test = testData.data;
        question = questionData.data;
        fio = fioData.data;

        createResults();

        console.log(testData, questionData, fioData.data);
      })
    );
});

function createResults() {
  // Данные пользователя
  const profileFio = document.querySelector(".profile-fio");
  const surname = document.getElementById("surname");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const city = document.getElementById("city");
  const phone = document.getElementById("phone");
  const school = document.getElementById("school");

  profileFio.textContent = fio[0].surname + " " + fio[0].name;
  surname.value = fio[0].surname;
  name.value = fio[0].name;
  email.value = fio[0].email;
  city.value = fio[0].city;
  phone.value = fio[0].phone;
  school.value = fio[0].school;

  // Вызываем updateButtonVisibility после установки значений
  updateButtonVisibility(surname);
  updateButtonVisibility(name);
  updateButtonVisibility(email);
  updateButtonVisibility(city);
  updateButtonVisibility(phone);
  updateButtonVisibility(school);

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

  // Общий тест
  //Блоки в зависимости от того, есть баллы или нет (проходили тесты или нет)
  const resultNoPoints = document.querySelector(".result-no-points");
  const resultWithPoints = document.querySelector(".result-with-points");

  if (test == "empty") {
    resultNoPoints.classList.remove("hidden-total");
    resultWithPoints.classList.add("hidden-total");
  } else {
    resultNoPoints.classList.add("hidden-total");
    resultWithPoints.classList.remove("hidden-total");
  }

  //   Выводим значения в удобном виде
  const groupedData = test.reduce((acc, item) => {
    const timestamp = item.data;
    if (!acc[timestamp]) {
      acc[timestamp] = [];
    }
    acc[timestamp].push(item);
    return acc;
  }, {});

  // Получаем массив дат из ключей объекта
  const dates = Object.keys(groupedData);

  // Переворачиваем массив с датами
  dates.reverse();

  // Создаем новый объект с перевернутым порядком дат
  const reversedGroupedData = {};
  dates.forEach((date) => {
    reversedGroupedData[date] = groupedData[date];
  });

  //Создаем таблицу с результатами теста
  for (const date in reversedGroupedData) {
    //Название
    const resultBlock = document.createElement("div");
    const resultsTests = document.createElement("div");
    const resultsTestsName = document.createElement("p");
    const resultsTestsDate = document.createElement("time");

    resultBlock.classList.add("result-block");
    resultsTests.classList.add("results-tests", "flex");
    resultsTestsName.classList.add("results-tests-name");
    resultsTestsDate.classList.add("results-tests-date");
    resultsTestsDate.setAttribute("datetime", "2023-12-13T20:10+03:00");

    resultsTestsName.textContent = "Общий тест";
    resultsTestsDate.textContent = date;

    //Сама таблица
    const taskTableWrap = document.createElement("div");
    const taskTable = document.createElement("table");
    const tBody = document.createElement("tbody");

    taskTableWrap.classList.add("task-table-wrap");
    taskTable.classList.add("task-table");

    resultsTestsWrap.append(resultBlock);
    resultBlock.append(resultsTests, taskTableWrap);
    resultsTests.append(resultsTestsName, resultsTestsDate);
    taskTableWrap.append(taskTable);
    taskTable.append(tBody);

    //Строки в таблице с результатами
    for (const obj of reversedGroupedData[date]) {
      const taskTableRow = document.createElement("tr");
      const taskTableTitle = document.createElement("td");
      const taskTableCell = document.createElement("td");

      taskTableTitle.classList.add("task-table-title", "cell-border-right");
      taskTableCell.classList.add("task-table-cell");

      taskTableTitle.innerHTML = `Задание ${obj.serialnumber}`;

      if (obj.result === 0) {
        taskTableCell.textContent = "Неверно";
      } else if (obj.result === 1) {
        taskTableCell.textContent = "Верно";
      }

      tBody.append(taskTableRow);
      taskTableRow.append(taskTableTitle, taskTableCell);
    }

    // Показать и скрыть таблицу с результатами
    resultsTests.addEventListener("click", function () {
      const taskTableWrap = this.nextElementSibling;

      // Открыть только выбранную таблицу
      taskTableWrap.classList.toggle("visible");

      // Закрыть все открытые таблицы
      const visibleTables = resultsTestsWrap.querySelectorAll(
        ".task-table-wrap.visible"
      );
      visibleTables.forEach((table) => {
        if (table !== taskTableWrap) {
          //  Не закрывать ту же таблицу
          table.classList.remove("visible");
        }
      });
    });
  }

  //Общие данные по тесту (верхняя таблица)
  const resultsTableRow = document.querySelector(".results-table--row2");
  const taskNumber = document.createElement("td");
  const taskСorrect = document.createElement("td");
  const taskEffectiveness = document.createElement("td");

  taskNumber.classList.add("results-table--cell", "cell-border-right");
  taskСorrect.classList.add("results-table--cell", "cell-border-right");
  taskEffectiveness.classList.add("results-table--cell");

  // Получаем массив с данными за последнюю дату
  const lastDateData = reversedGroupedData[dates[0]];
  // Подсчитываем количество элементов в массиве
  const count = lastDateData.length;
  // Подсчитываем количество правильных ответов
  const correctAnswers = lastDateData.filter(
    (item) => item.result === 1
  ).length;
  // Вычисляем эффективность
  const taskEffectivenessCalc = (correctAnswers * 100) / count;

  taskNumber.innerHTML = `${count} из 16`;
  taskСorrect.innerHTML = `${correctAnswers}`;
  taskEffectiveness.innerHTML = `${taskEffectivenessCalc.toFixed(2)}%`;

  resultsTableRow.append(taskNumber, taskСorrect, taskEffectiveness);

  // Задания
  // const resultsCardTest = document.querySelector(".results-card--test");

  // // Группируем задания по task и видео
  // const groupedDataVideo = question.reduce((acc, item) => {
  //   const task = item.task;
  //   const video = item.video;

  //   if (!acc[task]) {
  //     acc[task] = {};
  //   }

  //   if (!acc[task][video]) {
  //     acc[task][video] = [];
  //   }

  //   acc[task][video].push({
  //     serialnumber: item.serialnumber,
  //     result: item.result,
  //   });
  //   return acc;
  // }, {});

  // // Создаем блоки с результатами заданий
  // for (const task in groupedDataVideo) {
  //   const resultsCardItem = document.createElement("li");
  //   resultsCardItem.classList.add("results-card--item");

  //   // Название задания
  //   const resultsCardTopic = document.createElement("div");
  //   const resultsCardName = document.createElement("p");

  //   resultsCardTopic.classList.add("results-card--topic");
  //   resultsCardName.classList.add("results-card--name");

  //   resultsCardName.innerHTML = `${task}<i class="card-svg plus"></i>`;

  //   // Сам блок с результатами
  //   const resultsCardHidden = document.createElement("div");
  //   resultsCardHidden.classList.add("results-card--hidden");

  //   resultsCardTest.append(resultsCardItem);
  //   resultsCardItem.append(resultsCardTopic, resultsCardHidden);
  //   resultsCardTopic.append(resultsCardName);

  //   // Блоки с видео
  //   for (const video in groupedDataVideo[task]) {
  //     const сardHidden = document.createElement("div");
  //     const сardHiddenLeft = document.createElement("div");
  //     const сardHiddenButton = document.createElement("div");
  //     const сardHiddenName = document.createElement("p");
  //     const сardHiddenText = document.createElement("p");
  //     const сardButton = document.createElement("a");

  //     сardHidden.classList.add("card-hidden", "flex");
  //     сardHiddenLeft.classList.add("card-hidden--left");
  //     сardHiddenName.classList.add("card-hidden--name");
  //     сardHiddenText.classList.add("card-hidden--text");
  //     сardButton.classList.add("btn-profile");

  //     сardHiddenName.textContent = video;
  //     сardHiddenText.textContent = "Урок не пройден";
  //     сardButton.textContent = "Повторить урок";

  //     resultsCardHidden.append(сardHidden);
  //     сardHidden.append(сardHiddenLeft, сardHiddenButton);
  //     сardHiddenButton.append(сardButton);

  //     // Таблица с результатами
  //     const taskTableTopic = document.createElement("table");
  //     const tBodyTopic = document.createElement("tbody");

  //     taskTableTopic.classList.add("task-table", "task-table--topic");

  //     taskTableTopic.append(tBodyTopic);

  //     // Строки в таблице
  //     groupedDataVideo[task][video].forEach((item) => {
  //       const taskTableRowTopic = document.createElement("tr");
  //       const taskTableTitleTopic = document.createElement("td");
  //       const taskTableCellTopic = document.createElement("td");

  //       taskTableTitleTopic.classList.add(
  //         "task-table-title",
  //         "cell-border-right"
  //       );
  //       taskTableCellTopic.classList.add("task-table-cell");

  //       taskTableTitleTopic.innerHTML = `Задание ${item.serialnumber}`;
  //       taskTableCellTopic.textContent =
  //         item.result === 1 ? "Верно" : "Неверно";

  //       taskTableRowTopic.append(taskTableTitleTopic, taskTableCellTopic);
  //       tBodyTopic.append(taskTableRowTopic);
  //     });

  //     сardHiddenLeft.append(сardHiddenName, taskTableTopic);
  //   }
  // }

  // // Обработчик клика по заголовкам заданий
  // $(document).ready(function () {
  //   // Обработчик клика по заголовку задания
  //   $(".results-card--topic").on("click", function (e) {
  //     e.preventDefault();
  //     const $this = $(this);
  //     const $hiddenSection = $this.next(".results-card--hidden"); // Получаем блок с результатами

  //     // Проверяем, открыта ли карточка
  //     if ($this.hasClass("active")) {
  //       $this.removeClass("active");
  //       $hiddenSection.slideUp(200);
  //       $this.find(".card-svg").removeClass("minus").addClass("plus");
  //     } else {
  //       $(".results-card--topic").removeClass("active");
  //       $this.addClass("active");
  //       $(".results-card--hidden").slideUp(200); // Скрываем все другие карточки
  //       $hiddenSection.slideDown(200); // Открываем карточку для текущего задания
  //       $(".card-svg").removeClass("minus").addClass("plus"); // Сбрасываем иконку для всех карточек
  //       $this.find(".card-svg").removeClass("plus").addClass("minus"); // Меняем иконку на текущей карточке
  //     }
  //   });
  // });
}

// Выход из личного кабинета
const exitButton = document.querySelector(".exit-wrap");

exitButton.addEventListener("click", () => {
  axios
    .post("/php/logout.php")
    .then((response) => {
      window.location.href = "/mainpage.php";
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
});
