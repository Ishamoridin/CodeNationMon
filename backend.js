// const modules = require(`./funBin.js`);
const gameText = document.getElementById(`gameText`)                                                                    // Shorthand for the main game text 
let playerFName                                                                                                         // Reading first name from inputs
let playerLName
let playerGender                                                                                                        // Reading player gender from inputs
let creatureGender
let playerPronouns = []                                                                                                 // 
let creaturePronouns = []
let healthBar=document.getElementById(`health`)                                                                         // 
let chosenCreature = ""
let playerPet
let petChoice
let timePlayed = 0
const energyBar=document.getElementById(`energy`)                                                                       // 
const satiationBar=document.getElementById(`satiation`)                                                                 // 
const happinessBar=document.getElementById(`energy`)                                                                    // Shorthand for bars
function assignPlayerPronouns() {switch (playerGender){                                                                 // Setting player pronouns based on gender
    case male       :   playerPronouns=[`he`, `him`, `his`];break;
    case female     :   playerPronouns=[`her`, `her`, `hers`];break;
    case neuter     :   playerPronouns=[`they`, `them`, `theirs`];break;
    default         :   console.log(`Invalid Gender`);break;
}}
function assignCreaturePronouns() {switch (creatureGender){                                                             // Setting player pronouns based on gender
    case male       :   creaturePronouns=[`he`, `him`, `his`];break;
    case female     :   creaturePronouns=[`her`, `her`, `hers`];break;
    case neuter     :   creaturePronouns=[`they`, `them`, `theirs`];break;
    default         :   console.log(`Invalid Gender`);break;
}}
class creature {                                                                                                        // Defining creature class
    constructor(name) {                                                                                                 // 
        this.name=name;                                                                                                 // Name of object from argument
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
            this.energy+=50;
            if (this.health<=90){this.health+=10}                                                                       // And also heals the creature by up to 10
            else if (this.health > 90){this.health=100}
        }
            else {gameText.innerText=`${this.name} isn't tired enough to rest`}
            this.updateBars();
    }
    plays(){                                                                                                            // Playing method increases happiness by 50, 
        if (this.happiness<=50 && this.health>=50 && this.satiation>=50 && this.energy>=50){                            // if happiness is below 50
            gameText.innerText=`${this.name} is happy that you played with them, ${playerName}`                         // and all of energy/health/satiation are above 50
            this.happiness+=50
        }
        else if (this.happiness>50 && this.energy>=50){
            gameText.innerText=`${this.name} is ecstatic to play with you, to the point they tire themselves out`       // Minor negative consequence to playing while high happiness+energy
            this.happiness=100;this.energy-=50                                                                          // Creature uses half a full energy bar
        }
        else if (this.health<50){
            gameText.innerText=`${this.name} is too unwell to play right now, ${playerName}`                            // Returns this message if health is too low
        }
        else if (this.satiation<50){
            gameText.innerText=`${this.name} is too hungry to play right now, ${playerName}`                            // Returns this message if satiation is too low
        }
        else if (this.energy<50){
            gameText.innerText=`${this.name} is too tired to play right now, ${playerName}`                             // Returns this message if energy is too low
        };
        this.updateBars();
    }
    setName(){                                                                                                          // Object is created with default name
            if (document.getElementById(`enterCreatureName`).value!=false){                                             // then updated with player input
                this.name=document.getElementById(`enterCreatureName`).value                                            // provided this is not a null string
                creatureName=document.getElementById(`enterCreatureName`)}
                else {console.log(`Empty name cannot be applied`)}
    }
    updateBars(){                                                                                                       // Method for updating on-screen bars
        healthBar.value=this.health;                                                                                    // Included in every method that alters their values
        satiationBar.value=this.satiation;
        energyBar.value=this.energy;
        happinessBar.value=this.happiness;
    }
}

class shark extends creature {                                                                                          // Extending Creature class into Shark class
    constructor(name) {    
        super (name);
        this.species=shark;                                                                                             // Setting species to shark
    }
    lurk() {                                                                                                            // Unique action for Shark class
        if (this.satiation<=50){this.satiation+=50; gameText.innerText=`
        ${creatureName} lurks in the depths, snatching up a meal as the opportunity arises.
        All you hear is the ominous sound of your own heart beating DADUM, DADUM, DADUM`;
            if (this.happiness<=50){this.happiness+=50}
            else this.happiness=100}
        else if (this.happiness<=50){this.happiness+=50; gameText.innerText=`While not hungry right now ${creatureName} still takes comfort in lurking beneath the depths, as they were feeling glum`}
        else if (this.happiness>50){this.happiness=100; gameText.innerText=`${creatureName} isn't hungry right now and isn't interested in lurking, but appreciates you offering`}
    }
};

