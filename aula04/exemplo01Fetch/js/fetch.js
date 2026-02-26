/* vamos trazer os dados dos usuarios do jsonplaceholder
usando o metodo fetch*/
fetch('https://jsonplaceholder.typicode.com/users')
// será gerado uma promisse, tenho os 10 usuários no formato json
// converte a resposta no formato json para objeto em JS
.then(response => response.json())

// com o Js convertido para objeto, vamos exibir as informações na pagina
.then(usuario => {
    const todosUsuarios = document.getElementById('listaUsuario')

    usuario.forEach(user => {
        const cadaUsuario = document.createElement('li')
        cadaUsuario.textContent = `${user.name}(${user.email})`
        todosUsuarios.appendChild(cadaUsuario)
    })
})
.catch(error => {
    document.getElementById('todosUsuarios').textContent = 'Erro ao buscar os usuários'
})