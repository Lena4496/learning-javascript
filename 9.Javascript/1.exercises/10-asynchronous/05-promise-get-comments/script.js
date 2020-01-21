/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", () => {
    /* au click execute la fonction qui contient */
    window.lib.getPosts()
        .then(articles => {
            /* recup methode getpost et seulement après*/
            articles.forEach(article => {
                /* pour chaque article du tableau article execute */
                window.lib.getComments(article.id).then(comment => {
                    /* recup la fonction getComment  enprenant les id de chaque article et seulement après salut tu aimes les coquelic */
                    article.comment = comment;
                    /* definir comment via les comm dans les article */
                });

            });
            console.log(articles);
        });
    /* afficle le tableau */
});
// your code here
