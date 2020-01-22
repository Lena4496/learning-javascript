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
        y=parseInt(document.getElementById(x).innerHTML)
        if(y<document.getElementById(x).getAttribute('data-max')){
            y+=1
            if(y<10){
                document.getElementById(x).innerHTML = "0"+y
            }else{
                document.getElementById(x).innerHTML = y
            }
        }
        else{
            if(x=='part-one'){
                document.getElementById(x).innerHTML='460'
            }
            document.getElementById(x).innerHTML='00'
        }
        document.getElementById('target').innerHTML ='+'+ document.getElementById('part-one').innerHTML + document.getElementById('part-two').innerHTML + document.getElementById('part-three').innerHTML + document.getElementById('part-four').innerHTML
    }
    document.getElementById("part-one").addEventListener("click", () => {
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

