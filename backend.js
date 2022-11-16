// const modules = require(`./funBin.js`);
const gameText = document.getElementById(`gameText`)                                                                    // Shorthand for the main game text 
let playerFullName = "" + document.getElementById(`fname`).value + " " + document.getElementById(`lname`).value;        // Reading full player name from inputs
let playerName = "" + document.getElementById(`fname`).value                                                            // Reading first name from inputs
let playerGender = document.getElementById(`gender`).value                                                              // Reading player gender from inputs
let playerPronouns = []
switch (playerGender){                                                                                                  // Setting player pronouns based on gender
    case male       :   playerPronouns=[`he`, `him`, `his`];break;
    case female     :   playerPronouns=[`her`, `her`, `hers`];break;
    case neuter     :   playerPronouns=[`they`, `them`, `theirs`];break;
    default         :   console.log(`Invalid Gender`);break;
}
class creature {                                                                                                        // Defining creature class
    constructor(name, species) {                                                                                        // 
        this.name=name;                                                                                                 // Name of object from argument
        this.species=species;                                                                                           // Species of object from argument
        this.health=100;                                                                                                // Health set to 100
        this.satiation=100;                                                                                             // Satiation set to 100
        this.happiness=100;                                                                                             // Happiness set to 100
        this.energy=100;                                                                                                // Energy set to 100
    }
    eats(){                                                                                                             // Eating method increases satiation if below 50, by 50
        if (this.satiation<=50){gameText.innerText=`${this.name} digs in to a hearty meal`
            this.satiation+=50
        if (this.energy<=50){this.energy+=50}
            else if (this.energy>50)this.energy=100}
            else {gameText.innerText=`${this.name} is too full to eat right now`}
            this.updateBars()
    }
    rests(){                                                                                                            // Resting method increases rest if below 50, by 50
        if (this.energy<=50){gameText.innerText=`${this.name} begins to rest`
            this.energy+=50}
            else {gameText.innerText=`${this.name} isn't tired enough to rest`}
            this.updateBars();
    }
    plays(){                                                                                                            // Playing method increases happiness by 50, 
        if (this.happiness<=50 && this.health>=50 && this.satiation>=50 && this.energy>=50){                            // if happiness is below 50
            gameText.innerText=`${this.name} is happy that you played with them, ${playerName}`                         // and all of energy/health/satiation are above 50
            this.happiness+=50
        }
        else if (this.health<50){
            gameText.innerText=`${this.name} is too unwell to play right now, ${playerName}`                            // Returns this message if health is too low
        }
        else if (this.satiation<50){
            gameText.innerText=`${this.name} is too hungry to play right now`                                           // Returns this message if satiation is too low
        }
        else if (this.energy<50){
            gameText.innerText=`${this.name} is too tired to play right now`                                            // Returns this message if energy is too low
        };
        this.updateBars();
    }
    setName(){                                                                                                          // Object is created with default name
            if (document.getElementById(`enterCreatureName`).value!=false){                                             // then updated with player input
                this.name=document.getElementById(`enterCreatureName`).value}                                           // provided this is not a null string
                else {console.log(`Empty name cannot be applied`)}
    }
    updateBars(){                                                                                                       // Method for updating on-screen bars
        healthBar.value=this.health;                                                                                    // Included in every method that alters their values
        satiationBar.value=this.satiation;
        energyBar.value=this.energy;
        happinessBar.value=this.happiness;
    }
}
document.getElementById(`iChooseShark`, () => {                                                                         // Event handler for creating Shark
    new creature(Timmy, shark)
});
document.getElementById(`iChooseTiger`, () => {                                                                         // Event handler for creating Tiger
    new creature(Timmy, tiger)
});
document.getElementById(`iChooseEagle`, () => {                                                                         // Event handler for creating Eagle
    new creature(Timmy, eagle)
});
document.getElementById(`setNameButton`, () => {                                                                        // Event handler for naming creature
    Timmy.setName()
})
document.getElementById(`start`, () => {startGame()})                                                                   // Event handler for starting game