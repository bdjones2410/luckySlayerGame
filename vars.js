var fist = new Weapon({name:"fist", damage:1, pic:"images/fist.png"});
var playerName = "Brandon";

 // prompt("What is your name adventurer?");

var player = new Player({name: playerName});

var log = "";


//  var newText = function($el, log){
//   $el.html(log);
// }

var gambleCost = 15;

var pokeyStick = 1;
var coolKnife = 1;
var magicSword = 1;
var legendarySword = 1;
var fist = new Weapon({name:"fist", damage:1, pic:"images/fist.png"});


function Player(option) {
    option = option || {};
    this.name = option.name || "No One";
    this.health = 100;
    this.level = 1;
    this.experience = 0;
    this.expNeeded = 100;
    this.gold = 0;
    this.gamble = function() {
        if (this.gold >= gambleCost) {
            this.gold = this.gold - gambleCost;
            var roll = Math.floor(Math.random() * 100);

            if (roll >= 85 && roll < 97) {
                if (magicSword != 1) {
                    magicSword.damage += 10;
                    if (magicSword.damage > this.weapon.damage) {
                        log = "Woo! your " + magicSword.name +
                            " has gained more power! and is currently stronger than your " +
                            this.weapon.name + " so you equip it! ";

                            this.equip(magicSword);
                    } else {
                        log =
                            "you're very nearly pretty lucky!  your " +
                            magicSword.name +
                            " gains a bit more power!";

                    }
                } else {
                  magicSword = new Weapon({
                     name: "almost Legendary Sword",
                     damage: 30,
                     pic: "images/magicsword.png",
                  });

                    weaponArr.push(magicSword);
                    if (this.weapon.damage >= magicSword.damage) {
                        log = "You got an " + magicSword.name +
                            " but your current weapon does more damage!  so an " +
                            magicSword.name +
                            " is put in your storage.";

                    } else {
                        log = "Almost SUPER lucky, you got an " +
                            magicSword.name +
                            " which does more damage! so you equip it";


                        this.equip(magicSword);
                    }
                }
            } else if (roll >= 97) {
                if (legendarySword != 1) {
                    legendarySword.damage *= 2;
                    legendarySword.name = "SUPER legendary Sword";
                    log = "UBER LUCKY!!! your " + legendarySword.name +
                        " gains even more power!";

                } else {
                  legendarySword = new Weapon({
                     name: "Legendary Sword",
                     damage: 100,
                     pic: "images/GiantGlowingSword.png",
                  });
                    this.equip(legendarySword);
                    weaponArr.push(legendarySword);
                    log = "Super Lucky!  YOU GOT " +
                        legendarySword.name +
                        " if you continue to gamble, maybe you can even turn it into a SUPER legendary?";

                }
            } else if (roll > 65 && roll < 85) {
                if (coolKnife != 1) {
                    log = "you already have a " + coolKnife.name +
                        " so this didn't pay off... ";

                } else {
                  coolKnife = new Weapon({
                     name: "nifty Knife",
                     damage: 15,
                     pic: "images/knife.png",
                  });
                    weaponArr.push(coolKnife);
                    if (this.weapon.damage >= coolKnife.damage) {
                        log="You got a " + coolKnife.name +
                            " but your current weapon does more damage!  so a " +
                            coolKnife.name +
                            " is put in your storage.";


                    } else {
                        this.equip(coolKnife);
                        log="that is a pretty " + coolKnife.name +
                            " and does more damage, let's equip it!";

                    }
                }
            } else if (roll > 30 && roll < 66) {
                if (pokeyStick != 1) {
                    log="How many " + pokeyStick.name +
                        "'s does one person need? Threw it out";

                } else {
                  pokeyStick = new Weapon({
                     name: "Poking Stick",
                     damage: 5,
                     pic: "images/bigstick.png",
                  });
                    weaponArr.push(pokeyStick);
                    if (this.weapon.damage >= pokeyStick) {
                        log = "You may have found a new " +
                            pokeyStick.name +
                            " but your current weapon is better, so it goes in storage!";

                    } else {
                        this.equip(pokeyStick);
                        log = "You find a nice " + pokeyStick.name +
                            " which is better than your fists! so let's use it!";

                    }
                }
            } else {
                log =
                    "your gamble doesn't pay off! no new shinies for you";

            }

        } else {
            log = "not enough gold to gamble! slay more and return!";

        }
          game.weaponLoad($('#weaponList'), weaponArr, 'weaponSlot');
          game.newText($('.contentText'), log);
    };
    this.weapon = fist;
    this.equip = function(weapon) {
        this.weapon = weapon;
    };
    this.bonusAtk = 2;
    this.damageDealt = this.weapon.damage + this.bonusAtk;
    this.onLvl = function() {
        if (this.experience > this.expNeeded) {
            this.level = this.level + 1;
            this.experience = this.experience - this.expNeeded;
            this.expNeeded = this.expNeeded * 2;
            this.bonusAtk = this.bonusAtk * 2;
            this.health = 100 * this.level;
            if (this.experience > this.expNeeded) {
                this.onLvl();
            }
        }
    };
    this.attack = function(enemy) {

        var playerHit = Math.floor(Math.random() * 100);
        var enemyHit = Math.floor(Math.random() * 10);

        if (playerHit > 20 && playerHit < 95) {
            enemy.health = enemy.health - (this.weapon.damage + this.bonusAtk);
            if (enemy.health > 0) {
                if (enemyHit > 2) {
                    this.health = this.health - enemy.attack;
                    if (this.health > 0) {
                        log= "You exchange blows with the " +
                            enemy.name +
                            " and both return alive!  Your health: " +
                            this
                            .health + ", " + enemy.name +
                            " Health: " +
                            enemy.health;

                    } else {
                        log = "You took some flesh from the " +
                            enemy.name +
                            ", but he took your life! Game Over";
                            $('.topRight').html("<h1>Game Over</h1>");

                    }
                } else {
                    log = "You strike the " + enemy.name +
                        "! and manage to dodge his counter attack taking no damage! Your health: " +
                        this.health + ", " + enemy.name +
                        " Health: " +
                        enemy.health;

                }
            } else {
                this.experience = this.experience + enemy.expWorth;
                this.gold = this.gold + enemy.goldWorth;
                if (this.experience > this.expNeeded) {
                    this.onLvl();
                    log =  "You have destroyed the enemy and in a burst of light you feel stronger!  you are now level: " +
                        this.level + " health: " + this.health +
                        " experience left to next level: " + (this.expNeeded -
                            this.experience) + " Gold earned: " +
                        enemy.goldWorth;

                    game.loadNewen();

                    log =
                        "But a new enemy has appearedy! you now are fighting a " +
                        curEnemy.name;

                } else {
                    log = "You have destroyed the " + enemy.name +
                        "! congrats! your remaining health is: " +
                        this.health + " Gold earned: " + enemy.goldWorth;

                    game.loadNewen();
                    log =
                        "But a new enemy has appearedy! you now are fighting a " +
                        curEnemy.name;

                }
            }

        } else if (playerHit > 95) {
            enemy.health = enemy.health - ((this.weapon.damage + this.bonusAttack) *
                2);

            if (enemy.health > 0) {
                if (enemyHit > 2) {
                    this.health = this.health - enemy.attack;
                    if (this.health > 0) {
                        log ="You exchange blows with the " +
                            enemy.name +
                            " and deal critical damage! both of you return alive!  Your health: " +
                            this.health + ", " + enemy.name +
                            " Health: " +
                            enemy.health;

                    } else {
                        log = "You took some flesh from the " +
                            enemy
                            .name +
                            ", but he took your life! Game Over";
                            $('.topRight').html("<h1>Game Over</h1>");

                    }
                } else {
                    log = "You strike the " + enemy.name +
                        "! dealing critical damage and manage to dodge his counter attack taking no damage! Your health: " +
                        this.health + ", " + enemy.name +
                        " Health: " +
                        enemy.health;

                }
            } else {
                this.experience = this.experience + enemy.expWorth;
                this.gold = this.gold + enemy.goldWorth;
                if (this.experience >= this.expNeeded) {
                    this.onLvl();
                    log =
                        "You have destroyed the enemy and in a burst of light you feel stronger!  you are now level: " +
                        this.level + " health: " + this.health +
                        " experience left to next level: " + (this.expNeeded -
                            this.experience) + " Gold earned: " +
                        enemy.goldWorth;

                } else {
                    log = "You have destroyed the " + enemy.name +
                        "! and gained: " + enemy.expWorth +
                        " experience points! congrats! your remaining health is: " +
                        this.health + " Gold earned: " + enemy.goldWorth
                    ;

                    game.loadNewen();
                    console.log(
                        "But a new enemy has appearedy! you now are fighting a " +
                        curEnemy.name);
                }
            }
        } else {
            if (enemyHit > 2) {
                this.health = this.health - enemy.attack;
                if (this.health > 0) {
                    log = "You miss your strike! and the Enemy " +
                        enemy.name +
                        " strikes you for " + enemy.attack +
                        " damage!  your remaining health: " + this.health
                    ;


                } else {
                    log = "You gave it all, but not enough. The " +
                        enemy
                        .name +
                        " gets by unharmed in your assault, but leaves behind your corpse.  Game Over"
                    ;
                    $('.topRight').html("<h1>Game Over</h1>");

                }
            } else {
                log =
                    "You both stare menacingly at eachother, but your barks are worse than your bite!  you both miss your assaults"
                ;

            }
        }
        game.loadTemplate($('.bottomLeft'), player, 'playerProfile');
        game.loadTemplate($('.enemyWindow'), curEnemy, 'enemyDisplay');
        game.newText($('.contentText'), log);

    };
}


