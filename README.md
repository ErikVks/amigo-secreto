# Amigo Secreto

Aplicação que monta um sorteio de amigo secreto: o usuário cadastra os nomes dos participantes e, ao sortear, cada pessoa recebe um amigo sem que ninguém tire a si mesmo e sem que alguém seja tirado duas vezes. Foi feito como exercício de prática de JavaScript proposto pela [Alura](https://www.alura.com.br).

O `index.html`, o `style.css` e as imagens foram disponibilizados prontos pela Alura. Todo o `app.js` foi programado por mim do zero, e é nele que está a lógica de cadastro, sorteio e exibição dos resultados. A proposta do exercício é essa: receber a interface já montada e resolver apenas o comportamento da página.

## Acesse o projeto

**GitHub Pages:** [erikvks.github.io/amigo-secreto](https://erikvks.github.io/amigo-secreto/)

**Vercel:** [amigo-secreto-tau-sable.vercel.app](https://amigo-secreto-tau-sable.vercel.app)

## Como funciona

O usuário digita o nome de um participante e clica em "Adicionar". O nome entra na lista de amigos incluídos, que aparece na tela separada por hífens, e o campo é limpo para o próximo cadastro. Quando todos estiverem cadastrados, o botão "Sortear" monta os pares e exibe o resultado no formato de quem tira quem. O sorteio exige pelo menos três participantes, e com menos que isso a aplicação avisa que faltam amigos em vez de sortear. O link "Reiniciar" apaga tudo e devolve a tela ao estado inicial.

## Estrutura de arquivos

```
amigo-secreto/
├── index.html
├── style.css
├── js/
│   └── app.js
└── assets/
    └── imagem-presente.png
```

## O que foi aprendido no JavaScript

### Arrays como estrutura central

A aplicação gira em torno de dois arrays: um com os participantes cadastrados e outro com o resultado do sorteio. Eles caminham em paralelo, de forma que a pessoa da posição zero do primeiro array tira quem está na posição zero do segundo. Essa correspondência por índice é o que permite exibir os pares no final percorrendo os dois ao mesmo tempo.

### Sorteio com restrições

Esta é a parte mais interessante do exercício, porque o sorteio não é um sorteio qualquer. Para cada participante, o código escolhe um nome ao acaso com `Math.random` e repete a escolha dentro de um `while` enquanto o nome escolhido já tiver sido tirado por outra pessoa ou for a própria pessoa da vez. Só quando as duas condições são satisfeitas o nome entra no resultado. É um exemplo prático de como um laço pode ser usado para forçar que um valor aleatório respeite regras.

### Detecção de impasse e recursão

Sortear com restrições cria um problema: existe a chance de, ao chegar na última posição, o único nome que ainda sobrou ser justamente o da própria pessoa, o que tornaria impossível fechar o sorteio e deixaria o `while` rodando para sempre. O código antecipa essa situação verificando, antes de sortear o último participante, se ele já foi tirado por alguém. Quando não foi, significa que o impasse está formado, e a função chama a si mesma para recomeçar o sorteio do zero. O `return` na chamada recursiva é essencial, porque encerra a execução atual e deixa que a nova chamada preencha o resultado sozinha.

### Junção de array em texto com join

A lista de participantes é exibida com o método `join`, que transforma o array em uma única string usando o separador indicado, no caso um hífen entre os nomes. É mais direto do que montar o texto manualmente com um laço.

### Manipulação do DOM

Os elementos são acessados por `getElementById`. O valor digitado é lido pela propriedade `value`, que também serve para limpar o campo depois do cadastro. A lista de nomes é escrita com `textContent`, enquanto o resultado do sorteio usa `innerHTML`, já que precisa interpretar a quebra de linha entre um par e outro.

### Validação simples e saída antecipada

Antes de cadastrar, o código verifica se o campo está vazio e encerra a função com `return` quando está, evitando que nomes em branco entrem na lista. É o mesmo padrão de interromper cedo usado nos outros exercícios, que mantém o caminho principal do código sem aninhamentos desnecessários.

A função de sorteio tem a sua própria verificação logo na primeira linha: se houver menos de três participantes cadastrados, ela avisa o usuário e encerra sem sortear nada. Além de fazer sentido como regra do jogo, já que um amigo secreto com pouca gente entrega na hora quem tirou quem, essa validação protege o restante do código, porque com uma lista muito pequena a detecção de impasse poderia disparar a recursão sem que exista uma combinação válida possível.

### Estado inicial pela própria função de reinício

A função `reiniciar` é chamada logo na primeira linha do arquivo, antes de qualquer interação. Com isso, as variáveis já começam inicializadas como arrays vazios e as áreas de exibição começam limpas, reaproveitando a mesma função que o link "Reiniciar" usa depois.

### Operador de atribuição composta em texto

A montagem do resultado usa `+=` sobre o `innerHTML`, acrescentando um par por vez ao conteúdo que já está na tela, em vez de reconstruir todo o bloco a cada iteração.

## Como executar

Não é necessária nenhuma instalação. Basta clonar ou baixar o repositório e abrir o `index.html` no navegador, ou acessar o link de publicação acima.

```bash
git clone https://github.com/erikvks/amigo-secreto.git
cd amigo-secreto
```

## Tecnologias

HTML5 e CSS3 fornecidos pela Alura, JavaScript e Google Fonts (Inter e Chakra Petch).

## Créditos

Exercício proposto pela [Alura](https://www.alura.com.br), que disponibilizou o layout, o HTML, o CSS e as imagens. A implementação do JavaScript é minha, feita do zero.
