document.addEventListener('keydown', function (event) { console.log('keydown');

    /* a l'event ici touche enfoncée fait la fonction */
    switch (event.keyCode) { 
        /* switch cmme argument */

        case 96 : 
            document.querySelector("#character").style.backgroundColor= "lightblue"
            break;

    
        case 97 : 
            document.querySelector("#character").style.backgroundColor= "yellow"
            break;

        case 98:
            document.querySelector("#character").style.backgroundColor = "red" 
            break;

        case 99:
            document.querySelector("#character").style.backgroundColor = "blue"  
            break;
        
        case 100:
            document.querySelector("#character").style.backgroundColor = "green"       
            break;

        case 101:
            document.querySelector("#character").style.backgroundColor = "orange"            
            break;
        
         case 102:
            document.querySelector("#character").style.backgroundColor = "pink"     
            break;

        case 103:
                document.querySelector("#character").style.backgroundColor = "grey"                
                break;
        
        case 104:
            document.querySelector("#character").style.backgroundColor = "purple"
           break;

        case 105:
            document.querySelector("#character").style.backgroundColor = "lightgreen"
           break;
        
        }
});

    document.addEventListener("keydown", function (event) {
        switch (event.keyCode) {
            case 37:

            document.querySelector("#left").classList.add("highlight")
            
                
                break;
            
            case 38:
            document.querySelector("#up").classList.add("highlight")
                
                break;
            
            case 39:
            document.querySelector("#right").classList.add("highlight"); console.log("ok");
            
                
                break;
            
            case 40:
            document.querySelector("#down").classList.add("highlight")
                
                break; 
            
            
        };
    });

        
    document.addEventListener("keyup", function (event) {

            switch(event.keyCode){ 

            case 37: 
                document.querySelector("#left").classList.remove("highlight") 
    
            break;

            case 38:
            
                document.querySelector("#up").classList.remove("highlight"); console.log(document.querySelector("#up").className);
                

            break;

            case 39:
                document.querySelector("#right").classList.remove("highlight"); console.log( document.querySelector("#right").className);
                
            break; 

            case 40:
                document.querySelector("#down").classList.remove("highlight")
            break; 

            }

        });




