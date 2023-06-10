let game = {
    techs: [
        "bootstrap",
        "css",
        "firebase",
        "html",
        "javascript",
        "jquery",
        "mongo",
        "node",
        "react"
    ],

    cads: null,

   createCardFromTechs: function (techs) {
        this.cards = [];
    
        techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech));
        })
    
        return this.cards.flatMap(pair => pair);
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
    
    },
    
    createIdWithTech: function (tech) {
        return tech + parseInt(Math.random() * 10000);
    },
}