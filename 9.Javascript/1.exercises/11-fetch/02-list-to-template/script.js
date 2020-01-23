document.querySelector("#run").addEventListener("click", async () => {
    // au click execute fonction  qui sera asynchrone
   let response = await fetch("http://localhost:3000/heroes");
   /* au lieu d'ecrire fetch... .then :> ecrit async ... puis declare variable qu 
   sera await (then) et fetch (variable = attend la reponse de fetch et stock ds variable (ici rep)) */
   //console.log(response)
    /* va chercher donné ds => le chemin */
    let donnee = await response.json(); 
    /* decla eune variable qui attendre d'avoir la reponse en objet tableau  */
    //console.log(donnee);
    
    document.getElementById("target").innerHTML = 
    /* ecrit dans target ce qui suit ; 
    pour chaque (element) return  */
    donnee.map((perso) => {
        /* map = "foreach" */
       return /* return entre coma pour mettre du html  changer template par div et mettre perso(var) id/ce qu'on veut au lieu de tpl hero*/`
                <div id=${perso.id}>
                
                    <li class="hero">
                        <h4 class="title">
                            <strong class="name">${perso.name}</strong>
                            <em class="alter-ego">${perso.alterEgo}</em>
                        </h4>
                        <p class="powers">${perso.abilities}</p>
                    </li>
                </div>
            `
    })

});