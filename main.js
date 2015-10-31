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
    game.loadWeapon($('#weaponList'), weaponArr, 'weaponSlot');

    //^-----------TRYING TO LOAD FULL TEMPLATE FROM weaponArr


  },


  events: function() {




  },

  getTemplate: function(tmpl){
    return _.template(templates[tmpl]);
  },

  loadTemplate: function($el, data, tmpl) {
    var template = game.getTemplate(tmpl);
    var gameHtml = template(data);
    $el.append(gameHtml);
  },

  loadProfile: function(sect, arr, tmpl) {
    _.each(arr, function(curEl, idx, arri) {
      game.loadTemplate($sect, curel, tmpl)
    });
  },

  weaponLoad: function($el, data, tmpl){
    var template= game.getTemplate(tmpl);
    var gameHtml = template(data);
    $el.append(gameHtml);
  },

  loadWeapon: function($sect, arr, tmpl){
    _.each(arr, function(curEl){
      _.each(curEl, function(curIt, idx, arri){
        game.loadTemplate($sect, curIt, tmpl)
      });
    });
  },




};
