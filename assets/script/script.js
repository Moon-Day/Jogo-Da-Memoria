const FRONT = "card_front";
const BACK = "card_back";
const CARD =  "card";
const ICON = "icon";




    startGame();

function startGame(){
    cards = createCardFromTechs(techs);
    shuffleCard(cards);
    initializeCards(cards);
}

function initializeCards(cards){
    let gameBoard = document.getElementById("gameBoard");
   
    cards.forEach((card) =>{

        let cardElement = document.createElement("div");
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener("click", flipCard)
        gameBoard.appendChild(cardElement);


    })


}

function createCardContent(card, cardElement){

    createCardFace(FRONT, card, cardElement );
    createCardFace(BACK, card, cardElement);


}

function createCardFace(face, card, element){

    let cardElementFace = document.createElement("div");
    cardElementFace.classList.add(face);
    if(face === FRONT){
        let iconElement = document.createElement("img");
        iconElement.classList.add(ICON)
        iconElement.src = "./assets/img/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);
    }else{
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);

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



function flipCard() {
    this.classList.add("flip")
}