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
        var curse = $(this).attr('rel');
        if(curse != "camp"){
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
            $('.topRight').css('background-image','url(images/camp.png-original)');
            game.loadTemplate($('.bottomLeft'), player, 'playerProfile');
          }

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
      newEnemy(zone)
      game.loadTemplate($('.enemyWindow'), curEnemy, 'enemyDisplay');
},
};
