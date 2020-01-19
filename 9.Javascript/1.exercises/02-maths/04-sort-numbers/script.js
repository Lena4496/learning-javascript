/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// let nombre2; 
// let chaine;
// nombre = parseInt(nombre2); 

(() => {// declarer var let i =  /juqque ou ca va ; qqce ca doit faire 
    // to get the value of an input: document.getElementById("element-id").value
    
    let nombre = document.getElementById("numbers").value
    // declarer variable nombre qui est egale à la valeur (.value)de l'input numbers 
    let nombre2 = nombre.split (", ")
    // declarer 
    document.getElementById("run").addEventListener("click", () => {
        
        
        for (let i = 0; i < nombre2.length; i++) { // init boucle + qqce qu elle doit faire ici tant que i est plus petit que ; ajoute +1)
            
            nombre2[i] = parseInt(nombre2[i]) // l'index de nbr2 est egale a l'index de nombre deux transformé en  entier (plusstring)
            // console.log(nombre2[i])
        }
        alert(nombre2.sort((a,b) => a-b)); //pour trier tutilise ca et tu ftg
        
        console.log(nombre2) // afficher nombre2 ds console log
        

        // alert (nombre.sort(function(a, b){return a-b}));
    });

})();
