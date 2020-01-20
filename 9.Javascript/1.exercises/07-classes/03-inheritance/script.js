/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    } /* class creer avec function say hello qui renbvoit à l'aide de `${this.constructor.static} ! sting + ${
        this.name
    } */
    
    class Cat extends Animal {
        /* nouvelle class Cat creer en heirtant de Animal */
        static greeting = "Soy un pero";
        /* propriété static est egale a */
        /* static permet de définir une méthode statique d'une classe.
         Les méthodes/prop statiques ne sont pas disponibles sur les instances d'une classe 
         mais sont appelées sur la classe elle-même. Les méthodes statiques sont généralement
        des fonctions utilitaires (qui peuvent permettre de créer ou de cloner des objets
         par exemple). */
        constructor (name){
            /* la class Cat creer en heritant d'animal contient une propriété static
            un constructeur (la propriété qu'on veut) */
            super();
            /* super est utilisé pour appeller une function d'un objet parent  ici animal
            qui contient funciton return hello*/
            this.name = name;
            /* definition propriété the cat */
        }
    }
    
    class Dog extends Animal {
        /* class dog creer a partir de class Animal */

        static greeting = "Soy un gato";
        /* definir static propriété  */
        constructor (name) {
            /* faire constructor ds classe avec les (propriété) */
            super();
            /* appel function de object Animal */
            this.name = name;
            /* definition propriété */ */
            
        }  
    }

    document.getElementById("run").addEventListener("click", () => {
        let Minou = new Cat ("Akarito");
        let Wouf = new Dog ("Kiki")

        console.log(Minou.sayHello(), Wouf.sayHello())
    });

