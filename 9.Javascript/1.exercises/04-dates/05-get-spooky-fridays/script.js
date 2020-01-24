/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later
// declarer date et month
let date= new Date();
/* declarer date */
let month = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin" , "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
/* declarer tableau avec mois pour recup */
document.getElementById("run").addEventListener("click", () => {

    // declarer variable année 
    let year = document.getElementById("year").value;

    for (let i = 0; i < 12; i++) {
        /* faire boucle for qui */
        date.setDate(13);
        date.setMonth(i);
        date.setYear(year);
        if (date.getDay() == 5) {
            /* si c'est le 5 eme jour, console log le mois */
            console.log(month[i])
            
        }

        
        
    }
})
