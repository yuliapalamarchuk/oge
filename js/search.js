const search = document.getElementById('search');
const formSearch = document.getElementById('search-form');

import createTask from 'task.js';

formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(search.value)
    axios.get('php/search.php', {
        params: {
            search: search.value
        }
    })
    .then(response => {
        console.log(response.data)
        createList(response.data);
    })
})

function createList(array) { 
        const list = document.createElement('ul');
        list.classList.add('search-list');
    
    if (array.length = 0) {
        const listItem = document.createElement('li');
        listItem.textContent = 'Ничего не найдено';
        listItem.classList.add('search-item');
        list.append(listItem);
    } else {
        array.forEach(el => {
            const listItem = document.createElement('li');
            const listLink = document.createElement('a');
            listLink.textContent = el;
            listItem.classList.add('search-item');
            listLink.classList.add('search-link');
            listItem.append(listLink);
            list.append(listItem);

            listLink.addEventListener('click', () => {
                // createTask(id);
            })
        });
    }

    if (!document.querySelector('.search-list')) {
        formSearch.append(list)
    }

}