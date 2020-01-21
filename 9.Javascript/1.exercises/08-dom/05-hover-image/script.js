/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector("img").addEventListener("mouseover",() => {
        /* au passage d ela souris sur img execute la function qui contient */
        let image = document.querySelector("img").getAttribute("data-hover");
        /* une variable qui devient la val de l'attribut de img */
        document.querySelector("img").setAttribute("src", image);
        /*  remplace attribut source = setAttribute ( name (ce qu'on veut changer), valeur qu'on veut mettre*/
        
    });
})();
