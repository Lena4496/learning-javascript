
    const people = [
        {
            firstname: "Bradford",
            lastname: "Coldbath",
            email: "bcoldbath0@wired.com",
        },
        {
            firstname: "Nadiya",
            lastname: "Stendell",
            email: "nstendell1@nsw.gov.au",
        },
        {
            firstname: "Auroora",
            lastname: "Stapford",
            email: "astapford2@wsj.com",
        },
        {
            firstname: "Berkley",
            lastname: "McKall",
            email: "bmckall3@about.me",
        },
        {
            firstname: "Wolf",
            lastname: "McCurley",
            email: "wmccurley4@yale.edu",
        },
        {
            firstname: "Jorrie",
            lastname: "Canedo",
            email: "jcanedo5@engadget.com",
        },
        {
            firstname: "Bethanne",
            lastname: "Ackred",
            email: "backred6@imgur.com",
        },
        {
            firstname: "Zorah",
            lastname: "Whild",
            email: "zwhild7@sogou.com",
        },
        {
            firstname: "Jean",
            lastname: "Dupont",
            email: "jdupont@elpais.com",
        },
        {
            firstname: "Zulema",
            lastname: "Ericsson",
            email: "zericsson9@ed.gov",
        },
        {
            firstname: "Brady",
            lastname: "Scrannage",
            email: "bscrannagea@google.fr",
        },
        {
            firstname: "Isidore",
            lastname: "Korf",
            email: "ikorfb@google.com",
        },
        {
            firstname: "Bartholomew",
            lastname: "Stockbridge",
            email: "bstockbridgec@is.gd",
        },
        {
            firstname: "Laney",
            lastname: "O' Mara",
            email: "lomarad@forbes.com",
        },
        {
            firstname: "Gabe",
            lastname: "Keatch",
            email: "gkeatche@google.fr",
        },
    ];

    document.getElementById("run").addEventListener("click", () => { 
        // au click execute la function
    
        people.forEach(element => { 
            /*dans le tabeau people .pour chaque (ici element) execute la fonction qui
            est une condition */
            if (element.firstname == "Jean" && element.lastname == "Dupont"){
                /*si (condition = element. first name est = a jean et que element last name est 
                egale a dupont alors consol log l'email et l'index de l'element donné) */
                console.log(element.email);
                console.log(people.indexOf(element));
            }
            
        });
         
    
        });
