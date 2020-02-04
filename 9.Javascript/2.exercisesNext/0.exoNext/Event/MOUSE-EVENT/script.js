Array.from(document.querySelectorAll(".hoverMe")).forEach(element => {

    element.addEventListener("mouseover", (e) =>{
        console.log(element)
            element.style.opacity= 0;
            
    })
})