/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("pass-one").addEventListener("input",(event) => {
    /* prend pass one et à l'input */
    let oki = document.getElementById("pass-one");
    /* creer variable ok qui sera l'input */
    oki.maxLength='20';
    /* la longueur max de oki = "X" */
    
    document.getElementById("counter").innerHTML=oki.value.length+'/20';
    /* prend counter et change par la longue de la valeur de oki + /sur 10 */
        });