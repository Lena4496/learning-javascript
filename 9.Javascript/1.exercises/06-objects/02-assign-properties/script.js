/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    //console.log(computers)

    document.getElementById("run").addEventListener("click", () =>{
            // au clic execute la fuccntion qui contient
        computers.forEach(element => {
            /* dans tableau . pour chaque (element => execute cette function */
            if (!element.hasOwnProperty("available"))
            /* si (condition = element n'as pas ( !). has own property = 
            retourne un boolen si il a la propriété specifié dans ""sans que
            ca proviennent de la chaine de caractère , ("available
            en proprieté ")) */
                element.available = defaultProps.available
                /* l'element ici available devient element par defaut */
            if (!element.hasOwnProperty("os"))
                //same
                element.os = defaultProps.os

            if (!element.hasOwnProperty("user"))
                element.user = defaultProps.user
                
        
        
        });
    console.log(computers)
        
    

    });
    
})();
