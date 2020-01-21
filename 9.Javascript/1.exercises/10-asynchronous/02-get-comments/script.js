/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        /* au click execut efunction */
        window.lib.getPosts((error, arrayArticles) =>{
            /* appeler function get post qui prend 1 argument qui est un est un call back
            qui contient 2 parametres */
            arrayArticles.forEach((article) => {
                /* pour chaque article dans tableau articles execute function qui */
                window.lib.getComments(article.id, (error, arrayComment) /* para callback */ =>{
                    /* appelle getComments qui contient 2 argu et le deuxieme est un call back qui contient
                    2 parametres */
                    article.comments = arrayComment ;
                    /* ajouter commentaire obtenu ds propriété comment de l'article 
                    article . comment => creer une propriété comment e tje lui assigne arrayComment */
                })
                
            });
            console.log(arrayArticles)
            /** affiche  */
        })

    });
    // your code here
})();
