
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
        // au click execute la fonction qui sera

        for (let i = 0; i < fruits.length; i++) {
            /*une boucle for qui donnera  et qui demarre a 0, tant que l'i est plus petit que la longueur
            du tableau, puis incrementation pour pas merder */
            const element = fruits[i];
            /* une variable element qui seront les index du tableau */
            console.log(element)
            /*et affiche a la console la variable element qui seront les element du tableau */
            
        }
    
        
    
        //fruits.forEach(element => console.log(element));
         /*pour chaque element du tableau fruits, affichee ds la console 
         l'element du tableau fruit */

            
        })


   
