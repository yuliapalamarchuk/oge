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
  // Имя пользователя
  const profileFio = document.querySelector(".profile-fio");
  profileFio.textContent = fio[0].surname + " " + fio[0].name;

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
      const visibleTables = resultsTestsWrap.querySelectorAll(".task-table-wrap.visible");
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
  const correctAnswers = lastDateData.filter((item) => item.result === 1).length;
  // Вычисляем эффективность
  const taskEffectivenessCalc = (correctAnswers * 100) / count;

  taskNumber.innerHTML = `${count} из 16`;
  taskСorrect.innerHTML = `${correctAnswers}`;
  taskEffectiveness.innerHTML = `${taskEffectivenessCalc}%`;

  resultsTableRow.append(taskNumber, taskСorrect, taskEffectiveness);
}