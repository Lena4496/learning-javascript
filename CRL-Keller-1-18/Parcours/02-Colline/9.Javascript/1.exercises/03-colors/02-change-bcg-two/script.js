
    document.getElementById("run").addEventListener("click",() =>{ 
        // au click lance la fonction => qui prendra la valeur de la variable color
        let color = document.getElementById('color').value
        /*la var color sera la valeur(.value) ce qui a été prit avec getEBI
        et pas juste le string 'color', donc bcp de couleur existante*/
        document.body.style.backgroundColor = color;
         // et qui change le style du body (background) par color
        
    })
