/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: // ha nope
    let date = new Date();
    let hours = date.getHours();
    // let hour = (new Date()).getHours();
    
    console.log(hours);
    

    if (hours < 18){
        document.getElementById("target").innerHTML = "Bonjour";
    }
    
    else (hours > 18)
    {
        document.getElementById("target").innerHtml = "Bonsoir";
    }

    console.log(hours);
    

})();
