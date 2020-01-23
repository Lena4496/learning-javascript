
document.getElementById("run").addEventListener("click", () => {

    let dataInput = document.getElementById("hero-id").value; 
    /* declarer variable qui prend la valeur de l'id mit */
    ///console.log(dataInput);
    
    fetch('http://localhost:3000/heroes/'+dataInput,{
    method: 'DELETE',
    /* methode qui delete */
    })
    
})