"use strict";
/**************************************variables globals**********************/

var chevalier = {
  sante : 100,
  lance : 35,
  sword : 50,
  hache : 10,
  vitesse : function speedChevalier() {
    var speed = Math.floor(Math.random() * Math.floor(3));
    return speed;
  }

}

var dragon = {
  sante : 150,
  griffe : 25,
  queue : 10,
  flamme : 55,
  vitesse : function speedDragon() {
    var speed = Math.floor(Math.random() * Math.floor(3));
    return speed;
  }

}



do{
      if(dragon.vitesse() > chevalier.vitesse()){

        $('.box5').css('background-color', 'red');
        var attack;

        window.setTimeout(attack = Math.floor(Math.random() * Math.floor(3)), 50000);

        switch (attack) {
          case 0:
            var degats = dragon.griffe;
            break;

          case 1:
            var degats = dragon.queue;
            break;

          case 2:
            var degats = dragon.flamme;
            break;
        }

        chevalier.sante = chevalier.sante - degats;

        $('#box4').animate({
          width: chevalier.sante +'px'
        });

        if(chevalier.sante > 0){
          document.write('Point de vie du chevalier ' + chevalier.sante + '<br>');

        }else{

          document.write('le chevalier est mort !');
          break;
        }

        $('.box6').css("background-color", 'white');


      }else if(dragon.vitesse() < chevalier.vitesse()){

console.log(attacks);

        var attacks = prompt('Choisissez votre arme : Hache = 0, Lance = 1, Sword = 2');

        switch (attacks) {
          case '0':
            var degats = chevalier.hache;
            break;

          case '1':
            var degats = chevalier.lance;
            break;

          case '2':
            var degats = chevalier.sword;
            break;

        }

        dragon.sante = dragon.sante - degats;

        $('#box2').animate({
          width: dragon.sante +'px'
        });

      if(dragon.sante > 0){
        document.write('Point de vie du dragon ' + dragon.sante + ' <br>');

      }else{

        document.write('le dragon est mort !');
        break;
      }
      $('.box6').css('background-color', 'white');

    }

    }while( dragon.sante > 0 || chevalier.sante > 0);
