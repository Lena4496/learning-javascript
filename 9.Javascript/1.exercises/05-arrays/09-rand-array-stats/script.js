/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    document.getElementById("run").addEventListener("click", () =>{ 
        /* au click execute la function contenant */
        let numbers = []; 
        /* une variable numbers qui est un tableau vide */
        for (let i = 1; i <= 10; i++) {
            /* boucle for initie a 1 (de 1 a 100), tant que index est + petit ou egale a 10 +
            incrementation */
            let number = Math.floor(Math.random() * 100)+ 1;
            /* la variable number sera des nombres aléatoires entre 1 et 100 avec
            mathfloor- arrondi (choisit des nombres au hasard () jusque 100) + le debut oui c chelou */
            document.getElementById("n-"+ i).textContent = number;
            /* prend l'endroit input n- + l'index et et change ca par la variable number qui est nbr aleatoire */
            numbers.push(number);
            /* et envois ds le tableau vide la variable aléatoire */
        }
        /* puis fait  */
        let somme = 0; 
        /* declarer somme pour sum et average faire la somme avec boucle et pas includes() je pourrais le faire */
        for(let i= 0; i<numbers.length; i++){
            /*boucle for init a 0 , tant que l'index et plus petit que la longue du tableau + incre */
            somme = somme + numbers[i];
            /* execute ce code qui est la somme vide + chaque index des nombres aleatoire */
        }

        document.getElementById("min").textContent = Math.min(...numbers);
         /* prend min ds le doc il sera = au plus petit nombre du tableau 
         numbers + "..." pour aller ds element tableau  */
        document.getElementById("max").textContent = Math.max(...numbers);
        /* nombre max du tableau */
        document.getElementById("sum").textContent = somme;
        /* sera = a la somme des index */
        document.getElementById("average").textContent = somme/numbers.length; 
        /* la moyenne etant la somme / par la longueur du tableau faire averga = somme/array.lengt */  

    });


    // your code here
})();
