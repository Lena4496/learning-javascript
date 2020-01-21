/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let targets = Array.from(document.getElementsByClassName("target"));
    /*declaration variable qui sera et creera un array à partir des "p" ici class target */
    targets.forEach(target => {
        /* poour chaque target (element) de tableau targets execute la function */
        target.textContent = "jtainikey";
        /* change element target en  */
        
    });
        
    
})();
