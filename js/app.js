let amigos;
let sorteio
reiniciar();

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value
    if (amigo == '') return;
    if (amigos.includes(amigo)) return alert('Esse nome já foi adicionado');
    document.getElementById('nome-amigo').value = '';
    amigos.push(amigo);
    document.getElementById('lista-amigos').textContent = amigos.join(' - ');
}

function sortear(){
    if (amigos.length < 3) return alert('Adicione mais amigos.');
    sorteio = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    for (let i = 0; i < amigos.length; i++){
        if (i + 1 == amigos.length && !(sorteio.includes(amigos[i]))) {
            return sortear();
        }
        let amigoSorteado = amigos[parseInt(Math.random() * amigos.length)];
        while (sorteio.includes(amigoSorteado) || amigoSorteado == amigos[i]) {
            amigoSorteado = amigos[parseInt(Math.random() * amigos.length)];
        }
        sorteio.push(amigoSorteado);
    }
    for (let i = 0; i < sorteio.length; i++){
        document.getElementById('lista-sorteio').innerHTML += amigos[i] + ' --> ' + sorteio[i] + '<br>';
    }
}

function reiniciar(){
    amigos = [];
    sorteio = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}