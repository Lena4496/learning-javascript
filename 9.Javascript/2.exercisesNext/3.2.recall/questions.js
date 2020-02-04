let selectElementsStartingWithA = (array) => {
    return array.filter(element => element[0] === 'a')
    // filtre le tableau et renvoit l'element si la premiere lettre est === à A
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(element => element[0] === 'a' || element[0] === 'e' || element [0] ==='i' || element [0] ==='o' || element [0] ==='u'|| element [0] ==='y')
    // filtre le tableau et check les element, pour la premiere valeur de l'element check si c'est A ou e ou ...

}

let removeNullElements = (array) => {
    
    return array.filter(element => element != null);
    // renvoit le tableau filtré de tout les null , renvoit tout les element different de null
}

let removeNullAndFalseElements = (array) => {
    return array.filter(element => element !== null && element !== false);
    
}

let reverseWordsInArray = (array) => {
 for (let i = 0; i < array.length; i++) {
     array[i] = array[i].split('').reverse().join('');
 }
    return array
};

 

let everyPossiblePair = (array) => {
 let newArr=[];
 newArr.push([array[2], array[0]]);
 newArr.push([array[2], array[1]]);
 newArr.push([array[0], array[1]]);
 return newArr

}

let allElementsExceptFirstThree = (array) => {
    
    return array.splice(3, array.length - 3)
}

let addElementToBeginning = (array, element) => {
    array.splice(0, 0, element);//array.unshift(element)
    // tableau.splice (où on le met, 0 supprime rien 1 supprime la position 0, ce qu'on veut add)
    return array
}

let sortByLastLetter = (array) => {
    return array.map( element => element.split('').reverse().join('')).sort().map(element=> element.split('').reverse().join(''))
}

let getFirstHalf = (string) => {
    return string.substr(0,Math.ceil(string.length/2));
}

let makeNegative = (number) => {
    return -Math.abs(number)
}

let numberOfPalindromes = (array) => {
    let arr = [];
    //creer nnew tableau pour push dedans les palin 

    array.forEach(element => {
        // pour chaque du tableau - element stock ds palin le mot split puis revers epuis join
        let palin = element.split('').reverse().join('');
    if (element == palin) {
        // si l'element est egal a la variable alors push l'element ds le tableau vide
        arr.push(element)
    }

    });
    return arr.length
    // return array.filter(element => element.split('').reverse().join('').length)
}

let shortestWord = (array) => {

    let mot = "ejjeejejjejeje";
    // variable qui stock mot long
    for ( let i = 0; i < array.length; i++) {
        // parcours le tableau et si la longueur de l'element de l'array est plus petit
        
        // que le mot long alors le mot est remplacé par le mot long
        if(array[i].length < mot.length){
            mot=array[i] 
        }
    }
    return mot
}

let longestWord = (array) => {
    let mot ="h";
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > mot.length){
            mot = array[i]
        }
        
    }
    return mot
}

let sumNumbers = (array) => {
    let num = array.reduce((a,b) => a+b, 0)
    return num;
    // return array.reduce((a,b) => a+b,0)
}

let repeatElements = (array) => {

   return [array, array].flat();
   // flat enleve bracket interne de deux tableaux mit ds un tableau
//    let arr=[]
//     for(i=0;i<2;i++){
//         for(el in array){
//             arr.push(array[el])
//         }
//     }
}

let stringToNumber = (string) => {
    return +(string)
}

let calculateAverage = (array) => {
    let total = 0;
        for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let moyenne = total / array.length;
    return moyenne
    
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
