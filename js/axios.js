const search = document.getElementById('search');
const formSearch = document.getElementById('search-form');

formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(search.value)
    axios.post('api/search', {
        search: search.value
    })
    .then(response => {
        console.log(response)
    })
})

