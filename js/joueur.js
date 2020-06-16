console.log('ok-JOueur');

function joueur() {
  // On appelle en AJAX le serveur pour récupérer l'heure
  $.get('https://serveur-demo.macademia.fr/cursus/bestPlayer', function(data) {
  
   
   var firstname = (data.res.firstname);
   var lastname = (data.res.lastname);
   var size = (data.res.sizeInCm);
   var wontournaments = (data.res.wonTournaments);
   var nationality = (data.res.nationality);
   var age = (data.res.age);
   var hand = (data.res.hand);

   $('#firstnamejoueur').html('Prénom : ' + (firstname));
   $('#namejoueur').html('Nom : ' + (lastname));
   $('#sizejoueur').html('Taille du joueur : ' + (size) + 'cm');
   $('#wontournaments').html('Nombre de tournois gagnés : ' + (wontournaments));
   $('#nationality').html('Nationalité : ' + (nationality));
   $('#age').html('Age du joueur : ' + (age) + ' ans');
   
  });
}

