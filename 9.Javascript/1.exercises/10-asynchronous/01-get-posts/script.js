/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, arrayArticles) =>{
            /* window lib machin est une function declarée précedemment je ne sais ou ; la premier ( c'ets para de la function)
            etla deuxieme est le call back est un paramatre le la fonction et il contient des arguments */
            /* execute fonction avec dedans console log ici  */

            console.log(arrayArticles);

        })
    });
    // your code here
})();
