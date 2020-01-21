/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat { 
        constructor(name, age, color) {
            this.name = name;
            this.age = age;
            this.color = color;

        }
    }

    document.getElementById("run").addEventListener("click", () => {
        // au click execute function qui contient
        const skitty = new Cat ("Skitty", 9, "Grey")
        // creation var qui sera une instance de cat new + nom class
        const pixel = new Cat ("Pixel", 6, "Black")
        console.log(skitty, pixel)


    });

    // your code here
})();
