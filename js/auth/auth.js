import {Auth} from "./registration.js";

document.addEventListener("DOMContentLoaded", () => {

    const auth = new Auth()

    //Проверка аутентификации

    const vk_btn = document.querySelectorAll(".vk_auth");
    const yandex_btn = document.querySelectorAll('.yandex_auth')
 /*   const appId = "51892394";
    const redirectUri = "https://www.oge5.isp.sprint.1t.ru/profile.php";
    const query = `client_id=${appId}&redirect_uri=${redirectUri}&response_type=token`




    const getInfo = (access_token)=>{
        axios.get(`https://api.vk.com/method/account.getProfileInfo?access_token=${access_token}&v=5.199`)
            .then(response => {
                setinfoAfterAuth(response.data.response)
            })
            .catch(error => {
                console.error(error);
            });

    }

    const setinfoAfterAuth = (data)=>{
        let surname = document.querySelector('#surname')
        let name = document.querySelector('#name')
        let city = document.querySelector('#city')
        surname.value = data.last_name
        name.value = data.first_name
        city.value = data.home_town
    }


    const getParams = (url) => {
        const params = new URLSearchParams(url.split('#')[1]);
        let access_token = params.get('access_token');
        let expires = params.get('expires_in');
        let id_vk = params.get('user_id');
        if (access_token){
            getInfo(access_token)
        }
    }*/

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
