/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("addition").addEventListener("click", () => { 
        //prend l'element Addition a l'evenement click
        let numero1 = +(document.getElementById("op-one").value) 
       /* first declarer variable pour 1er chiffre qui est = à "+"" à la place de parseInt - parsint analyse une string
        qui est argument et le renvoit en Integer (entier) ici il va chercher la valeur (d'ou le .value) ds l'input OP-One */
        let numero2 = +(document.getElementById("op-two").value)
        // same
        let result = numero1+numero2; // declarer var resultat (qd on veut resultat de nbr1 et 2)=  x+ y+ alerte avec var resultat
        alert(result)
    });

    document.getElementById("substraction").addEventListener("click", () => {
        let numero1 = +(document.getElementById("op-one").value) // no parseInt => meilleur "+"
        let numero2 = +(document.getElementById("op-two").value)
        let result = numero1-numero2;
        alert(result)
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let numero1 = +(document.getElementById("op-one").value)
        let numero2 = +(document.getElementById("op-two").value)
        let result = numero1*numero2;
        alert(result)
    });

    document.getElementById("division").addEventListener("click", () => {
        let numero1 = +(document.getElementById("op-one").value)
        let numero2 = +(document.getElementById("op-two").value)
        let result = numero1/numero2;
        alert(result)
    });


})();
