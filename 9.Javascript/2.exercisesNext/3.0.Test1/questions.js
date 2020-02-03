/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let be = texte1+texte2; // ou : concat() methode
    return be 

}
let afficherCar5 =  (texte) => {
    let str = texte.charAt(4)
    return str

}
let afficher9Car =  (texte) => {
    let str = texte.substr(0,9);
    return str

}
let majusculeString =  (texte) => {
    let maj = texte.toUpperCase();
    return maj

}
let minusculeString =  (texte) => {
    let min = texte.toLowerCase();
    return min

}
let SupprEspaceString =  (texte) => {
    let noSpace = texte.trim();
    return noSpace

}
let IsString =  (texte) => {
    if(typeof texte ==='string'){
    return true
    }
    else{
        return false

    };

  
}

let AfficherExtensionString =  (texte) => {

    return texte.split(".").pop();

}
let NombreEspaceString =  (texte) => {
  
    return texte.split(" ").length - 1 ;
    

}
let InverseString =  (texte) => {

    return texte.split("").reverse().join('');
    // split met en tableau les elements , reverse les inverses et join les remet ensemble

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y)
    // math pow calcule puissance d'un nombre = x nbr a mettre en puissance y = puissance a faire

}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre)

}
let valeurAbsolueArray =  (array) => {
    for (let i = 0; i < array.length; i++) {
        
        array[i]= Math.abs(array[i])
        
    }
    return array


}
let sufaceCercle =  (rayon) => {

    let surface = Math.PI * (rayon * rayon);
    return Math.round(surface)
}
let hypothenuse =  (ab, ac) => {
    
    let hypo = Math.hypot(ab, ac)
    return hypo

}
let calculIMC =  (poids, taille) => {

    let imc = poids /(taille * taille);
    return Math.round(imc*100)/100

    // 
}
