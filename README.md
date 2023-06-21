# Jogo-Da-Memoria
 link para o projeto :https://moon-day.github.io/Jogo-Da-Memoria.github.io/
 conteudo do projeto:
 
 1.Propriedades do objeto game:<br>

lockMode: Uma flag que indica se o jogo está bloqueado ou não. Quando está true, impede que as cartas sejam viradas.
firstCard e secondCard: Representam as duas cartas selecionadas pelo jogador para verificar se são iguais.
techs: Uma lista de tecnologias usadas no jogo. Cada tecnologia será associada a um par de cartas.
cards: Armazena todas as cartas do jogo.<br>

 2.Método setCard:<br>
Recebe o id de uma carta selecionada pelo jogador.
Filtra a lista de cartas para encontrar a carta correspondente ao id.
Se a carta já estiver virada (flipped) ou o modo de bloqueio estiver ativado (lockMode), a função retorna false, indicando que a ação não foi válida.<br>
Se a variável firstCard ainda não estiver definida, a carta selecionada é atribuída a firstCard e marcada como virada (flipped). A função retorna true para indicar que a ação foi bem-sucedida.
Caso contrário, a carta selecionada é atribuída a secondCard e marcada como virada (flipped). O modo de bloqueio é ativado e a função retorna true.<br>

3.Método checkMatch:<br>

Verifica se firstCard e secondCard estão definidos.
Retorna true se os ícones das duas cartas forem iguais, indicando que houve uma correspondência.<br>
4.Método clearCards:<br>

Limpa as variáveis firstCard e secondCard, bem como o modo de bloqueio.<br>
5.Método unflipCards:<br>

Marca as duas cartas selecionadas como não viradas (flipped = false).
Chama o método clearCards para limpar as variáveis.<br>
6.Método checkGameOver:<br>

Filtra as cartas que ainda não foram viradas (!card.flipped).
Retorna true se não houver mais cartas não viradas, indicando que o jogo acabou.<br>
7.Método createCardsFromTechs:<br>

Cria as cartas do jogo com base na lista de tecnologias (techs).
Para cada tecnologia, chama o método createPairFromTech para criar um par de cartas com o ícone correspondente à tecnologia.
Concatena todos os pares de cartas e embaralha a ordem usando o método shuffleCards.
Retorna as cartas criadas.<br>
8.Método createPairFromTech:<br>

Cria um par de cartas com base em uma tecnologia específica.
Gera um id único para cada carta usando a tecnologia e um número aleatório.
Retorna um array contendo duas cartas com o mesmo id, ícone (tecnologia) e flipped definido como false.<br>
9.Método createIdWithTech:<br>

Gera um id único para uma carta com base na tecnologia e em um número aleatório.<br>
10.Método shuffleCards:<br>

Embaralha aleatoriamente a ordem das cartas usando o algoritmo de Fisher-Yates.
Percorre a lista de cartas do último ao primeiro (currentIndex).
Gera um índice aleatório (randomIndex) para trocar a carta atual (currentIndex) com uma carta em uma posição anterior.
Realiza a troca das cartas usando a técnica de desestruturação de array.
Repete o processo até que todas as cartas tenham sido percorridas.
 
![jogo-da-memoria](https://github.com/Moon-Day/Jogo-Da-Memoria.github.io/assets/97771245/26981e92-526e-417c-ac76-62d070d2ffe4)
