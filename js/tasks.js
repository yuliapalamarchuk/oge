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
    
    const cards = document.querySelectorAll('.cards__item a');
    
    cards.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const id = el.parentNode.getAttribute('id');
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
    
    // Избранное

     const favBtns = document.querySelectorAll('.card__favorite');
    favBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const itemid = el.getAttribute('data-itemid');
            console.log(itemid)
            axios.post('php/favorites.php',  {video_id: itemid,})
                .then(response => {
                    console.log(response.data);
                    if (response.data == 'Для просмотра этой страницы необходимо авторизоваться.') {
                        document.getElementById('modalAuthReg').classList.add('showModal');
                    }
                    if (response.data == 'insert') {
                        el.classList.add('active');
                    } else el.classList.remove('active');
                    
                })
                .catch(error => {
                    console.log(error)
                })
        })
    })
    
    
    // Добавление/удаление лайков

   const likeBtns = document.querySelectorAll('.cards__count');
    likeBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const id = el.getAttribute('data-id');
            const countLikes = Number(el.getAttribute('data-count'));
            
            let count = countLikes;
            console.log(count)
        

            if (!el.classList.contains('active')) {
                count = count + 1;
            } 
            
            console.log(count)
            
            el.innerHTML = count;
               el.classList.toggle('active');

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
    })

})