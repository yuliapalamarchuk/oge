jQuery(document).ready(function ($) {
    (function initPlayVideo() {
        $(".f-video-cover").on("click", function () {
var clickId = $(this).attr('id');
            $(this).fadeOut().siblings('.f-video-player').html(
                '<iframe src="https://www.youtube.com/embed/' + $("#"+clickId).data("video") + '?feature=oembed&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            );
        });
    })();
});


window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.theme__btn');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = document.querySelector('.task__block');
        filter.classList.add('open');
    })

    const close = document.querySelector('.close');
    close.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = document.querySelector('.task__block');
        filter.classList.remove('open');
    })



    const tabs = document.querySelectorAll('.task__item');
    const contents = document.querySelectorAll('.content');

    for (let i=0; tabs.length > i; i++) {
        tabs[i].addEventListener('click', (e) => {
            e.preventDefault();
            const tabs = document.querySelectorAll('.task__item');
            tabs.forEach(el => {
                if (el.classList.contains('active')) el.classList.remove('active')
            })
            tabs[i].classList.add('active');

            const contents = document.querySelectorAll('.content');
            contents.forEach(el => {
                if (el.classList.contains('active')) el.classList.remove('active')
            })

            contents[i].classList.add('active');
        })
    }

})