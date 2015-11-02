$(document).ready(function() {
    game.init();
});


var game = {
  init: function() {
      game.styling();
      game.events();
  },

  styling: function(){
    game.loadTemplate($('.bottomLeft'), player, 'playerProfile');
    game.weaponLoad($('#weaponList'), weaponArr, 'weaponSlot');
    game.loadTemplate($('.bottomRight'), player, 'consoleText');
    game.loadTemplate($('.enemyWindow'), curEnemy, 'enemyDisplay');
    //^-----------TRYING TO LOAD FULL TEMPLATE FROM weaponArr

  },


  events: function() {
      $('.navBut').on('click','.btn', function(event){
        event.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var curse = $(this).attr('rel');
        if(curse != "camp"){
          $('.campRight').addClass('nothere');
          $('#upperRight').removeClass('nothere');
          if(curse === "fieldArr"){
            zone = fieldArr;
            $('.topRight').css('background-image','url(images/mtn.jpg)');
          }
          else if(curse ==="mountainArr"){
            zone = mountainArr;
            $('.topRight').css('background-image','url(images/mountains.jpg)');
          }
          else if(curse ==="forestArr"){
            zone = forestArr;
            $('.topRight').css('background-image','url(images/forest.jpg)');
          };
          }
          else {
            player.health = 100*player.level;
            $('#upperRight').addClass('nothere');
            $('.campRight').removeClass('nothere');
            $('.topRight').css('background-image','url(images/camp.png-original)');
            game.loadTemplate($('.bottomLeft'), player, 'playerProfile');
          }

        });

        $('.interactButs').on('click','.btn',function(event){
          event.preventDefault();
          if($(this).attr('rel') === "attack"){
          player.attack(curEnemy);
        }
        else if ($(this).attr('rel') === "run"){
          game.loadNewen();
        }
      });

        $('.gamblers').on('click','.btn', function(event){
          event.preventDefault();
          player.gamble();
        });

        $('#weaponList').on('click','a', function(event){
          event.preventDefault();
          var weaponequip = $(this).parent('li').attr('rel');
          switch (weaponequip) {
            case 'fist': player.equip(fist);
              break;
            case 'almost Legendary Sword': player.equip(magicSword);
              break;
            case 'Legendary Sword': player.equip(legendarySword);
              break;
            case 'SUPER legendary Sword': player.equip(legendarySword);
              break;
            case 'nifty Knife': player.equip(coolKnife);
              break;
            case 'Poking Stick': player.equip(pokeyStick);
              break;
            default:

          }
          game.loadTemplate($('.bottomLeft'), player, 'playerProfile');

        });

      },





  getTemplate: function(tmpl){
    return _.template(templates[tmpl]);
  },

  loadTemplate: function($el, data, tmpl) {
    var gameHtml = "";
    var template = game.getTemplate(tmpl);
    gameHtml += template(data);
    $el.html(gameHtml);
  },

  weaponLoad: function($el, data, tmpl){
    var gameHtml = "";
    var template = game.getTemplate(tmpl);
    _.each(data, function(curEl){
      gameHtml += template(curEl);
    })
    $el.html(gameHtml);
  },

  newText: function($el, log){
    $el.html(log);
  },

  loadNewen: function(){
      newEnemy(zone);
      game.loadTemplate($('.enemyWindow'), curEnemy, 'enemyDisplay');
},
};
