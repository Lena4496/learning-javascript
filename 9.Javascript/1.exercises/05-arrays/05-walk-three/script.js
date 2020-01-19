
    const people = [
        {
            firstname: "Garald",
            lastname: "Freschi",
            email: "gfreschi0@discuz.net",
        },
        {
            firstname: "Bendicty",
            lastname: "Foster-Smith",
            email: "bfostersmith1@mysql.com",
        },
        {
            firstname: "Michelle",
            lastname: "Draude",
            email: "mdraude2@csmonitor.com",
        },
        {
            firstname: "Cathee",
            lastname: "Meineck",
            email: "cmeineck3@t-online.de",
        },
        {
            firstname: "Marianna",
            lastname: "Coal",
            email: "mcoal4@creativecommons.org",
        },
    ];
    
    document.getElementById("run").addEventListener("click", () => { 
        // au click execute la fuction qui sera
    
        people.forEach(element => console.log(element.firstname));
         /*ds array people pour chaque, (ici element du tableau), execute la function
         console log qui afichea l'element firsname*/ 
                    
         // l'element => afficher ds console quoi ? element. ce qu'on veut
            
        })

