/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("slider").addEventListener("input", () => {
     /*va chercher slide et à l'input (click gardé) */
        
        document.getElementById("target").textContent = "+"+document.getElementById("slider").value 
        /* va cherche target et change le text par = "+" pour rajouter le plus, +  */
    });
    /* facon de marco - declare une variable où tu met l'id target pareil pour l'id slider
    et ensuite declare une variable qui en fait sera une fonction quis 'enclenche direct
    exemple  : let valueChanger = () =>{ .. } et du coup pas besoin d'appeller la fonction*/
    
    // your code here
})();
