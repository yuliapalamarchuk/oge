window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.theme__btn');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = document.querySelector('.tasks__block');
        filter.classList.add('open');
    })

    const close = document.querySelector('.close');
    close.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = document.querySelector('.tasks__block');
        filter.classList.remove('open');
    })
    
    



    const tabs = document.querySelectorAll('.tasks__item');
    const contents = document.querySelectorAll('.content');
    
    const cards = document.querySelectorAll('.cards__item');
    
    cards.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const id = el.getAttribute('id');
            console.log(id)
            localStorage.setItem('id', id)
           window.location.href = 'https://oge5.isp.sprint.1t.ru/task.php'
            
        })
    })
    
    

    for (let i=0; tabs.length > i; i++) {
        if (i == 0) {
            tabs[i].classList.add('active');
            contents[i].classList.add('active');
        }
        tabs[i].addEventListener('click', (e) => {
            e.preventDefault();
            const tabs = document.querySelectorAll('.tasks__item');
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