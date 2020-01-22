/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", async function (){
        /* au click  fait appel à la fnoction async => async function () */
        let articles = await window.lib.getPosts();
        /* definir une vaiable pour la console log, la var contient ce qu'on souhaite recup
        ds le lib, await = attend */
        console.log(articles)
        /* afficher la var article qui a attendu  */


    });
    // your code here
})();
