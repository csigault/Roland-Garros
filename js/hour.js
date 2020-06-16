/* Projet Partie 3 - 17/01/20 */
/*console.log('ok');*/



    /* Exo 2 Horloge */

      
            var _i=true;
            setInterval(function(){
                var currentTime = new Date();
                var h = currentTime.getHours();
                var m = currentTime.getMinutes();
                var s = currentTime.getSeconds()
                var suffix = " ";
                if(h >= 12){suffix = " ";h = h - 12;}
                if(h == 0){h = 12;}
                if(h < 10){h = "0" + h ;}
                if(m < 10){m = "0" + m ;}
                document.getElementById('idd').innerHTML=h+':'+m+':'+s+' '+suffix;
                },1000);
         


