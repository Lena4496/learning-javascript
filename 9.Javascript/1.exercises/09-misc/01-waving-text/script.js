(() => {
    // your code here
      function random(min, max) {
            return Math.floor(Math.random()*max)+min;
      }

      const str = document.getElementById("target").innerHTML;
      document.getElementById("target").innerHTML = "";
      let array = str.split("");

      //Static Wave
      array.forEach(element => {
             let span = document.createElement("span");
            span.innerHTML = element;
             let size = 1 + (random(0, 6)/10) + "em";
            span.style.fontSize = size;
             document.getElementById("target").appendChild(span);
         });

      //Dynamic Wave
     /* setInterval( () => {
            document.getElementById("target").innerHTML = "";
            arr.forEach(el => {
                  let span = document.createElement("span");
                  span.innerHTML = el;
                  let size = 1 + (random(0, 6)/10) + "em";
                  span.style.fontSize = size;
                  document.getElementById("target").appendChild(span);
            });
      },200);*/
})();