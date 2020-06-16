let idInterval = null; // Contiendra l'identifiant de l'interval à démarrer

function getHour() {
  const time = new Date();
  $('#display-hour').html(`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`);
}

function run() {
  getHour(); // On le lance une fois au départ pour éviter d'avoir l'affichage vide pendant 1s
  idInterval = setInterval(getHour, 1000);
}

function stop() {
  clearInterval(idInterval);
}

$(() => {
  const $buttonStart = $('#button-start');
  const $buttonStop = $('#button-stop');

  $buttonStart.hide();
  run();

  $buttonStart.click(() => {
    run();
    $buttonStart.hide();
    $buttonStop.show();
  });

  $buttonStop.click(() => {
    stop();
    $buttonStop.hide();
    $buttonStart.show();
  });
});
