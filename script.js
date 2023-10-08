"use strict" ;

//Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
// ----> Objet Personnage, valeur prénom, valeur santé mentale

//Nous avons besoin d’une liste de 5 musiquesdont Anissa - Wejdene
// ----> Tableau de 5 valeurs dont Anissa-Wejdene

//Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements
// ----> Objet Trajet, valeur feux rouges 30, valeur changement 0 (+1 par Anissa)


// --------------------------------------------------------
let musique=["Anissa - Wejdene","I will pick you up - S3RL","Beggin' - Maneskin","Believe - Folder 5","Thank God - Rilès"]; //Créer une variable avec ces valeurs
console.log(musique); //Donne la liste des valeurs
console.log(musique.length); //Dit le nombre de valeurs dans le tableau



// --------------------------------------------------------
// On crée la classe "personnage", qui va nous permettre de créer le notre.
class Personnage {
    // On attribue au personnage des caractéristiques
    constructor(nom, SanteMentale) {
      this.nom = nom; // Comment il va s'appeler
      this.SanteMentale = SanteMentale; // Son nombre de points de vie (santé mentale)
    }
}

function getRandomIntInclusive(min, max) { //On importe la fonction aléatoire
    min = Math.ceil(min); // On définit ce qu'est le minimum
    max = Math.floor(max); // On définit ce qu'est le maximum
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// --------------------------------------------------------


let Michel = new Personnage("Michel",10)
// On crée le personnage Michel, on lui attribue 10 points de vie.

let NbrFeux = 30;
// Il y aura 30 feux, donc 1 chance sur 5 par feu.

for (let feux = 1; feux <= NbrFeux; feux++) {
    // Une chance sur 5 de faire passer la musique Anissa
    if ((musique[getRandomIntInclusive(0,musique.length)])== musique[0]) { // Wejdene est en valeur 0 dans le tableau
     
        Michel.SanteMentale -= 1; 
      console.log(`Feu n°${feux}/30: Michel n'en peux plus de cette musique, il perd 1PV, il ne lui en reste plus que ${Michel.SanteMentale}PV`);
    } else {
      // Sinon, il continue le trajet on relance la boucle.
      console.log(`Feu n°${feux}/30: Michel aime bien cette musique ! Il continue le trajet après avoir utiliser Shazam`);
    
    }
    if (Michel.SanteMentale==0) { //Condition de défaite (La santé mentale atteint 0 PV)
        console.log(`Feu n°${feux}: Michel tombe K/O !!! Il explose, RIP MICHEL`);
        break;
    }
    if (feux==NbrFeux) { //Condition de Victoire (Michel atteint les 30 feux, en vie)
        console.log(`Michel arrive enfin chez lui ! Il va pouvoir se reposer`);
        break;
    }
}

// --------------------------------------------------------
// TEST 5PTS DE SANTE MENTALE
// TEST 1 : K/O FEU 18
// TEST 2 : Arrivée à destination avec 2PV
// TEST 3 : K/O FEU 27
// TEST 4 : K/O FEU 23
// TEST 5 : Arrivée à destination avec 3PV
// --------------------------------------------------------
// TEST 10PTS DE SANTE MENTALE
// TEST 1 : Arrivée à destination avec 6PV
// TEST 2 : Arrivée à destination avec 6PV
// TEST 3 : Arrivée à destination avec 3PV
// TEST 4 : Arrivée à destination avec 4PV
// TEST 5 : Arrivée à destination avec 2PV
// TEST 6 : Arrivée à destination avec 5PV
// TEST 7 : Arrivée à destination avec 4PV
// TEST 8 : Arrivée à destination avec 3PV
// TEST 9 : Arrivée à destination avec 6PV
// TEST 10 : Arrivée à destination avec 1PV
// AUCUNE MORT AU BOUT DE 80 TESTS
// PREMIERE MORT TEST 87 FEU n°23
// DEUXIEME MORT TEST 126 FEU n°29
// TROISIEME MORT TEST 198 FEU n°27
// 3 MORTS EN 200 TESTS
// --------------------------------------------------------
