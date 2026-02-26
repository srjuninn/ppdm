const fatoGato = document.getElementById('fatoGato')
const buscarFato = document.getElementById('buscarFato')

async function buscarGato(){
    try {
        const res = await fetch('https://catfact.ninja/fact')
        const dados = await res.json()
        fatoGato.textContent = dados.fact
    } catch (error) {
        fatoGato.textContent = 'Erro ao buscar dados sobre gatos'
    }
}

buscarFato.addEventListener('click', buscarGato())
buscarGato() 