// let rotateCards = (elem) => {
//   document.body.style.position = "fixed";
//   document.body.overflowY = "scroll";
//   document.body.style.bottom = "-120%";

//   if (elem.classList.contains("purple_card")) {
//     console.log(elem);
//     elem.classList.add("rotate_purple_card");
//   }
//   document.addEventListener("scroll", () => {
//     setTimeout(() => {
//       if (elem.classList.contains("orange_card")) {
//         elem.classList.add("rotate_orange_card");
//       }
//     }, 5000);
//     document.addEventListener("scroll", () => {
//       setTimeout(() => {
//         if (elem.classList.contains("green_card")) {
//           elem.classList.add("rotate_green_card");
//         }
//       }, 10000);
//     });

//     setTimeout(() => {
//       document.body.style.position = "initial";
//       document.body.overflowY = "126%";
//     }, 15000);
//   });
// };
// const options = {
//   // родитель целевого элемента - область просмотра
//   root: null,
//   // без отступов
//   rootMargin: "0px",
//   // процент пересечения - половина изображения
//   threshold: 0.6,
// };

// // создаем наблюдатель
// const observer = new IntersectionObserver((entries, observer) => {
//   // для каждой записи-целевого элемента
//   entries.forEach((entry) => {
//     // если элемент является наблюдаемым
//     if (entry.isIntersecting) {
//       const lazyImg = entry.target;
//       // выводим информацию в консоль - проверка работоспособности наблюдателя
//       // меняем фон контейнера
//       rotateCards(lazyImg);
//       // прекращаем наблюдение
//       observer.unobserve(lazyImg);
//     }
//   });
// }, options);

// // с помощью цикла следим за всеми img на странице
// const arr = document.querySelectorAll(".animated_card");
// arr.forEach((i) => {
//   observer.observe(i);
// });
