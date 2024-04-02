
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
document.addEventListener('DOMContentLoaded',()=>{
    const uuid = uuidv4();
    const appId = '51892394'; // Идентификатор вашего приложения.
    const redirectUri = 'https://www.oge5.isp.sprint.1t.ru'; // Адрес для перехода после авторизации, который совпадает с доверенным редиректом из настроек приложения.
    const redirect_state = 'auth=true'; // Cостояние вашего приложения или любая произвольная строка, которая будет добавлена к url после авторизации.

    const query = `uuid=${uuid}&app_id=${appId}&response_type=silent_token&redirect_uri=${redirectUri}&redirect_state=${redirect_state}`;
    const vk_btn = document.querySelector('.vk_auth')
    console.log(vk_btn)
    vk_btn.addEventListener('click',()=>{
        location.assign(`https://id.vk.com/auth?${query}`);
    })
    // Получение параметров строки запроса из текущего URL
    let searchParams = new URLSearchParams(window.location.search);

// Проверка наличия параметров в строке запроса
    if (searchParams.has("payload")) {
        console.log("Параметр param1 присутствует в текущем URL.");
        // Получаем объект URLSearchParams

// Преобразуем объект URLSearchParams в объект JavaScript
        let paramsObject = {};
        for (let [key, value] of searchParams) {
            paramsObject[key] = value;
        }
        let res = JSON.parse(paramsObject.payload).user
        alert(`Имя: ${res.first_name} `)
    } else {
        console.log("Параметр param1 отсутствует в текущем URL.");
    }


})
