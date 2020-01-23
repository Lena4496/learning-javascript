

        document.getElementById("run").addEventListener("click", () => { // fetch = outil pour chercher reponse ailleurs ds une api 
            /* au click va chercher avec fetch :> (le chemin) */
            fetch("http://localhost:3000/heroes").then(
                 //et seulement qd t'as recup l'adresse  
                  answer => answer.json().then( 
                    /*prend la reponse et rend la en json pour qu eca doit plus lisible */
                      // et seulement qd tu l'as mis en json (si la promesse est tenue)
                        heroes => heroes.forEach(perso => {console.log(perso);}) 
                         // prendre le tableau error e pour chaque element dtu tableau
                         //heroes consol log les element
                  ));
               });

/*  */