class tiger extends creature {                                                                                          // Extending Creature class into Tiger class
    constructor(name) {
        super (name);
        this.species=tiger;                                                                                             // Setting species to tiger
    }
    prowl() {                                                                                                           // Unique action for Tiger class
        if (this.satiation<=50){this.satiation+=50;
            gameText.innerText=`${creatureName} stalks the shadows of the jungle, seeking vulnerable and unwary prey to fill its belly`;
            if (this.happiness<=50){this.happiness+=50}
                else this.happiness=100
                }
            else if (this.happiness<=50){this.happiness+=50;
                gameText.innerText=`${creatureName} stalks the shadows of the jungle, not seeking food but taking comfort in the hunt nontheless`}
            else if (this.happiness>50){this.happiness=100;
                gameText.innerText=`${creatureName} yawns lazily, declining to prowl the jungle but glad of the chance to do so`}
    }
};

class eagle extends creature {                                                                                          // Extending Creature class into Eagle class
    constructor(name) {
        super (name);
        this.species=eagle;
    }
    fly() {                                                                                                             // Unique action for Eagle class
        if (this.energy<=50){gameText.innerText=`${creatureName} is too tired to take flight right now`}
            else if (this.satiation<=50){this.satiation+=50;
                gameText.innerText=`${creatureName} takes flight, using their keen vision to spot vulnerable prey and strike with precision`}
            else if (this.satiation>50 && this.happiness<50){this.happiness+=50;this.satiation=100;gameText.innerText=`${creatureName} takes flight, hunting not for sustenance but for pleasure`}
            else if (this.happiness>50){this.happiness=100;gameText.innerText=`${creatureName} remains sitting, choosing to stay with you instead of flying`}
    }
};

function tick() {
        if (playerPet.satiation>0){playerPet.satiation--};
        if (playerPet.satiation<50 && playerPet.energy>0){playerPet.energy--};
        if (playerPet.energy<50 && playerPet.satiation<50){playerPet.health--};
        if (playerPet.happiness<50){playerPet.energy--;playerPet.satiation--;playerPet.energy--};
        timeplayed++;document.getElementById(`time-played-bar`).innerText=`${(timePlayed/10)}s`;
};

function startGame() {
    console.log(`working`)
playerFName=document.getElementById(`fname`).value;
playerLName=document.getElementById(`lname`).value;
playerGender=document.getElementById(`gender`);
assignPlayerPronouns();
document.getElementById(`start-screen`).style.display=`none`;
document.getElementById(`selected-animal-screen`).style.display=`block`;
document.getElementById(`player-decision-wrapper`).style.display=`block`;
}

document.getElementById(`start-screen`).style.display=`block`;
document.getElementById(`selected-animal-screen`).style.display=`none`;
document.getElementById(`player-decision-wrapper`).style.display=`none`;
document.getElementById(`play-screen`).style.display=`none`


document.getElementById(`iChooseShark`).addEventListener('click', () => {                                               // Event handler for creating Shark
    petChoice=`shark`
});

document.getElementById(`iChooseTiger`).addEventListener('click', () => {                                               // Event handler for creating Tiger
    petChoice=`tiger`
});

document.getElementById(`iChooseEagle`).addEventListener('click', () => {                                               // Event handler for creating Eagle
    petChoice=`eagle`
});

document.getElementById(`confirm`).addEventListener(`click`, () => {
    switch (petChoice){
        case tiger:{let playerPet =  new tiger(Timmy);
            document.getElementById(`unique`).innerText="Prowl";
            playerPet.name=document.getElementById(`nickname-0`).value
            playerPet.gender=document.getElementById(`animal-gender-0`)};
            document.getElementById(`game-img`).src="./images/tiger2.jpg";
        break;
        case shark:{let playerPet = new shark(Timmy);
            document.getElementById(`unique`).innerText="Lurk";
            playerPet.name=document.getElementById(`nickname-1`).value
            playerPet.gender=document.getElementById(`animal-gender-1`)};
            document.getElementById(`game-img`).src="./images/shark.webp";
        break;
        case eagle:{let playerPet = new eagle(Timmy);
            document.getElementById(`unique`).innerText="Fly";
            playerPet.name=document.getElementById(`nickname-2`).value
            playerPet.gender=document.getElementById(`animal-gender-2`)};
            document.getElementById(`game-img`).src="./images/eagle.webp";
        break;
        default:
    };
    playerPet.setName()
    assignCreaturePronouns();
    document.getElementById(`selected-animal-screen`).style.display=`none`;
    document.getElementById(`player-decision-wrapper`).style.display=`none`;
    document.getElementById(`play-screen`).style.display=`block`;
})

document.getElementById("start").addEventListener('click', () => {startGame()})                                         // Event handler for starting game

document.getElementById("play").addEventListener(`click`, () => {playerPet.plays()})                                    // Event handler for Play button

document.getElementById("feed").addEventListener(`click`, () => {playerPet.eats()})                                     // Event handler for Feed button

document.getElementById("rest").addEventListener(`click`, () => {playerPet.rests()})                                    // Event handler for Rest button

document.getElementById("unique").addEventListener(`click`, () => {                                                     // Event handler for unique action, dynamic with species
    switch (this.species){
        case shark:this.lurk();break;
        case tiger:this.prowl();break;
        case eagle:this.fly();break;
        default: console.log(`invalid creature species`)
    }
})

while (playerPet.health>0){setTimeout(tick(), 100)}