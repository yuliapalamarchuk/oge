import { v4 as uuidv4 } from "https://jspm.dev/uuid";
document.addEventListener("DOMContentLoaded", () => {
  const uuid = uuidv4();
  const appId = "51892394"; // Идентификатор вашего приложения.
  const redirectUri = "https://www.oge5.isp.sprint.1t.ru"; // Адрес для перехода после авторизации, который совпадает с доверенным редиректом из настроек приложения.
  const redirect_state = "auth=true"; // Cостояние вашего приложения или любая произвольная строка, которая будет добавлена к url после авторизации.

  const query = `uuid=${uuid}&app_id=${appId}&response_type=silent_token&redirect_uri=${redirectUri}&redirect_state=${redirect_state}`;
  const vk_btn = document.querySelector(".vk_auth");
  vk_btn.addEventListener("click", () => {
    location.assign(`https://id.vk.com/auth?${query}`);
  });

  let searchParams = new URLSearchParams(window.location.search);

  if (searchParams.has("payload")) {
    let paramsObject = {};
    for (let [key, value] of searchParams) {
      paramsObject[key] = value;
    }
    let res = JSON.parse(paramsObject.payload).user;
    window.location.href = "https://www.oge5.isp.sprint.1t.ru/profile.html";
  } else {
    console.log("Параметр param1 отсутствует в текущем URL.");
  }
});
