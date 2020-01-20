/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person{
        /* init class avec Name */
        constructor(lastname, firstname){
            /* constructor contiendra : ... propriété */
            this.lastname = lastname;
            this.firstname = firstname;
        }

        Hey(){
            /* function ( methode de class) hello sans para */
            return "Hey," + this.lastname + " " + this.firstname ;
            /* renvoit juste string + propriété */
        }
    }
    document.getElementById("run").addEventListener("click",() =>{
        /* au click execute function qui contient */
        let human = new Person ("Chapeaubas", "Henry")
        /* declarer variable humain avec instance => nom */
        console.log(human.Hey());
        /* applique la methode hey donc reurn le nom etc d ehumain  */

    });
    // your code here
})();
