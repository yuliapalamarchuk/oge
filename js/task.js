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
    const videoCount = document.createElement('button');
    const downloadBtn = document.createElement('a');
    const favBtn = document.createElement('button');




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
    videoCount.classList.add('card__count', 'btn-reset');
    downloadBtn.classList.add('task__btn');
    favBtn.classList.add('btn-reset', 'card__favorite');
    
    if (question[0].favorite == '1') favBtn.classList.add('active');
    
    favBtn.innerHTML = `<svg width="88" height="78" viewBox="0 0 88 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.37763 7.42887C18.2145 -2.02291 34.1632 -2.02248 44 13.9914C53.8368 -2.02291 69.7855 -2.02291 79.6224 7.42887C89.4592 16.9545 89.4592 32.9789 79.6224 42.5046L44 77L8.37763 42.5046C-1.45921 32.9789 -1.45921 16.9545 8.37763 7.42887Z" fill="#FAEEEB" stroke="#191812" stroke-width="2" stroke-linejoin="round"/>
                        </svg>
                        `



    videoName.textContent = question[0].name;
    videoDescription.innerHTML = question[0].description;
    videoCount.textContent = question[0].likes;
    
    console.log(document.title)

    document.title = question[0].name;

    downloadBtn.textContent = 'Скачать материалы';
    downloadBtn.download = true;

    if (question[0].conspect != '') {
        downloadBtn.href = question[0].conspect;
    } else downloadBtn.disabled = true


    video.append(favBtn);
    videoBlock.append(video, videoName, videoCount);
    task.append(videoBlock, videoDescription, downloadBtn);
    
    const id = localStorage.getItem('id');
    
    // Избранное

 
        favBtn.addEventListener('click', (e) => {
            e.preventDefault();
            axios.post('php/favorites.php',  {video_id: id,})
                .then(response => {
                    console.log(response.data);
                    if (response.data == 'Для просмотра этой страницы необходимо авторизоваться.') {
                        document.getElementById('modalAuthReg').classList.add('showModal');
                    }
                    if (response.data == 'insert') {
                        favBtn.classList.add('active');
                    } else favBtn.classList.remove('active');
                    
                })
                .catch(error => {
                    console.log(error)
                })
        })

    
    
    // Добавление/удаление лайков


        videoCount.addEventListener('click', (e) => {
            e.preventDefault();
            
            const countLikes = question[0].likes;
            
            let count = countLikes;
            console.log(count)
        

            if (!videoCount.classList.contains('active')) {
                count = count + 1;
            } 
            
            console.log(count)
            
            videoCount.innerHTML = count;
             videoCount.classList.toggle('active');

            axios.post('php/likes.php', {
                    video_id: id,
                    likes: count
                
            })
                .then(response => {
                    console.log(response.data);
                    
                })
                .catch(error => {
                    console.log(error)
                })
        })
 




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
        


        submit.addEventListener('click', (e) => {
            e.preventDefault();
            

                 const inputs = document.querySelectorAll('.test__input');

            for (let i = 0; i <= inputs.length - 1; i++) {
                if (inputs[i].value == questions[i].answer) result = 1
                else result = 0;
                console.log(result)
                answers.push({
                    id: questions[i].id,
                    answer: result
                })
            }
            res = {
                    result: answers
                }
                 console.log(res);
            axios.post('php/resultquestion.php', res)
                .then(response => {
                    console.log(response);
                    if (response.data == 'error.no_id') {
                        document.getElementById('modalAuthReg').classList.add('showModal');
                    } else
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



