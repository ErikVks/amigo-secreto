let amigos;
let sorteio;
reiniciar();

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value
    if (amigo == '') return;
    document.getElementById('nome-amigo').value = '';
    amigos.push(amigo);
    document.getElementById('lista-amigos').textContent = amigos.join(' - ');
}

function sortear(){
    sorteio = [];
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
    console.log(amigos);
    console.log(sorteio);
}

function reiniciar(){
    amigos = [];
    sorteio = [];
    document.getElementById('lista-amigos').textContent = '';
}