/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    function pb (x){
        /* creation de fonction avec comme parametre x qui correspond à */
        y=parseInt(document.getElementById(x).innerHTML)
        /* declarer variable Y qui sera un entier (recup le X et changer) */

        if (y<document.getElementById(x).getAttribute('data-max')){
            /* si ( condition = y est plus pertit que l'attribut datamax de x ) */
            y+=1
            /* y =  y + 1 */
            if(y<10){
                document.getElementById(x).innerHTML = "0"+y 
                /* si (condition :> y ets + petit que 10 alor change le text de element x par string 0 + 
                    valeur y ) */
            }else{
                document.getElementById(x).innerHTML = y
                /* si pas, change la valeur de x par y */
            }
        }
        else{
            if(x=='part-one'){
                /* sinon, si (condition => x est égale à element part one) */
                document.getElementById(x).innerHTML='460'
                /* va changer le text de l'id X par '460' */
            }
            document.getElementById(x).innerHTML='00'
            /* sinon change x par 00 */
        }
        document.getElementById('target').innerHTML ='+'+ document.getElementById('part-one').innerHTML + document.getElementById('part-two').innerHTML + document.getElementById('part-three').innerHTML + document.getElementById('part-four').innerHTML
    }       /* l'element target devient :> "+" + l'element part one changé +  element par 2 / 3 /4*/
    document.getElementById("part-one").addEventListener("click", () => {
        /* au click de part one, affiche function pour par one et repete pour les auttres */
        pb('part-one')
    })
    document.getElementById("part-two").addEventListener("click", () => {
        pb('part-two')
    })
    document.getElementById("part-three").addEventListener("click", () => {
        pb('part-three')
    })
    document.getElementById("part-four").addEventListener("click", () => {
        pb('part-four')
    })

