import {modalConfirmReg, openModalFunc, closeModalFunc} from "../modal.js";

class Auth {

    constructor() {
        this.authenticated = false;
        this.user = null;
    }

    // Метод для регистрации
    async register() {
        let surname = document.querySelector('#surname')
        let name = document.querySelector('#name')
        let email = document.querySelector('#email')
        let pass = document.querySelector('#password-input')
        let res = {
            surname: surname.value,
            name: name.value,
            email: email.value,
            pass: pass.value,
        }
        let clearInputs = () => {
            surname.value = '',
                name.value = '',
                email.value = '',
                pass.value = ''
        }
        try {
            const response = await axios.post('php/register.php', res);
            clearInputs()
            console.log(response.data)
            if (typeof Number(response.data.data.id) === 'number') {
                localStorage.setItem('userID', response.data.data.id)
                openModalFunc(modalConfirmReg);
                setTimeout(() => {
                    window.location.href = '/profile.php'
                }, 800)
                this.authenticated = true
            }
        } catch (error) {
            console.log(error)
            if (error.response.status === 402) {
                alert(`Пользователь с email  - ${error.response.data.data.email} уже зарегистрирован`)
                email.value = '';
                pass.value = '';
            }
            return false
        }


    }

    // Метод для входа
    async login() {
        try {
            let email = document.querySelector('#email2')
            let pass = document.querySelector('#password-auth')
            let res = {
                params: {
                    email: email.value,
                    pass: pass.value,
                }
            }

            const response = await axios.get('php/login.php', res);
            console.log(response)
            if (response.data.status === 'success') {
                console.log(response)
                localStorage.setItem('userID', response.data.data.id)
                window.location.href = '/profile.php'
                return true
            } else {
                console.error('Проверка статуса::', response.data.message);
                return false
                // Дополнительные действия при ошибке регистрации
            }
        } catch (error) {
            if(error.response.status === 401){
                alert('Ваша почта не подтвержена!')
            }
            console.error('Ошибка при авторизации:', error);
            return false
        }
    }

    // Метод для выхода
    async logout() {
        let res = await axios.post('php/logout.php','')
        if(res.status === 200){
            window.location.href = '/'
        }


    }


    // Vk авторизация
    async vk_auth() {
        try {
            let res = await axios.get('/php/auth.php')
            console.log(res.data)
            location.assign(res.data)
        } catch (error) {
            throw error
        }
    }
    async yandex_auth() {
        try {
            let res = await axios.get('/php/yandex_auth.php')
            console.log(res.data)
            location.assign(res.data)
        } catch (error) {
            throw error
        }
    }
}

export {Auth}



