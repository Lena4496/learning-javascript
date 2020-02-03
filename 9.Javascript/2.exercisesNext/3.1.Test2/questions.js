let CreationTableauLangages =  () => {
    return langages = ["Html", "CSS", "Java", "PHP"]

}

let CreationTableauNombres =  () => {
    return nombres = [0,1,2,3,4,5]

}

let RemplacementElement =  (langages) => {
    
    langages.splice(2, 1, "Javascript");
    // var. splice (le nbr que tu veux changer, je veux en changer que un et par quoi changer)
    
    return langages

}

let AjoutElementLangages =  (langages) => {

    langages.push("Ruby","Python")
    return langages

}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2, -1)
    return nombres

}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages

}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages

}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let arr = reseaux_sociaux_chaine.split(",");
    return arr
    

}

let ConversionTableauChaine =  (langages) => {
    let chaine = langages.toString();
    return chaine

}

let TriTableau =  (reseaux_sociaux) => {
    let tri = reseaux_sociaux.sort();
    return tri

}

let InversionTableau =  (reseaux_sociaux) =>{

    let reverse = reseaux_sociaux.reverse('');
    return reverse

}
