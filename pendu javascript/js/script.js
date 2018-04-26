/*Astuce

Utiliser la console ou les fonctions natives suivantes :

    window.prompt();
    window.alert();
    window.confirm();

Le jeu !

Info : le nombre d'essais est illimité

    Créer un tableau pour contenir les lettres du mot : 'B','O','N','J','O','U','R',

    Créer un autre tableau pour mettre les lettres devinées : '','','','','','','_'

    Écrivez une fonction appelée "guessLetter" cette fonction va :
        Itérer à travers les lettres
        Voir si la lettre deviné se trouve dans le mot
        Si oui changer le tableau des lettres deviné pour ajouter la nouvelle lettre
        Afficher dans la console les lettre devinés
        Le jeu doit savoir quand la partie est finie et féliciter le joueur

    Bonus : Se rapprocher du vrai pendu :
        Gardez en mémoire toutes les lettres devinées (bonnes et mauvaises) et seulement laisser l'utilisateur deviner une lettre une fois.
        Si une lettre est entrée deux fois, ne rien faire.
        compter le nombre de tentatives ratées
*/

var bonjour = ['B','O','N','J','O','U','R'];
var devine = ['','','','','','',''];
var erreurLettre = [];
var tentativeRate = 0;


function debutJeu () { 
  confirm("Voulez-vous jouer?");
    if(true){
        guessLetter();
    }else{
        alert("C'est dommage, à la prochaine !");
    }
}

function guessLetter(){
    var lettre = prompt("Donnez une lettre.");
        lettre = lettre.toUpperCase();
    for (i = 0; i < bonjour.length ; i++){
      if (lettre === bonjour[i] && devine[i] !== bonjour[i]){
          console.log(lettre, i);
                  // devine.splice(i, 1, lettre); // = retire un élément à la position i et ajoute "lettre"
          devine[i] = lettre;
          console.log(devine);
          alert(devine.join(' '));
        }
    }
    if (bonjour.includes(lettre) == false && erreurLettre.includes(lettre) == false) {  //voir si bonjour inclu la lettre & que erreurLettre n'inclu pas déjà la lettre
          erreurLettre.push(lettre);
          console.log(erreurLettre);
          tentativeRate++;
          alert("Tentatives ratées = "+tentativeRate);
    }
    if (bonjour.join('') === devine.join('')){   //méthode join('') pour changer les éléments du array en string, sinon, un strictement égal === ne parvient pas à comparer les éléments 'string' d'un array
        alert("gagné !");
        document.write(devine.join(''));
    } else if(tentativeRate === 8){
        alert("perdu !");
    }
    else {
        guessLetter();
    }
}




/*
var classA = [ {name:'Marc', moyenne: 15}, {name: 'Julie', moyenne: 8}, {name: 'Antoine', moyenne: 4}]
var classB = [ {name:'Charles', moyenne: 18}, {name: 'Sophie', moyenne: 12}, {name: 'Pedro', moyenne: 13}]

function aLaMoyenne(eleves){
        for (var i = 0; i < eleves.length; i++) {
            if(eleves[i].moyenne >= 10){
                console.log(eleves[i]);
            }
        }
}

aLaMoyenne (classA);
aLaMoyenne (classB);
*/
