/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    console.log(fruits)

    let sansDouble ;

    document.getElementById("run").addEventListener("click", () => {
        /*au  click execute la fonction qui contient */

        sansDouble = new Set(fruits);
        /* la variable sansDouble qui est egale au tableau set avec des valeurs uniques
        */
        sansDouble = [...sansDouble];
        /* sans double devient sans souble sans les doublons avec ... */
        console.log(sansDouble)
    });