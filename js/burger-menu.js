$(document).ready(function () {
    $(".menu-burger__header").click(function () {
        $(".menu-burger__header").toggleClass("open-menu");
        $(".nav").toggleClass("open-menu");
        $(".header_search").toggleClass("dpnone");
        $(".burger_menu").toggleClass("dpnone");
        $(".header_btn_burger").css("display", "block");
        $('body').toggleClass('menu-open')
    });
});
let openVideo = document.querySelector('.btn_play ')
openVideo.addEventListener('click', () => {
    document.querySelector('#modal').style.visibility = 'visible'
    document.querySelector('#modal').style.opacity = '1'
    document.querySelector('body').classList.add('openModalVideo')
})
const modalClose = document.querySelector('.modal-close')
modalClose.addEventListener('click', () => {
    document.querySelector('#modal').style.visibility = 'hidden'
    document.querySelector('#modal').style.opacity = '0'
    document.querySelector('body').classList.remove('openModalVideo')
})
