/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [ // declaration tableau avec une constante et []
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "kiwi",
            "banane",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise",
        ];

    let four = fruits[3]
    /*declaration variable pour avoir l'element qu'on veut ds l'array ici le 4ème 
    donc on ecrit [3] vu que ça commence a 0;*/
    document.getElementById("run").addEventListener("click", () => { 
        // au click execute la fonction qui contient un

        console.log(four); 
        // afficher ds la console la variable qu'on veut voir ici four  

   
})
    

    // your code here
})();
