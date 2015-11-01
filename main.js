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
    //^-----------TRYING TO LOAD FULL TEMPLATE FROM weaponArr

  },


  events: function() {




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
    $el.append(gameHtml);
  },






};
