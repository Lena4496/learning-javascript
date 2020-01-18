/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
/* declare un tableau avec un constante et les valeurs sont les fruits */
    document.getElementById("run").addEventListener("click", () => { 
        // au click execute la fonction qui continent des variables qui changent le tableau

        let first = fruits.shift(); 
        /*creer une variable qui changera le tableau fruits en enlevant le premier de la liste avec
        la methode .shift*/ 
        let last = fruits.pop(); // enlever dernier de l'array
        let start = fruits.unshift('banane'); // add un truc au debut
        let end = fruits.push('kiwi'); // add un truc en fin

        console.log(fruits); // afficher ds la console  la const fruit
        // peut-etre qu'on peut optimiser pour qu'il ne parcours pas 10x le tableau?)
   
})
    // your code here
})();
