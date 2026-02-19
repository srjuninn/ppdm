// vamos pegar a lista de produto com id = lista
const lista = document.getElementById('lista')

// vamos pegar o input com id = novoItem
const novoItem = document.getElementById('novoItem')

// vamos pegar o botao com id = botaoAdicionar
const botaoAdicionar = document.getElementById('botaoAdicionar')

// vamos adicionar o metodo addEventListener
botaoAdicionar.addEventListener('click', () => {
    // vamos ler o produto digitado pelo usuario
    const novoProduto = novoItem.value

    // vamos fazer a validação do produto
    if (novoProduto !== '') {
        // 1. criar um novo elemento li
        const li = document.createElement('li')

        // 2. vamos definir o texto do novo elemento li
        li.innerText = novoProduto

        // 3. inserir o li criado no ul
        lista.appendChild(li)

        // 4. vamos limpar o input
        novoItem.value = ''
    }
})
