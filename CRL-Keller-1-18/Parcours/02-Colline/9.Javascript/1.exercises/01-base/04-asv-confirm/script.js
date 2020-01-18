/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    do{
        let userAge = prompt("Quel est ton âge?");
        let userName = prompt("Quel est ton prénom?");
        let userTown = prompt("Quel est ta ville?");

        var conf= confirm("Ton age est bien " +userAge+ " et ton prénom est bien "+userName+ " ainsi que ta ville qui est bien " +userTown+ "?");
    }

    while(conf==false );
    
