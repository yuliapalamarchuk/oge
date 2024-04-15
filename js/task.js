const task = document.getElementById('task');

function createTask() {
    const question =
    {
        id: 1,
        url: '',
        name: 'Название',
        description: 'Есть над чем задуматься: активно развивающиеся страны третьего мира призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов. Есть над чем задуматься: активно развивающиеся страны третьего мира призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов. Есть над чем задуматься: активно развивающиеся страны третьего мира призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов.',
        conspect: '',
        questions: {

        },
        likes: 10,
    }

    const questions = [
        {
            id: 1,
            text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов.'
        },
        {
            id: 2,
            text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов.'
        },
        {
            id: 3,
            text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов.'
        },
        {
            id: 4,
            text: 'Есть над чем задуматься: активно развивающиеся страны третьего мира призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов.'
        }
    ]


    const videoBlock = document.createElement('div');
    const video = document.createElement('div');
    const videoName = document.createElement('h2');
    const videoDescription = document.createElement('div');
    const videoCount = document.createElement('p');
    const downloadBtn = document.createElement('a');

    const testBlock = document.createElement('block'); 
    const title = document.createElement('h2'); 
    const testForm = document.createElement('form');
    const submit = document.createElement('button');

    video.innerHTML = `
    <div class="f-video-container">
        <div class="f-video-player"></div>
        <div id="2" class="f-video-cover" data-video="HZmGySTcBpA">
            <div class="card__play"></div>
            <img src="../img/task.png" width="100%" height="100%" alt="" class="card__img">
        </div>
    </div>`

    video.classList.add('task__video');
    videoBlock.classList.add('card');
    videoName.classList.add('card__title');
    videoDescription.classList.add('card__desc');
    videoCount.classList.add('card__count');
    downloadBtn.classList.add('task__btn');
    testBlock.classList.add('test');
    testForm.classList.add('test__form');
    submit.classList.add('test__submit', 'btn-reset', 'task__btn');
    title.classList.add('card__title');

    videoName.textContent = question.name;
    videoDescription.innerHTML = question.description;
    videoCount.textContent = question.likes;

    downloadBtn.textContent = 'Скачать материалы';

    title.textContent = 'Тест';
    submit.textContent = 'Принять ответы';

    questions.forEach(el => {
        const block = document.createElement('div')
        const subtitle = document.createElement('h3'); 
        const text = document.createElement('p'); 
        const input = document.createElement('input');

        subtitle.textContent = `Задание ${el.id}`;
        text.textContent = el.text;

        input.placeholder = 'Введите ответ';

        block.classList.add('test__block');
        subtitle.classList.add('test__title');
        text.classList.add('test__text');
        input.classList.add('test__input');

        block.append(subtitle, text, input);

        testForm.append(block);    
    })

    videoBlock.append(video, videoName, videoCount);
    task.append(videoBlock, videoDescription, downloadBtn, testBlock);
    testBlock.append(title, testForm);
    testForm.append(submit);
}

window.addEventListener('DOMContentLoaded', () => {
    createTask();
})


jQuery(document).ready(function ($) {
    (function initPlayVideo() {
        $(".f-video-cover").on("click", function () {
            var clickId = $(this).attr('id');
            $(this).fadeOut().siblings('.f-video-player').html(
                '<iframe src="https://www.youtube.com/embed/' + $("#" + clickId).data("video") + '?feature=oembed&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            );
        });
    })();
});