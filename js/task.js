const task = document.getElementById('task');

let question = {};
let answers = [];

const closeModalBtn = document.querySelector('.modal-task .modal__close');
const modal = document.querySelector('.modal-task');
closeModalBtn.addEventListener('click', (e) => {
    modal.classList.remove('open');
})

window.addEventListener('load', () => {
    axios.get('/php/video.php', {
        params: {
            id: localStorage.getItem('id')
        }

    })
        .then(response => {
            console.log(response)
            question = response.data;
            createTask();

        })
        .catch(error => console.log(error))

})


function createTask() {

    const videoBlock = document.createElement('div');
    const video = document.createElement('div');
    const videoName = document.createElement('h2');
    const videoDescription = document.createElement('div');
    const videoCount = document.createElement('p');
    const downloadBtn = document.createElement('a');




    video.innerHTML = `
    <div class="f-video-container">
        <div class="f-video-player"></div>
        <div id="${localStorage.getItem('id')}" class="f-video-cover" data-video="${question[0].url}">
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



    videoName.textContent = question[0].name;
    videoDescription.innerHTML = question[0].description;
    videoCount.textContent = question[0].likes;

    downloadBtn.textContent = 'Скачать материалы';
    downloadBtn.download = true;

    if (question[0].conspect != '') {
        downloadBtn.href = question[0].conspect;
    } else downloadBtn.disabled = true



    videoBlock.append(video, videoName, videoCount);
    task.append(videoBlock, videoDescription, downloadBtn);



    if (question[1].questions[0]) {
        const testBlock = document.createElement('div');
        const title = document.createElement('h2');
        const testForm = document.createElement('form');
        const submit = document.createElement('button');

        testForm.classList.add('test__form');
        submit.classList.add('test__submit', 'btn-reset', 'task__btn');
        title.classList.add('card__title');
        testBlock.classList.add('test');

        title.textContent = 'Тест';
        submit.textContent = 'Принять ответы';

        const questions = question[1].questions[0];
        console.log(questions)

        for (let i = 0; i <= questions.length - 1; i++) {
            const block = document.createElement('div')
            const subtitle = document.createElement('h3');
            const text = document.createElement('div');
            const input = document.createElement('input');

            subtitle.textContent = `Задание ${i + 1}`;

            text.innerHTML = questions[i].text1;

            input.placeholder = 'Введите ответ';

            let result;


            block.classList.add('test__block');
            subtitle.classList.add('test__title');
            text.classList.add('test__text');
            input.classList.add('test__input');

            block.append(subtitle, text);

            testForm.append(block, submit);
            testBlock.append(title, testForm);
            task.append(testBlock);

            if (questions[i].picture != null) {
                const img = document.createElement('img');
                img.classList.add('test__img');
                img.src = `uploads/images/${questions[i].picture}`;
                block.append(img);
            }

            if (questions[i].text2 != null) {
                const text2 = document.createElement('div');
                text2.classList.add('test__text');
                text2.innerHTML = questions[i].text2;
                block.append(text2);
            }


            block.append(input);

        }

        const userID = localStorage.getItem('userID');

        submit.addEventListener('click', (e) => {
            e.preventDefault();
            const inputs = document.querySelectorAll('.test__input');

            for (let i = 0; i <= inputs.length - 1; i++) {
                if (inputs[i].value == questions[i].answer) result = 1
                else result = 0;
                console.log(result)
                answers.push({
                    answer: result
                })
            }
            res = {
                    userID: userID,
                    result: answers
                }
                 console.log(res);
            axios.post('php/resultquestion.php', res)
                .then(response => {
                    console.log(response);
                    modal.classList.add('open');
                })
                .catch(error => {
                    console.log(error)
                })
        })

    }

    jQuery(document).ready(function ($) {
        (function initPlayVideo() {
            $(".f-video-cover").on("click", function () {
                var clickId = $(this).attr('id');
                $(this).fadeOut().siblings('.f-video-player').html(
                    '<iframe src="https://rutube.ru/play/embed/' + $("#" + clickId).data("video") + '?frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>'
                );
            });
        })();
    });

}


