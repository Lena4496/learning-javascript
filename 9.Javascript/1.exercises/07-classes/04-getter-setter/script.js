/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        /* declaration de class Person */
        constructor(firstname, lastname){
            /* constructor contenant propriété */
            this.firstname = firstname;
            /*la propriété - firstname - de cette classe ici Person*/
            this.lastname = lastname;
            /*la propriété - lastname - de cette classe ici Person*/
        }

        get Name(){
            return this.firstname +" " + this.lastname
            /* renvois la propriété  */
        }

        set Name(string){
            /* stock valeur unique? */
            let stringSplit = string.split (" ");
            /* declaré variable qui devient les string separer par "espace" */
            this.firstname = stringSplit [0]
            this.lastname = stringSplit [1]
        }
    }
    document.getElementById("run").addEventListener("click", () => {

    let human = new Person ("Marco", "Polo");
    console.log(human.Name," ", human.Name = "Chaussette Crey"," ", human);
    /* console log avec nom humain de départ */
    //console.log(human.Name = "Chaussette Crey");
    /* consol log en etablissant  un nouveau nom donc en declarant variable directe  */
    //console.log(human);
    /* instance de new Person */

    });
    
})();
