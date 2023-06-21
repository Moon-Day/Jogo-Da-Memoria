// Propriedades do objeto game:
//techs: Uma lista de tecnologias usadas no jogo. Cada tecnologia será associada a um par de cartas.
let game = {

    lockMode: false,
    //
    //lockMode: Uma flag que indica se o jogo está bloqueado ou não. Quando está true, impede que as cartas sejam viradas.

    firstCard: null,
    //
    secondCard: null,
    //
    //firstCard e secondCard: Representam as duas cartas selecionadas pelo jogador para verificar se são iguais.
    

    techs: ['bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'],
//cards: Armazena todas as cartas do jogo.

    cards: null,

    setCard: function (id) {
    //    
        //Método setCard:Recebe o id de uma carta selecionada pelo jogador.
        //Filtra a lista de cartas para encontrar a carta correspondente ao id.
        let card = this.cards.filter(card => card.id === id)[0];
        console.log(card);
        if (card.flipped || this.lockMode) {
            return false;
        }
        //Se a carta já estiver virada (flipped) ou o modo de bloqueio 
        //estiver ativado (lockMode), a função retorna false, indicando que a ação não foi válida.

        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
            //Se a variável firstCard ainda não estiver definida, a carta selecionada é atribuída a firstCard e marcada como virada (flipped). 
            //A função retorna true para indicar que a ação foi bem-sucedida.
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
            //Caso contrário, a carta selecionada é atribuída a secondCard e marcada como virada (flipped). O modo de bloqueio é ativado e a função retorna true.
        }

    },

    checkMatch: function () {
     //   
        if (!this.firstCard || !this.secondCard) {
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon;
        //Método checkMatch:Verifica se firstCard e secondCard estão definidos.Retorna true se os ícones das duas cartas forem iguais, indicando que houve uma correspondência.
    },

    clearCards: function () {
    //    
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
        //Método clearCards: Limpa as variáveis firstCard e secondCard, bem como o modo de bloqueio.
    },
    unflipCards() {
    //    
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    //Marca as duas cartas selecionadas como não viradas (flipped = false).Chama o método clearCards para limpar as variáveis.
    },

    checkGameOver() {

        return this.cards.filter(card => !card.flipped).length == 0;
        //Filtra as cartas que ainda não foram viradas (!card.flipped).
        //Retorna true se não houver mais cartas não viradas, indicando que o jogo acabou.
    },





    createCardsFromTechs: function () {
    //    
        this.cards = [];

        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech));
        })
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
        //Cria as cartas do jogo com base na lista de tecnologias (techs).Para cada tecnologia, chama o método createPairFromTech para criar um par de cartas com o ícone correspondente à tecnologia.Concatena todos os pares de cartas e embaralha a ordem usando o método shuffleCards.Retorna as cartas criadas.
    },

    createPairFromTech: function (tech) {

        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }, {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }]
        //Cria um par de cartas com base em uma tecnologia específica.Gera um id único para cada carta usando a tecnologia e um número aleatório.Retorna um array contendo duas cartas com o mesmo id, ícone (tecnologia) e flipped definido como false.
    },

    createIdWithTech: function (tech) {
        return tech + parseInt(Math.random() * 1000);
        //Gera um id único para uma carta com base na tecnologia e em um número aleatório.
    },

    shuffleCards: function (cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
        //Embaralha aleatoriamente a ordem das cartas usando o algoritmo de Fisher-Yates.Percorre a lista de cartas do último ao primeiro (currentIndex).Gera um índice aleatório (randomIndex) para trocar a carta atual (currentIndex) com uma carta em uma posição anterior.Realiza a troca das cartas usando a técnica de desestruturação de array.Repete o processo até que todas as cartas tenham sido percorridas.
    }



}