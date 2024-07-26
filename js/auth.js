import {Auth} from "./registration.js";

document.addEventListener("DOMContentLoaded", () => {

    const auth = new Auth()

    //Проверка аутентификации

    const vk_btn = document.querySelectorAll(".vk_auth");
    const yandex_btn = document.querySelectorAll('.yandex_auth')

    if(vk_btn){
        vk_btn.forEach((item)=>{
            item.addEventListener("click", () => {
                auth.vk_auth()
            });
        })

    }
    if(yandex_btn){
        yandex_btn.forEach((item)=>{
            item.addEventListener("click", () => {
                auth.yandex_auth()
            });
        })

    }
});
