
(() => {
    document.getElementById("run").addEventListener("click", () =>{
        /* au click execute function */
        let recupName = document.getElementById("hero-name").value;
        /* creer variable qui recup la val de l'id  */
        let recupAlt = document.getElementById("hero-alter-ego").value;
        /* creer variable qui recup la val de l'id  */
        let recupPower = document.getElementById("hero-powers").value;
        /* creer variable qui recup la val de l'id  */

        fetch("http://localhost:3000/heroes", {
            /* va chercher sur (lechemin) */

            method: 'POST',
            /* methode post = envoyé truc sur serveur */
            headers : {
                'Content-Type':'application/json;charset=UTF-8'
                /* met ça */

            },
            body: JSON.stringify({
                /* body rend en string */

                name: recupName,
                /* propriété + val (nom variable) */
                alterego: recupAlt,
                power: recupPower,
            }),

        })
        .then((response) => response.json())
        /* seulement qd c fait prend la réponse met la en json */
        .then((data) => console.log(data)) 
        /* seulement  */
        

        




    });
    // au click, get e b id run . add event listener click function
    // recup valeur formulaire :> variable / 
    // creer hero donc objet? ds l'api
    // affiche resultat consol 
    // pouvoir ds array?
})();
