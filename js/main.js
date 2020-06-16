/* Projet Partie 3 - 17/01/20 */
console.log('ok-Main');

let inputElt = document.getElementById('inputName2');
let inputElt2 = document.getElementById('inputPassword2');
let btn = document.getElementById('button');
// on commence par desactiver le bouton quand le javascript se charge
btn.disabled = true;

// ajout d'une fonction appelee des qu'une touche est enfoncee
function isCharSet() {
  // on verifie si le champ n'est pas vide alors on desactive le bouton sinon on l'active
  if (inputElt.value != "" && inputElt2.value !=  "") {
    btn.disabled = false;

  } else {
    btn.disabled = true;

  }  
}

