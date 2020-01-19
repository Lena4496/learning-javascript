/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // au click execute fonction contenant
    const moi = {
        // objet defini par const nom = entre { ici parametre : valeur}
        lastname :"Benoit",
        firstname : "Lena",
        age : 23,
        city : "Montignies-sur-Sambre",
        country : "Belgique",
    }
    console.log(moi);

    });
    
    // your code here
})(); 

/* ou = 
(() => {
    let date = new Date();
    let year = date.getFullYear();
    let birthday = 1996;

        const BL = {
            nom : "Benoit",
            prenom : "Léna",
            age : (year-birthday),
            ville : "Montignies-Sur-Sambre",
            pays : "Belgique",

          
        card : function() {
            console.log("prénom : " + this.nom + ", nom : " + this.prenom + ", âge : " + this.age + ", ville : " + this.ville + ", pays: " + this.pays + "." );
            }
        }
    document.getElementById("run").addEventListener("click", () => {

        BL.card();
})

})();
*/