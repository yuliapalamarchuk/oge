$(document).ready(function () {
  $(".menu-burger__header").click(function () {
    $(".menu-burger__header").toggleClass("open-menu");
    $(".nav").toggleClass("open-menu");
    $(".header_search").toggleClass("dpnone");
    $(".burger_menu").toggleClass("dpnone");
    $(".header_btn_burger").css("display", "block");
  });
});
