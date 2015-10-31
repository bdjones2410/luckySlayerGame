var templates ={
    playerProfile:[
      '<div class="col-md-6 stats">Name:</div>',
      '<div class="col-md-6 stats"><%= name %></div>',
      '<div class="col-md-6 stats">Health:</div>',
      '<div class="col-md-6 stats"><%= health %></div>',
      '<div class="col-md-6 stats">Damage:</div>',
      '<div class="col-md-6 stats"><%= damageDealt %></div>',
      '<div class="col-md-6 stats">Gold:</div>',
      '<div class="col-md-6 stats"><%= gold %></div>',
      '<div class="col-md-6 stats">Experience:</div>',
      '<div class="col-md-6 stats"><%= experience %> / <%= expNeeded %></div>',
    ].join(""),

    weaponSlot:[
      '<a href="#" class="eachWep">',
      '<li class="weapon border">',
      '<img src=" <%= pic %> " class= "center-block img-responsive" alt="">',
      '</li>',
      '</a>',
    ].join(""),
 // ^------------------ TEMPLATE FOR EACH ITEM.

};
