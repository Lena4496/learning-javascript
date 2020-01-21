/* becode/javascript
 *
 * /10-asynchronous/00-example/script.js - 10.0: exemple d'asynchronicité
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {
    const setupIntervalMessage = /* nom function si on veut reutiliser*/(label, delay) => {
        /* la constante declarée avce parametre (label et delay) est a la fonction quo
        contient une variable count à 0 et qui return */
        let count = 0;

        return setInterval(() => console.log(`${label}:`, ++count), delay);
        /* renvoit la function setInterval qui compte le temps avant de faire qqch
        et donc ici il fait consol log d'un truc /* call back ds setInterval  */
    };

    let intervals = [];
    /* creation tableau vide pour push  */

    document.getElementById("run").addEventListener("click", () => { 
        if (intervals.length) {
            intervals = intervals.filter(clearInterval);
            console.clear();
        }

        intervals.push(setupIntervalMessage("one", 1000));
        intervals.push(setupIntervalMessage("two", 1333));
        intervals.push(setupIntervalMessage("three", 2500));
        intervals.push(setupIntervalMessage("four", 5000));
        intervals.push(setupIntervalMessage("five", 10000));
    });
    // ctrl + r pour arreter cette merde
})();
