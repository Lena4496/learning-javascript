let mot = ["ola","miche", "frite", "voiture", "brouette","chaton","bourge","bougie","noel","rocher","montagne","rodeo","quiche","pet","rat","pc","javsccript"];
let reponse = "";
let maxWrong = 6;
let erreur = 0;
let devine = [];
let status = null ;

function motAleatoire(){

    reponse = mot[Math.floor(Math.random() * mot.length)];

}


// function guessLetter(){
//     for (let i = 0; i < array.length; i++) {
//         if()
        
//     }


// }

function genererBouton() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(lettre => 
        `<button
                class="btn btn-lg btn-primary m-2"
                id='` + lettre + `
                onClick="handleGuess('` + lettre + `')"
            >
                ` + lettre + `
            </button>
        `).join('');

    document.getElementById("keyboard").innerHTML = buttonsHTML;
}

function handleGuess(chosenLettre){
    guessed.indexOf(chosenLettre) === -1 ? guessed.push(chosenLettre) : null;
    document.getElementById(chosenLettre).setAttribute('disabled', true);

    alert(reponse)


    if(reponse.indexOf(chosenLettre) >= 0){
        guessedWord();
    }
}




function guessedWord(){
    status = reponse.split("").map(lettre => (devine.indexOf(lettre) >= 0 ? lettre :" _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = status;

}


document.getElementById('maxWrong').innerHTML = maxWrong;



motAleatoire();
genererBouton();
guessedWord();