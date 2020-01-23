
(() => {
    document.getElementById("run").addEventListener("click", () =>{
        /*  */
        let recupName = document.getElementById("hero-name").value;
        let recupAlt = document.getElementById("hero-alter-ego").value;
        let recupPower = document.getElementById("hero-powers").value;

        fetch("http://localhost:3000/heroes", {

            method: 'POST',
            headers : {
                'Content-Type':'application/json;charset=UTF-8'

            },
            body: JSON.stringify({

                name: recupName,
                alterego: recupAlt,
                power: recupPower,
            }),

        })
        .then((res) => res.json())
        .then((data) => console.log(data)) 
        

        




    });
    // au click, get e b id run . add event listener click function
    // recup valeur formulaire :> variable / 
    // creer hero donc objet? ds l'api
    // affiche resultat consol 
    // pouvoir ds array?
})();
