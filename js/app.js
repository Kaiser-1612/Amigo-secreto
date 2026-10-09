let amigos = [];

let sorteados = [];

function adicionar(){
    let inputAmigo = document.getElementById('nome-amigo');
    let nome = inputAmigo.value.trim();

    if (nome === '') {
        alert('Por favor, insira o nome de um amigo.');
        return;
    }
    amigos.push(nome);
    atualizarLista();

    inputAmigo.value = "";

}
function atualizarLista() {
        let listaHTML = document.getElementById('lista-amigos');
        listaHTML.innerHTML = '';

        amigos.forEach(amigo => {
            let li = document.createElement('li');
            li.textContent = amigo;
            listaHTML.appendChild(li);
        });
    }

function sortear(){
    if (amigos.length < 2) {
        alert('Por favor, adicione pelo menos 2 amigos para sortear.');
        return;
    }
    if (sorteados.length === amigos.length) {
        alert('Todos os amigos já foram sorteados. Reinicie para sortear novamente.');
        return;
    }

   let indiceAleatorio;
    let amigoSorteado;

    do{
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (sorteados.includes(amigoSorteado));

    sorteados.push(amigoSorteado);

    let resultadoHTML = document.getElementById('lista-sorteio');
    resultadoHTML.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;

    atualizarListaSorteados();
}

function atualizarListaSorteados() {
    let historicoHTML = document.getElementById('historico-sorteio');
    if (historicoHTML){ 
    historicoHTML.innerHTML = '';
    sorteados.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = `Ja sorteado: ${amigo}`;
        historicoHTML.appendChild(li);
    });
  }
}

function reiniciar(){

    amigos = [];
    sorteados = [];

    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';

    let historicoHTML = document.getElementById('historico-sorteio');
    if (historicoHTML) historicoHTML.textContent = '';

    let inputAmigo = document.getElementById('nome-amigo');
    inputAmigo.value = '';

    inputAmigo.focus();

}