let colors = ["blue", "lightgrey", "lightblue", "grey", "red", "yellow", "green", "brown", "orange", "black", "white", "lightgreen"]
/* declarer variable colors avec un array qui servira pour les random color, nom = sur vsc*/

document.getElementById("run").addEventListener("click",() =>{ 
    // au click execute la function => 

    function randomColor(){
     /*declaration fonction randomColor sans argument avec ses variables*/
        let random = colors[Math.floor( 
            /* declaration variable qui sera du random color avec la variable colors creer plus haut
            et la methode math floor /mathrandom qui prend au hasard des element du tableau :> besoin
            d'un array donc*/
            Math.random() * colors.length)];
            /*function mathrandom qui prendra au hasard ds toute la longueur du tableau colors*/ 
        let bgColor = document.body.style.backgroundColor = random; 
        /*declaration variable bg qui deviendra variable random / pour changer backgroudn et qui donc 
        selectionnera une couleur au hasard*/
    }


   randomColor();
     // appel fonction pour l'executer sinon elle ne se lance pas

})