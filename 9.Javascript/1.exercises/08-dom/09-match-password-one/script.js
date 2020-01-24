/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click",() => {
    let pass = document.getElementById("pass-one");
    let confirm = document.getElementById("pass-two");
    /* declarer variable pour input */
    if(pass.value!=confirm.value){
        pass.style.border= "2px dashed red";
        confirm.style.border="2px dashed red"
    }
    else{
        pass.style.border= "2px dotted lightblue";
        confirm.style.border="2px dotted lightblue";
    }

});