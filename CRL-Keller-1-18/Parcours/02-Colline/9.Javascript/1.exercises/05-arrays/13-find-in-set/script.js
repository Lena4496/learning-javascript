/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    document.getElementById("run").addEventListener("click", () => {
        // au click execute ce code

        console.log(people.size, people.has("Alexandre"))
        // console log pour afficher la taille du tableau people, nbr de truc dedans, et si
        // il y a alexandre comme value

    });

    // your code here
})();
