let num = 1;
let questions = [];

function createRules() {
    const section = document.createElement('section');
    const container = document.createElement('div');

    const btnBack = document.createElement('a');
    const sectionContainer = document.createElement('div');
   
    const rulesBlock = document.createElement('div');
    const prevBtn = document.createElement('a');
    const nextBtn = document.createElement('button');
    const title = document.createElement('h2');
    const btnsBlock = document.createElement('div');
    const rulesText = document.createElement('div');
    const scrollBlock = document.createElement('div');

    title.textContent = 'Инструкция по прохождению общего теста ОГЭ';
    prevBtn.textContent = 'Назад';
    nextBtn.textContent = 'Далее';

    section.classList.add('rules');
    container.classList.add('container');
    sectionContainer.classList.add('rules__container');
    btnBack.classList.add('back');
    rulesBlock.classList.add('rules__block');
    prevBtn.classList.add('rules__btn', 'rules__btn--prev', 'btn-reset');
    nextBtn.classList.add('rules__btn', 'rules__btn--next', 'btn-reset');
    btnsBlock.classList.add('rules__btns');
    title.classList.add('rules__title');
    rulesText.classList.add('rules__text');
    scrollBlock.classList.add('scroll-block');

    rulesText.innerHTML = `
    <p class="">Инструкция поможет выполнить тест самостоятельно и без ошибок.</p>
    <p>Вам предстоит решить задания из следующих разделов:</p>
    <ul class="rules__list">
        <li class="rules__item">Числа и вычисления (7 заданий);</li>
        <li class="rules__item">Алгебраические выражения (1 задание);</li>
        <li class="rules__item">Уравнения и неравенства (2 задания);</li>
        <li class="rules__item">Числовые последовательности (1 задание);</li>
        <li class="rules__item">Функции и графики (1 задание);</li>
        <li class="rules__item">Координаты на прямой и плоскости (1 задание);</li>
        <li class="rules__item">Геометрия (5 заданий);</li>
        <li class="rules__item">Статистика и теория вероятностей (1 задание).</li>
    </ul>
    <p>Тест начинается с 6-го задания, которое соответствует 6 блоку ОГЭ «Вычисления». И далее приведены задания по всем блокам до 19-го - «Анализ геометрических высказываний».
    Вам необходимо решить задание, записать ответ в поле ввода и нажать кнопку «Далее».
    Ответ необходимо ввести в виде цифры, перечисления цифр (без пробелов и запятых).
    Вы можете пропустить задание без ввода ответа, нажав кнопку «Далее». Так же, не доходя до окончания теста, вернуться к любому заданию и исправить ответ.
    После прохождения теста в Личном кабинете вы можете посмотреть свои результаты (количество правильных ответов).</p>
    <p>Желаем вам успешного прохождения общего Теста ОГЭ!</p>
    `
    


    btnBack.href = '/mainpage.html';
    prevBtn.href = './test-banner.html'

    btnBack.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62668 16.7066C4.43941 16.5191 4.33423 16.265 4.33423 16C4.33423 15.735 4.43941 15.4808 4.62668 15.2933L12.6267 7.29329C12.7182 7.19504 12.8286 7.11624 12.9513 7.06158C13.074 7.00693 13.2064 6.97754 13.3407 6.97517C13.4749 6.9728 13.6083 6.9975 13.7328 7.0478C13.8573 7.09809 13.9704 7.17295 14.0654 7.26791C14.1604 7.36287 14.2352 7.47598 14.2855 7.6005C14.3358 7.72501 14.3605 7.85839 14.3581 7.99265C14.3558 8.12693 14.3264 8.25935 14.2717 8.38201C14.2171 8.50468 14.1383 8.61508 14.04 8.70663L7.74668 15L26.6667 15C26.9319 15 27.1863 15.1053 27.3738 15.2929C27.5613 15.4804 27.6667 15.7347 27.6667 16C27.6667 16.2652 27.5613 16.5195 27.3738 16.7071C27.1863 16.8946 26.9319 17 26.6667 17H7.74668L14.04 23.2933C14.1383 23.3848 14.2171 23.4952 14.2717 23.6179C14.3264 23.7406 14.3558 23.873 14.3581 24.0073C14.3605 24.1415 14.3358 24.2749 14.2855 24.3994C14.2352 24.5239 14.1604 24.6371 14.0654 24.732C13.9704 24.827 13.8573 24.9018 13.7328 24.9521C13.6083 25.0024 13.4749 25.0271 13.3407 25.0247C13.2064 25.0224 13.074 24.993 12.9513 24.9383C12.8286 24.8837 12.7182 24.8049 12.6267 24.7066L4.62668 16.7066Z" fill="#5C0C70"></path>
</svg>
Вернуться на главную`


    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.innerHTML = '';
        document.body.append(createQuestion(num));

    })

    document.body.append(section);
    section.append(container);
    container.append(btnBack, sectionContainer);
    rulesBlock.append(scrollBlock);
    sectionContainer.append(rulesBlock);
    scrollBlock.append(title, rulesText, btnsBlock);
    btnsBlock.append(prevBtn, nextBtn);

    return section;

}

function createQuestion() {
    const section = document.createElement('section');
    const container = document.createElement('div');
    const questionTop = document.createElement('div');

    const btnBack = document.createElement('a');
    const sectionContainer = document.createElement('div');
    const questionCount = document.createElement('span');

    const rulesBlock = document.createElement('div');
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    const title = document.createElement('h2');
    const btnsBlock = document.createElement('div');
    const questionBlock = document.createElement('div');


    title.textContent = `Задание ${num}`;
    questionCount.textContent = `Вопрос ${num} из 19`;
    prevBtn.textContent = 'Назад';
    nextBtn.textContent = 'Далее';

    section.classList.add('question');
    container.classList.add('container');
    sectionContainer.classList.add('question__container');
    btnBack.classList.add('back');
    rulesBlock.classList.add('rules__block');
    prevBtn.classList.add('question__btn', 'question__btn--prev', 'btn-reset');
    nextBtn.classList.add('question__btn', 'question__btn--next', 'btn-reset');
    btnsBlock.classList.add('question__btns');
    title.classList.add('question__title');
    questionBlock.classList.add('question__box', 'list-reset');
    questionTop.classList.add('question__top');
    questionCount.classList.add('question__count');

    const question = getQuestionNum(num);

    if (num == 1) prevBtn.disabled = true

        const questionText1 = document.createElement('p');
        questionText1.innerHTML = question.text1;
        questionText1.classList.add('question__text');
        questionBlock.append(questionText1);

        if (question.text2) {
            const questionText2 = document.createElement('p');
            questionText2.innerHTML = question.text2;
            questionText2.classList.add('question__text');
            questionBlock.append(questionText2);
        }

        if (question.url) {
            const img = document.createElement('img');
            img.src = question.url;
            questionBlock.append(img);
        }
       
        const input = document.createElement('input');
        input.placeholder = 'Введите ответ';
        input.classList.add('question__input');
        questionBlock.append(input);


    btnBack.href = '/mainpage.html';

    btnBack.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62668 16.7066C4.43941 16.5191 4.33423 16.265 4.33423 16C4.33423 15.735 4.43941 15.4808 4.62668 15.2933L12.6267 7.29329C12.7182 7.19504 12.8286 7.11624 12.9513 7.06158C13.074 7.00693 13.2064 6.97754 13.3407 6.97517C13.4749 6.9728 13.6083 6.9975 13.7328 7.0478C13.8573 7.09809 13.9704 7.17295 14.0654 7.26791C14.1604 7.36287 14.2352 7.47598 14.2855 7.6005C14.3358 7.72501 14.3605 7.85839 14.3581 7.99265C14.3558 8.12693 14.3264 8.25935 14.2717 8.38201C14.2171 8.50468 14.1383 8.61508 14.04 8.70663L7.74668 15L26.6667 15C26.9319 15 27.1863 15.1053 27.3738 15.2929C27.5613 15.4804 27.6667 15.7347 27.6667 16C27.6667 16.2652 27.5613 16.5195 27.3738 16.7071C27.1863 16.8946 26.9319 17 26.6667 17H7.74668L14.04 23.2933C14.1383 23.3848 14.2171 23.4952 14.2717 23.6179C14.3264 23.7406 14.3558 23.873 14.3581 24.0073C14.3605 24.1415 14.3358 24.2749 14.2855 24.3994C14.2352 24.5239 14.1604 24.6371 14.0654 24.732C13.9704 24.827 13.8573 24.9018 13.7328 24.9521C13.6083 25.0024 13.4749 25.0271 13.3407 25.0247C13.2064 25.0224 13.074 24.993 12.9513 24.9383C12.8286 24.8837 12.7182 24.8049 12.6267 24.7066L4.62668 16.7066Z" fill="#5C0C70"></path>
</svg>
Вернуться на главную`



    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // тут будет запрос на получение вопросов

        document.body.innerHTML = '';
        num += 1;

        console.log(num)

        if (num < 20) document.body.append(createQuestion(num))
        else window.location.href = '../test-final.html';


    })

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();       
        if (num > 1) {
            document.body.innerHTML = '';
            num -= 1;
            document.body.append(createQuestion(num));
        } 
        

    })

    section.append(container);
    questionTop.append(btnBack, questionCount);
    container.append(questionTop, sectionContainer);
    sectionContainer.append(rulesBlock);
    rulesBlock.append(title, questionBlock, btnsBlock);
    btnsBlock.append(prevBtn, nextBtn);

    return section;

}


 questions = [
    {
        id: 0,
        idtask: '1',
        text1: 'Найдите значение выражения 1',
        url: '',
        text2: '',
        answer: 'Правильный ответ'
    },
    {
        id: 1,
        idtask: '2',
        text1: 'Одна из точек, отмеченных на координатной прямой, соответствует числу корень из 77.',
        url: '../img/question.svg',
        text2: 'Выберите вариант ответа и напишите его номер ниже: 1) Точка A; 2) Точка B; 3)Точка C; 4) Точка D.',
        answer: 'Правильный ответ'
    },
    {
        id: 2,
        idtask: '3',
        text1: 'Найдите значение выражения 3',
        url: '',
        text2: '',
        answer: 'Правильный ответ'
    },
    {
        id: 3,
        idtask: '4',
        text1: 'Решите уравнение x2–50–5x=0. Если уравнение имеет более одного корня, в ответе укажите больший из них.',
        url: '',
        text2: '',
        answer: 'Правильный ответ'
    },
]



function getQuestionNum(num) {
    let activeQuestion = {};

    questions.find((question, index) => {
        if (question.id + 1 === num) activeQuestion = question
    })

    return activeQuestion
}


createRules();