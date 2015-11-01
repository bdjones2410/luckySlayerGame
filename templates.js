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

    consoleText: [
      '<span class="contentText">',
      'You have destroyed the enemy and in a burst of light you feel stronger!  you are now level: ',
      '<%= level %> health:  <%= health %>',
      ' experience left to next level: <%= expNeeded %>',
      '</span>',
    ].join(""),

};
