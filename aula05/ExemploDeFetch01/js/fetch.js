const loading = document.getElementById('loading')
const produto = document.getElementById('produto')
const erro = document.getElementById('error')

fetch('https://fakestoreapi.com/products/1')
    .then(res => {
        if (!res.ok) {
            throw new Error('deu ruim ao buscar dados' + res.status)
        }
        return res.json()
    })
    .then(data => {
        loading.style.display = 'none'
        produto.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.description}</p>
            <img src='${data.image}' alt='${data.title}'>
        `
    })
    .catch(error => {
        loading.style.display = 'none'
        erro.textContent = error.message
    })