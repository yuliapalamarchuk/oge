const items = document.querySelectorAll(".accordion a");
function toggleAccordion() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}
items.forEach((item) => item.addEventListener("click", toggleAccordion));

/* const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  loop: true,
  effect: "coverflow",
  centeredSlides: true,
  spaceBetween: 50,
  coverflowEffect: {
    depth: 50,
    rotate: 0,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
}); */

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  loop: true,
  spaceBetween: 150,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 100,
    },
    1244: {
      slidesPerView: 2,
      spaceBetween: 150,
    },
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
(function () {
  //Show Modal
  $("#exampleModalLong").on("show.bs.modal", function (e) {
    console.log("show");
    $(".firstBlur").addClass("modalBlur");
  });

  //Remove modal
  $("#exampleModalLong").on("hide.bs.modal", function (e) {
    console.log("hide");
    $(".firstBlur").removeClass("modalBlur");
  });
})();

document.querySelectorAll("#modal").forEach((el) => {
  console.log(el);
  el.addEventListener("mouseover", () => {
    document.querySelector(".video_preview").style.transform = "rotate(-10deg)";
  });
  el.addEventListener("mouseout", () => {
    document.querySelector(".video_preview").style.transform = "rotate(0deg)";
  });
});