function Enemy(option) {
    option = option || {};
    this.name = option.name;
    this.health = option.health;
    this.attack = option.attack;
    this.expWorth = option.expWorth;
    this.goldWorth = option.goldWorth;
    this.pic = option.pic;
}

function Weapon(option) {
  option = option || {};
    this.name = option.name;
    this.damage = option.damage;
    this.pic = option.pic;
}



var jim = new Player({
    name: "jim"
});
var dragon = new Enemy("Smaug", 40, 10, 20);



var curEnemy = '';

//field monsters//
var bug = new Enemy({
    name: "Bug",
    health: 50,
    attack: 10,
    expWorth: 20,
    goldWorth: 5,
    pic: "images/evilbug-vi.gif",
});
var bat = new Enemy({
    name: "Bat",
    health: 50,
    attack: 10,
    expWorth: 20,
    goldWorth: 5,
    pic: "images/evilbat.gif",
});
var snake = new Enemy({
    name: "Snake",
    health: 50,
    attack: 10,
    expWorth: 20,
    goldWorth: 5,
    pic: "images/snake.gif",
});
var critter = new Enemy({
    name: "Critter",
    health: 50,
    attack: 10,
    expWorth: 20,
    goldWorth: 5,
    pic: "images/critter.gif",
});


//forest monsters//

