// vamos pegar o elemento h1 com id = titulo
const texto = document.getElementById('titulo')

// vamos pegar o elemento button com id = botao
const botao = document.getElementById('botao')

// manipulação de eventos
botao.addEventListener('click', ()=>{
// vamos alterar o texto do elemento h1 para texto alterado
    texto.innerText = 'texto alterado com sucesso'
})