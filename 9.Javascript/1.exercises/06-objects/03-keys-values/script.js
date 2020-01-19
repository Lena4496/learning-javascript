/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };

    document.getElementById("run").addEventListener("click", () =>{
        // au click execute la fonction qui contient
        console.log(Object.entries(person))
        // ou :>
        //console.log(Object.keys(person), Object.values(person))

        // affiche ds la console ( les clé de object person ici, et)
        // affiche ensuite "," les valeurs de l'object ici person
        


    });
    // your code here
})();
