/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

    document.getElementById("run").addEventListener("click", async () => {
        let id = await fetch("http://localhost:3000/heroes");
        let recupXmen = await id.json(); console.log(recupXmen);
        /* creation de variable id qui ira cherche le tableau heroes ds ...
        + creation variable qui mettre sous form json l'id */


        let input = document.getElementById("hero-id").value ; console.log(input);
        /* creer variable qui recup valeur renseignée de l'input */
        const trouve = recupXmen.find(element => element.id == input); console.log(trouve);
        /* creer variabke qui array.prototype.find le recup xmen (element execute fonction qui demande si l'input
        est = à l'id de l'element ) */
        

        if(trouve){
            /* si trouve :> comment  */
            confirm("As-tu reussi? Click sur ok si oui")
            /* ecrit ça */
            
        }
        else{
            confirm("Aucun id trouvé")
        }

        document.getElementById("target").innerHTML = 
        /* change l'id target par :> */
        /* afficher structure html need `` et modifie la val de l'idé par la variable  */
                  `  <div id=${trouve.id}> 
                        <li class="hero">
                            <h4 class="title">
                                <strong class="name">${trouve.name}</strong>
                                <em class="alter-ego">${trouve.alterEgo}</em>
                            </h4>
                            <p class="powers">${trouve.abilities}</p>
                        </li>
                    </div>
                `
        });
    

