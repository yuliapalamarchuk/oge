const search = document.getElementById('search');
const formSearch = document.getElementById('search-form');

formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
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
    if (document.querySelector('.search-list')) document.querySelector('.search-list').remove();

    const list = document.createElement('ul');
    list.classList.add('search-list');

    document.addEventListener('click', (e) => {
        if (!list.contains(e.target)) {
            list.remove();
        }
    })

    if (array == null) {
        const listItem = document.createElement('li');
        listItem.textContent = 'Ничего не найдено';
        listItem.classList.add('search-item');
        list.append(listItem);
    }
    else {
        console.log(array)
        array.forEach(el => {
            const listItem = document.createElement('li');
            const listLink = document.createElement('a');
            listLink.textContent = el.name;
            listLink.setAttribute('data-id', el.id);
            listItem.classList.add('search-item');
            listLink.classList.add('search-link');
            listItem.append(listLink);
            list.append(listItem);

            listLink.addEventListener('click', () => {
                localStorage.setItem('id', el.id);
                window.location.href = '/task.php';
            })
        });
    }
    formSearch.append(list)
}


const testBtn = document.querySelector('.menu_list--test');
testBtn.addEventListener('click', (e) => {
    e.preventDefault();
     axios.post('php/test.php')
            .then(response => {
                console.log(response)
                if (response.data == 'error.no_id') {
                    document.getElementById('modalAuthReg').classList.add('showModal');
                } else document.location.href = '../test-banner.html';
                
            })
            .catch(error => {
                console.log(error)
            })

})