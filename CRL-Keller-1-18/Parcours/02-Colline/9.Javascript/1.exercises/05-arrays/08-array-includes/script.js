/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
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
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {
        /* au click execute la fonction */
        console.log(fruits.includes("pomme"));
        /* dans la console log (dans la tableau fruit, methode include qui regarde si il y a 
            la valeur entre ("") dans le tableau et qui verifie en renvoyant true si c'est ds le tableau
            et false si il n'y a pas) OUI OU NON ??? Boolen!! */

        /* peut aussi faire ça mais c'est pas boleen
        
        fruits.forEach(fruit => {
            if (fruit == "pomme") {
                console.log("Oui");    
            } else
                console.log("nope");
        }); */
    });

    // your code here
})();
