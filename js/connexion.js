var valids = {};

function error($champ, nbCharacMinimum) {
  valids[$champ.attr('id')] = false;

  $champ.css({
    // on rend le champ rouge
    borderColor: 'red',
    color: 'red'
  });

  $(`#${$champ.attr('id')}-display-error`).text(`Ce champ est requis et nécessite au moins ${nbCharacMinimum} caractères`);
}

function success($champ) {
  valids[$champ.attr('id')] = true;

  $champ.css({
    // on le rend vert
    borderColor: 'green',
    color: 'green'
  });

  $(`#${$champ.attr('id')}-display-error`).text('');
}

function applyValidation($champ, nbCharacMinimum) {
  // Par défaut, rien n'est entré donc on affiche erreur
  error($champ, nbCharacMinimum);

  $champ.keyup(() => {
    if ($champ.val().length < nbCharacMinimum) {
      // si la chaîne de caractères est inférieure à nbCharacMinimum
      error($champ, nbCharacMinimum);
    } else {
      success($champ);
    }
  });
}

function isAllValid() {
  for (let key in valids) {
    // Permet d'itérer dans un objet
    if (!valids[key]) {
      // Si champs non valide on renvoie faux, rien ne sert de continuer
      return false;
    }
  }

  return true;
}

$(() => {
  const inputLogin = $('#identifiant-form');
  const inputPassword = $('#mot-de-passe-form');
  const inputButtonConnect = $('#button-connect');

  // Pour gérer la validation et afin d'éviter la redondance de code, on passe
  // par une fonction
  applyValidation(inputLogin, 4);
  applyValidation(inputPassword, 5);

  // GESTION DU BOUtON DISABLED SI CHAMPS NON VALIDES

  // On passe par un objet, et à chaque fois qu'un des champs est modifié
  // La fonction success ou error se chargera de mettre à jour le booléen attaché
  // à son identifiant
  valids[inputLogin.attr('id')] = false;
  valids[inputPassword.attr('id')] = false;

  // Par défaut le bouton est inactif
  inputButtonConnect.attr('disabled', true);

  // On réagit à chaque changement de l'un des champs
  $('.form-control').keyup(() => {
    // La propriété disabled permet de définir si le champ est actif ou non
    // Il prend comme valeur un boolean, on délegue le travail à une fonction
    inputButtonConnect.attr('disabled', !isAllValid());
  });
});
