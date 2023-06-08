const FRONT = "card_front";
const BACK = "card_back";

let techs = [
    'bootstrap',
    'css',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
];
    let cards  = null;

    startGame();

function startGame(){
    let cards = createCardFromTechs(techs);
    shuffleCard(cards);
    console.log(cards)
}

function shuffleCard(cards){
    let currentIndex = cards.length;
    let randomIndex;
 // !== diferente
    while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
        }
}
createCardFromTechs(techs);
function createCardFromTechs(techs) {
    let card = [];

    for(let tech of techs) {
        card.push(createPairFromTech(tech));
    }

    return card.flatMap(pair => pair);
}

function createPairFromTech(tech) {
    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false, 
    
    }, {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false, 
    }]

}

function createIdWithTech(tech) {
    return tech + parseInt(Math.random() * 10000);
}