var sprite = new Enemy({
    name: "Sprite",
    health: 50,
    attack: 50,
    expWorth: 30,
    goldWorth: 10,
    pic: "images/sprite.gif",
});
var darkWolf = new Enemy({
    name: "Dark Wolf",
    health: 50,
    attack: 50,
    expWorth: 30,
    goldWorth: 10,
    pic: "images/darkWolf.png",
});
var goblin = new Enemy({
    name: "Goblin",
    health: 50,
    attack: 50,
    expWorth: 30,
    goldWorth: 10,
    pic: "images/goblin.png",
});
var satire = new Enemy({
    name: "Satire",
    health: 50,
    attack: 50,
    expWorth: 30,
    goldWorth: 10,
    pic: "images/satire.jpg",
});

//mountain monsters//
var ogre = new Enemy({
    name: "Ogre",
    health: 500,
    attack: 150,
    expWorth: 200,
    goldWorth: 20,
    pic: "images/ogre.gif",
});
var minotaur = new Enemy({
    name: "Minotaur",
    health: 500,
    attack: 150,
    expWorth: 200,
    goldWorth: 20,
    pic: "images/minotaur.gif",
});
var troll = new Enemy({
    name: "Troll",
    health: 500,
    attack: 150,
    expWorth: 200,
    goldWorth: 20,
    pic: "images/troll.gif",
});
var harpy = new Enemy({
    name: "Harpy",
    health: 500,
    attack: 150,
    expWorth: 200,
    goldWorth: 20,
    pic: "images/Harpy.gif",
});

//rares//
var totoro = new Enemy({
    name: "Totoro",
    health:1,
    attack:0,
    expWorth:0,
    goldWorth: 500,
    pic:"images/totoro.gif",
});
var fairyorb = new Enemy({
    name: "fairy",
    health: 5,
    attck: 1,
    expWorth: 500,
    goldWorth: 100,
    pic: "images/fairyorb.png",
});
var phoenix = new Enemy({
    name: "Phoenix",
    health: 100,
    attck: 50,
    expWorth: 800,
    goldWorth: 200,
    pic: "images/phoenix.gif",
});
//bosses//
var dragon = new Enemy({
    name: "Destroyer of Worlds",
    health: 9001,
    attack: 500,
    expWorth: 5000,
    goldWorth: 1000,
    pic: "images/deathwing.gif",
});

var fieldArr = [
    bug, bat, snake, critter
];

var forestArr = [
    sprite, darkWolf, goblin, satire
];
var mountainArr = [
    ogre, minotaur, troll, harpy
];
var raresArr = [
    fairyorb, phoenix,
];
var bossArr = [
    dragon,
];


var curEnemy = '';
var zone = fieldArr;
var bossRage = 0;

function newEnemy(zone) {
    var rareChance = Math.floor(Math.random() * 100);
    if (rareChance > 85 && rareChance < 95) {
        var rareEn = Math.floor(Math.random() * raresArr.length);
        curEnemy = raresArr[rareEn];
        console.log("lucky day! rare monster has shown up! " + curEnemy.name);
    } else if (rareChance > 95) {
        bossRage++;
        if (bossRage > 3) {
            bossRage = 0;
            curEnemy = bossArr[0];
            console.log("The " + curEnemy.name +
                " has had enough taunting!  He has come to Destroy!");
        } else {
            console.log("You can hear a roar off in the distance, the " +
                bossArr[0].name +
                " has noticed you and is getting agitated by your actions, be careful, who knows how long before he has enough and attacks!"
            );
            newEnemy(zone);
        }
    } else {
        var idx = Math.floor(Math.random() * zone.length);
        curEnemy = zone[idx];
    }
    // game.loadTemplate($('.enemyWindow'), curEnemy, 'enemyDisplay');
}

newEnemy(zone);

// v--- Where I put the made weapons into an array.

var weaponArr = [fist];
