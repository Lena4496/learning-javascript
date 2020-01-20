/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    let Src = document.getElementById('source');
    /* definir variable qui ira cherche l'element source ds document */
    let Img = Src.getAttribute('data-image');
    /* definir variable qui recuperera la valeur de l'attribut de la balise */

    document.getElementById('target').innerHTML = "<img src='"+Img+"' >";
    /* change la blise en balise image + l'attribut  */

    source.remove(); 
    /* remove la balise source */
    
    
})();
