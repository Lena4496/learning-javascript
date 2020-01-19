(() => {
    const birds = [
    {name: "mouette", fem: true},
    {name: "corbeau"},
    {name: "mésange", fem: true},
    {name: "hibou"},
    {name: "buse", fem: true},
    {name: "pigeon"},
    {name: "pie", fem: true},
    {name: "vautour"},
    {name: "faucon"},
    {name: "rouge-gorge"},
    {name: "tourterelle", fem: true},
    {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré",
    ]);
    
    let arrAdjectives = Array.from(adjectives);
    /* declarer un nouveau tableau car actives est un Set donc on change le set en
    array avec array.from (a partir d'un objet/set ) */
    let adjective ;
    /* declarer pour argument if / else  */
    
    document.getElementById("run").addEventListener("click", () => {
        /* au click execute la function  qui contient ce code */
        let birdIndex = Math.floor(Math.random() * birds.length);
        /* la variable est egale a  un nom random ds la longueur du tableau */
        let adjectivesIndex = Math.floor(Math.random() * arrAdjectives.length);
        /* la varriable prendd un nom aleatoir ds l array adjectif cree a partir d'un set */
        if (birds[birdIndex].fem)
        /* si ds le tableau boerf d'index est avec .fem  */
            adjective = `${arrAdjectives[adjectivesIndex]}e`;
            /* alors la var sera egale a une chaine de caractère generer aleatoirement
            declareer avec `${nom du tableau [nom index]}e` */
        else
            adjective = `${arrAdjectives[adjectivesIndex]}`;
            /* sinon la var sera egale a une chaine de caractère generer aleatoirement
            declareer avec `${nom du tableau [nom index]}` */
    
        console.log(`${birds[birdIndex].name} ${adjective}`);
        /* affiche avec console log `${nom tableau [index] le nom et adjective} */
        document.getElementById("target").textContent = (`${birds[birdIndex].name} ${adjective}`)
        /* sinon fait ave des +" " + */
    })
    })();