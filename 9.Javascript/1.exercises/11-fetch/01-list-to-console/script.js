/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

        document.getElementById("run").addEventListener("click", () => { // fetch = outil pour chercher reponse ailleurs ds une api 
            /* au click va chercher avec fetch :> (le chemin) */
            fetch("http://localhost:3000/heroes").then(
                 //et seulement qd t'as recup l'adresse  
                  answer => answer.json().then( 
                      // declaration function reponse  
                        heroes => heroes.forEach(perso => { 
                         // chemin heroes donc tableau, fonction pour chaque (element) de heroes,
                              console.log(perso);
                              /* console log le perso */
                        })
                  ));

/* 

    });
    // your code here
