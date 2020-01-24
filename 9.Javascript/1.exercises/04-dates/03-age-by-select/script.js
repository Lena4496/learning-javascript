/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    document.getElementById("run").addEventListener("click",() =>{

        // declarer variable année + date ajd 
        // + reusltat donc age :> l'année de la date d'ajd - les années du type
        let year = document.getElementById("dob-year").value;
        let date = new Date ();
        let age = date.getFullYear() - year; 

    alert (age);

    });
