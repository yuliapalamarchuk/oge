const search = document.getElementById('search');

axios.post('api/search', {
    search: search.value
})
.then(response => {
    console.log(response)
})