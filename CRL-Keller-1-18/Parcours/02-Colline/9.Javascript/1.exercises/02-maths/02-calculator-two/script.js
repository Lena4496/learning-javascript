/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.

    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let numero1 = parseInt(document.getElementById("op-one").value); 
        /*parseInt converti les "string" en chiffre entier => utilisé "+" devant arrgument est mieux*/
        let numero2 = parseInt(document.getElementById("op-two").value);
        switch (operation){
            case 'addition':
                alert(numero1+numero2)
                break;
            case 'substraction':
                alert(numero1-numero2)
                break;
            case 'multiplication':
                alert(numero1*numero2)
                break;
            case 'divison':
                alert(numero1/numero2)
                break;
        }
    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
}
