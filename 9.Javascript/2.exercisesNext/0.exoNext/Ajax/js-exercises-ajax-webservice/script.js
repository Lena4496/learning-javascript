// creer variable qui stockera objet requete
 let xhr = new XMLHttpRequest;
 //appeler function .open, GETPOST etc , l'url de l'api, en asyncrhone ou non, true default
 xhr.open('GET', 'https://thatsthespir.it/api')
 //appeler function .onlad
 xhr.onload = function() 
     {
         // si le statut est ok - 200
         if (this.status === 200) 
             {
                 // revoit la reponse du serveur en un objet avec .json et parse + stock ds une variable
                 let response = JSON.parse(this.responseText);
                // et met ça ds le document 
                document.getElementById("quote").innerHTML = 
                `<p>${response.quote}</p>
                <img alt="no images" src="${response.photo}"></img>
                <p> ${response.author}</p>
                <p> ${response.id} </p>`
                // coma pour ecrire ds le html
        }else if(this.status=== 404){
            return "ERROR"

        }else{
            return "FORBIDDEN"
        
        }
}

document.getElementById("button").addEventListener("click", () => {
    window.location.reload()
})
// button for refresh au click fait ça 
// const quote = 

 //call send
 xhr.send();
 xhr.onload();
 
 



























// function show(){
//     let arr = [];
//     for (let i = 2; i <= 100; i+=2) {
    
//         arr.push(i);    
//     } console.log(arr);
   
//     return arr;

// }
// show();
// // 
// let object = {}



// class Prout {
//     constructor (nape,gg,ko){
//         this.name =  nape;
//         this.age = gg;
//         this.color = ko
//     }
//     attack(){
//         return `${this.name} pet`;
//     }
// }

// const lena = new Prout("lena");
// const kevin = new Prout("kevin", 58 )


// console.log(lena.attack());

// console.log(kevin.attack());





// function getSecond(gg){
//     let minutes = gg * 60;
//     return minutes
// }

// name(243)


//  console.log(minutes)









// async function cool(){

//     let response = await fetch ("https://thatsthespir.it/api");
    
//     console.log(response);
    
//     let data = await response.json(); 
    
//     console.log(data);
    

//     document.getElementById("quote").innerHTML = 
//     `<p>${data.quote}</p>
//     <img src="${data.photo}"></img>
//      <p> ${data.author}</p>
//      <p> ${data.id} </p>`
     
// }

// cool();