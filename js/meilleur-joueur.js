function showResults(result) {
  const container = $('#container-content');
  const view = `
<h3>${result.firstname} ${result.lastname.toUpperCase()}</h3>

<ul class="list-group">
  <li class="list-group-item"><span class='info-name'>Taille</span> : ${result.sizeInCm}cm</li>
  <li class="list-group-item"><span class='info-name'>Nationalité</span> : ${result.nationality}</li>
  <li class="list-group-item"><span class='info-name'>Age</span> : ${result.age}</li>
  <li class="list-group-item"><span class='info-name'>Poids</span> : ${result.weightInKg}kg</li>
  <li class="list-group-item"><span class='info-name'>Nombre de tournois gagné</span> : ${result.wonTournaments}</li>
</ul>
    `;

  container.html(view);
  container.show();
}

$(() => {
  $divLoading = $('#loading');
  $buttonRequest = $('#button-request');

  $divLoading.hide();

  // Si click pour envoyer la requête, on désactive le bouton et on affiche le loading !
  $buttonRequest.click(() => {
    $buttonRequest.attr('disabled', true);
    $divLoading.show();
    $('#container-content').hide();

    $.get('https://serveur-demo.macademia.fr/cursus/bestPlayer', (data) => {
      const result = data.res; // Contient la donnée renvoyée sous forme d'un objet

      $buttonRequest.attr('disabled', false);
      $divLoading.hide();
      showResults(result);
    });
  });
});
