// vamos pegar o elemento button con id= alternarBotao
const botao = document.getElementById('alternarBotao')

// vamos pegar o elemento div com o id = mensagem
const mensagem = document.getElementById('mensagem')
// vamos adicionar o metodo addEventListener para escutar o evento
// de click
botao.addEventListener('click', ()=>{
    // 1. vamos verificar se a mensagem está oculta
    if(mensagem.classList.contains('oculto')){
        // vamos remover o estilo
        mensagem.classList.remove('oculto')
    }else {
        mensagem.classList.add('oculto')
    }
})