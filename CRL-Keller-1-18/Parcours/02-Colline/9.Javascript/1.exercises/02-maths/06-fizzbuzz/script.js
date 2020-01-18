/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

for (let i = 1; i < 101; i++) { //  commencement boucle / init à 1 / qqce qui fait / incremetation pour boucle 
   if (i % 3 === 0){
       if(i % 5 === 0){
           console.log("fizzbuzz")
       }
       else{

           console.log("fizz")
       }
   }
   else if(i % 5 === 0){
       if(i%3===0){

       }
       else{

           console.log("buzz")
       }
   }
   else{
       console.log(i)
   }
    
}
})();
