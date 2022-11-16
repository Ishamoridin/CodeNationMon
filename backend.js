const modules = require(`./funBin.js`);
const gameText = document.getElementById(`gameText`)
class creature {
    constructor(name, species) {
        this.name=name;
        this.species=species;
        this.health=100;
        this.satiation=100;
        this.happiness=100;
        this.energy=100;
    }
    eats(){
        if (this.satiation<=50){gameText.innerText=`${this.name} digs in to a hearty meal`
            this.satiation+=50
        if (this.energy<=50){this.energy+=50}
            else if (this.energy>50)this.energy=100}
            else {gameText.innerText=`${this.name} is too full to eat right now`}
    }
    rests(){
        if (this.energy<=50){gameText.innerText=`${this.name} begins to rest`
            this.energy+=50}
            else {gameText.innerText=`${this.name} isn't tired enough to rest`}
    }
    plays(){
        if (this.happiness<=50 && this.health>=50 && this.satiation>=50 && this.energy>=50){
            gameText.innerText=`${this.name} is happy that you played with them`
            this.happiness+=50}
        else if (this.health<50){
            gameText.innerText=`${this.name} is too unwell to play right now`
        }
        else if (this.satiation<50){
            gameText.innerText=`${this.name} is too hungry to play right now`
        }
        else if (this.energy<50){
            gameText.innerText=`${this.name} is too tired to play right now`
        }
    }
    setName(){
            if (document.getElementById(`enterCreatureName`).value!=false){
                this.name=document.getElementById(`enterCreatureName`).value;
                document.getElementById(`enterCreatureName`).innerText=""}
                else {console.log(`Empty name cannot be applied`)}

    }
}
document.getElementById(`iChooseShark`, () => {
    new creature(Jaws, shark)
});
document.getElementById(`iChooseTiger`, () => {
    new creature(Tigger, tiger)
});
document.getElementById(`iChooseEagle`, () => {
    new creature(Eddy, eagle)
});
document.getElementById(`setNameButton`, () => {})