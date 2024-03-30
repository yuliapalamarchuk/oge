// Модальные окна
const modalEnter = document.querySelector('#modalAuthReg') // Модалка выбора
const modalReg = document.querySelector('#modalReg') //Модалка регистрации
const modalAuth = document.querySelector('#modalAuth') // Модалка входа

// Кнопки
const closeModal = document.querySelectorAll('.close-modal') // Кнопка закрытия
const openModalAuthReg = document.querySelector("#openModalAuthReg"); // Кнопка "Вход"
const openModalReg = document.querySelector('#openModalReg') // Кнопка "Зарегистрироваться"
const openModalAuth = document.querySelector("#openModalAuth"); // Кнопка "Войти"
const switchToReg = document.querySelector('#switchToReg') // Кнопка "Перейти к регистрации"
const switchtoLogin = document.querySelector('#switchtoLogin') // Кнопка "Перейти ко входу"




// Ф-ия закртыия модального окна
const closeModalFunc = ()=>{
    let openModal = document.querySelector('.showModal')
    if(openModal) openModal.classList.toggle('showModal')
}

// Ф-ия открытия модального окна
const openModalFunc = (modal)=>{
    closeModalFunc()
    modal.classList.toggle('showModal')
}



//Вешаем слушатели события на кнопки

closeModal.forEach((item)=>{
    item.addEventListener('click',()=>{
        closeModalFunc()
    })
})

openModalAuthReg.addEventListener('click',()=>{
    openModalFunc(modalEnter)
})
openModalReg.addEventListener('click',()=>{
    openModalFunc(modalReg)
})
openModalAuth.addEventListener('click',()=>{
    openModalFunc(modalAuth)
})
switchToReg.addEventListener('click',()=>{
    openModalFunc(modalReg)
})
switchtoLogin.addEventListener('click',()=>{
    openModalFunc(modalAuth)
})
//ПО КЛИКУ НА ГЛАЗИК ПОКАЗЫВАЕТ И СКРЫВАЕТ ПАРОЛЬ

$("body").on("click", ".password-control", function () {
    if ($("#password-input").attr("type") == "password") {
        $(this).addClass("view");
        $("#password-input").attr("type", "text");
    } else {
        $(this).removeClass("view");
        $("#password-input").attr("type", "password");
    }
    return false;
});

$("body").on("click", ".password-control2", function () {
    if ($("#confirmPassword").attr("type") == "password") {
        $(this).addClass("view");
        $("#confirmPassword").attr("type", "text");
    } else {
        $(this).removeClass("view");
        $("#confirmPassword").attr("type", "password");
    }
    return false;
});

$("body").on("click", ".password-control3", function () {
    if ($("#password-auth").attr("type") == "password") {
        $(this).addClass("view");
        $("#password-auth").attr("type", "text");
    } else {
        $(this).removeClass("view");
        $("#password-auth").attr("type", "password");
    }
    return false;
});