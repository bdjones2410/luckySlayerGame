var templates ={
    playerProfile:[
      '<div class="col-md-6 stats">Name:</div>',
      '<div class="col-md-6 stats"><%= name %></div>',
      '<div class="col-md-6 stats">Health:</div>',
      '<div class="col-md-6 stats"><%= health %></div>',
      '<div class="col-md-6 stats">Level:</div>',
      '<div class="col-md-6 stats"><%= level %></div>',
      '<div class="col-md-6 stats">Damage:</div>',
      '<div class="col-md-6 stats"><%= damageDealt %></div>',
      '<div class="col-md-6 stats">Gold:</div>',
      '<div class="col-md-6 stats"><%= gold %></div>',
      '<div class="col-md-6 stats">Experience:</div>',
      '<div class="col-md-6 stats"><%= experience %> / <%= expNeeded %></div>',
    ].join(""),

    weaponSlot:[
      '<li class="weapon border" rel="<%=name%>">',
      '<a href="#" class="eachWep">',
      '<img src=" <%= pic %> " class= "center-block img-responsive" alt="">',
      '</a>',
      '</li>',
    ].join(""),

    consoleText: [
      '<span class="contentText">',
      'Welcome to Camp, rest your wounds and gamble for a chance at stronger weaponry for battle!',
      '</span>',
    ].join(""),

    enemyDisplay: [
      '<div class="col-md-4 enemySats center-block">',
      '<div class="col-md-6 enstats">Health:</div>',
      '<div class="col-md-6 enstats"><%=health%></div>',
      '<div class="col-md-6 enstats">Attack:</div>',
      '<div class="col-md-6 enstats"><%=attack%></div>',
      '</div>',
      '<div class="col-md-8 enemyPic">',
      '<img src="<%=pic%>" class= "center-block img-responsive" alt="">',
      '</div>',
      '<div class="col-md-8 enNameBox">',
      '<h4><span class="enName"><%=name%></span></h4>',
      '</div>',
    ].join(""),

};
