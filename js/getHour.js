console.log('ok-HeureRG');
function getHour() {
  // On appelle en AJAX le serveur pour récupérer l'heure
  $.get('https://serveur-demo.macademia.fr/cursus/getHour', function(data, status, detailStatus) {
    // data contient la réponse
    // status contient l'état (success ou autre)
    // detailStatus permet de récupérer l'état de retour en détail
    var date = new Date(data.res);
    var dateDisplay = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();

    $('#display-hour').html('<b>' + dateDisplay + '</b>');
  });
}

// Attendre le chargement de la page avant d'enclencher le script
$(function() {
    setInterval(getHour, 1000);
})