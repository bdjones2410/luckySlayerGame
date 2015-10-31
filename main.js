var Jim = new Player({
    name: "jim"
});

var weaponArr = [];

var gambleCost = 15;

var pokeyStick = 1;
var coolKnife = 1;
var magicSword = 1;
var legendarySword = 1;




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
                        console.log("Woo! your " + magicSword.name +
                            " has gained more power! and is currently stronger than your " +
                            this.weapon.name + " so you equip it! "
                        );
                        this.equip(magicSword);
                    } else {
                        console.log(
                            "you're very nearly pretty lucky!  your " +
                            magicSword.name +
                            " gains a bit more power!");
                    }
                } else {
                    magicSword = new Weapon({
                        name: "almost Legendary Sword",
                        damage: 30
                    });
                    weaponArr.push(magicSword);
                    if (this.weapon.damage >= magicSword.damage) {
                        console.log("You got an " + magicSword.name +
                            " but your current weapon does more damage!  so an " +
                            magicSword.name +
                            " is put in your storage.");
                    } else {
                        console.log("Almost SUPER lucky, you got an " +
                            magicSword.name +
                            " which does more damage! so you equip it"
                        );
                        this.equip(magicSword);
                    }
                }
            } else if (roll >= 97) {
                if (legendarySword != 1) {
                    legendarySword.damage *= 2;
                    legendarySword.name = "SUPER legendary Sword";
                    console.log("UBER LUCKY!!! your " + legendarySword.name +
                        " gains even more power!");
                } else {
                    legendarySword = new Weapon({
                        name: "Legendary Sword",
                        damage: 100
                    });
                    this.equip(legendarySword);
                    weaponArr.push(legendarySword);
                    console.log("Super Lucky!  YOU GOT " +
                        legendarySword.name +
                        " if you continue to gamble, maybe you can even turn it into a SUPER legendary?"
                    );
                }
            } else if (roll > 65 && roll < 85) {
                if (coolKnife != 1) {
                    console.log("you already have a " + coolKnife.name +
                        " so this didn't pay off... ");
                } else {
                    coolKnife = new Weapon({
                        name: "nifty Knife",
                        damage: 15
                    });
                    weaponArr.push(coolKnife);
                    if (this.weapon.damage >= coolKnife.damage) {
                        console.log("You got a " + coolKnife.name +
                            " but your current weapon does more damage!  so a " +
                            coolKnife.name +
                            " is put in your storage.");

                    } else {
                        this.equip(coolKnife);
                        console.log("that is a pretty " + coolKnife.name +
                            " and does more damage, let's equip it!"
                        );
                    }
                }
            } else if (roll > 30 && roll < 66) {
                if (pokeyStick != 1) {
                    console.log("How many " + pokeyStick.name +
                        "'s does one person need? Threw it out");
                } else {
                    pokeyStick = new Weapon({
                        name: "Poking Stick",
                        damage: 5
                    });
                    weaponArr.push(pokeyStick);
                    if (this.weapon.damage >= pokeyStick) {
                        console.log("You may have found a new " +
                            pokeyStick.name +
                            " but your current weapon is better, so it goes in storage!"
                        );
                    } else {
                        this.equip(pokeyStick);
                        console.log("You find a nice " + pokeyStick.name +
                            " which is better than your fists! so let's use it!"
                        );
                    }
                }
            } else {
                console.log(
                    "your gamble doesn't pay off! no new shinies for you"
                );
            }

        } else {
            console.log(
                "not enough gold to gamble! slay more and return!");
        }

    };
    this.weapon = new Weapon({
        name: "fist",
        damage: 1
    });
    this.equip = function(weapon) {
        this.weapon = weapon;
    };
    this.bonusAtk = 2;
    this.damagedealt = function() {
        return this.weapon.damage + this.bonusAtk;
    };
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
        console.log("you are fighting " + enemy.name + "!");
        var playerHit = Math.floor(Math.random() * 100);
        var enemyHit = Math.floor(Math.random() * 10);

        if (playerHit > 20 && playerHit < 95) {
            enemy.health = enemy.health - (this.weapon.damage + this.bonusAtk);
            if (enemy.health > 0) {
                if (enemyHit > 2) {
                    this.health = this.health - enemy.attack;
                    if (this.health > 0) {
                        console.log("You exchange blows with the " +
                            enemy.name +
                            " and both return alive!  Your health: " +
                            this
                            .health + ", " + enemy.name +
                            " Health: " +
                            enemy.health);
                    } else {
                        console.log("You took some flesh from the " +
                            enemy.name +
                            ", but he took your life! Game Over");
                    }
                } else {
                    console.log("You strike the " + enemy.name +
                        "! and manage to dodge his counter attack taking no damage! Your health: " +
                        this.health + ", " + enemy.name +
                        " Health: " +
                        enemy.health);
                }
            } else {
                this.experience = this.experience + enemy.expWorth;
                this.gold = this.gold + enemy.goldWorth;
                if (this.experience > this.expNeeded) {
                    this.onLvl();
                    console.log(
                        "You have destroyed the enemy and in a burst of light you feel stronger!  you are now level: " +
                        this.level + " health: " + this.health +
                        " experience left to next level: " + (this.expNeeded -
                            this.experience) + " Gold earned: " +
                        enemy.goldWorth);
                    newEnemy(zone);
                    console.log(
                        "But a new enemy has appearedy! you now are fighting a " +
                        curEnemy.name);
                } else {
                    console.log("You have destroyed the " + enemy.name +
                        "! congrats! your remaining health is: " +
                        this.health + " Gold earned: " + enemy.goldWorth
                    );
                    newEnemy(zone);
                    console.log(
                        "But a new enemy has appearedy! you now are fighting a " +
                        curEnemy.name);
                }
            }

        } else if (playerHit > 95) {
            enemy.health = enemy.health - ((this.weapon.damage + this.bonusAttack) *
                2);

            if (enemy.health > 0) {
                if (enemyHit > 2) {
                    this.health = this.health - enemy.attack;
                    if (this.health > 0) {
                        console.log("You exchange blows with the " +
                            enemy.name +
                            " and deal critical damage! both of you return alive!  Your health: " +
                            this.health + ", " + enemy.name +
                            " Health: " +
                            enemy.health);
                    } else {
                        console.log("You took some flesh from the " +
                            enemy
                            .name +
                            ", but he took your life! Game Over");
                    }
                } else {
                    console.log("You strike the " + enemy.name +
                        "! dealing critical damage and manage to dodge his counter attack taking no damage! Your health: " +
                        this.health + ", " + enemy.name +
                        " Health: " +
                        enemy.health);
                }
            } else {
                this.experience = this.experience + enemy.expWorth;
                this.gold = this.gold + enemy.goldWorth;
                if (this.experience >= this.expNeeded) {
                    this.onLvl();
                    console.log(
                        "You have destroyed the enemy and in a burst of light you feel stronger!  you are now level: " +
                        this.level + " health: " + this.health +
                        " experience left to next level: " + (this.expNeeded -
                            this.experience) + " Gold earned: " +
                        enemy.goldWorth);
                } else {
                    console.log("You have destroyed the " + enemy.name +
                        "! and gained: " + enemy.expWorth +
                        " experience points! congrats! your remaining health is: " +
                        this.health + " Gold earned: " + enemy.goldWorth
                    );
                    newEnemy(zone);
                    console.log(
                        "But a new enemy has appearedy! you now are fighting a " +
                        curEnemy.name);
                }
            }
        } else {
            if (enemyHit > 2) {
                this.health = this.health - enemy.attack;
                if (this.health > 0) {
                    console.log("You miss your strike! and the Enemy " +
                        enemy.name +
                        " strikes you for " + enemy.attack +
                        " damage!  your remaining health: " + this.health
                    );

                } else {
                    console.log("You gave it all, but not enough. The " +
                        enemy
                        .name +
                        " gets by unharmed in your assault, but leaves behind your corpse.  Game Over"
                    );
                }
            } else {
                console.log(
                    "You both stare menacingly at eachother, but your barks are worse than your bite!  you both miss your assaults"
                );
            }
        }
    };
}


function Enemy(option) {
    option = option || {};
    this.name = option.name;
    this.health = option.health;
    this.attack = option.attack;
    this.expWorth = option.expWorth;
    this.goldWorth = option.goldWorth;
}

function Weapon(option) {
    this.name = option.name || "fist";
    this.damage = option.damage;
}


var fist = new Weapon("Fist", 1);
var jim = new Player({
    name: "jim"
});
var dragon = new Enemy("Smaug", 40, 10, 20);

function Weapon(option) {
    this.name = option.name;
    this.damage = option.damage;

}

var curEnemy = '';

//field monsters//
var bug = new Enemy({
    name: "Bug",
    health: 50,
    attack: 10,
    expWorth: 20,
    goldWorth: 5
});
var bat = new Enemy({
    name: "Bat",
    health: 50,
    attack: 10,
    expWorth: 20,
    goldWorth: 5
});
var snake = new Enemy({
    name: "Snake",
    health: 50,
    attack: 10,
    expWorth: 20,
    goldWorth: 5
});
var critter = new Enemy({
    name: "Critter",
    health: 50,
    attack: 10,
    expWorth: 20,
    goldWorth: 5
});


//forest monsters//

var sprite = new Enemy({
    name: "Sprite",
    health: 50,
    attack: 50,
    expWorth: 30,
    goldWorth: 10
});
var darkWolf = new Enemy({
    name: "Dark Wolf",
    health: 50,
    attack: 50,
    expWorth: 30,
    goldWorth: 10
});
var goblin = new Enemy({
    name: "Goblin",
    health: 50,
    attack: 50,
    expWorth: 30,
    goldWorth: 10
});
var satire = new Enemy({
    name: "Satire",
    health: 50,
    attack: 50,
    expWorth: 30,
    goldWorth: 10
});

//mountain monsters//
var ogre = new Enemy({
    name: "Ogre",
    health: 500,
    attack: 150,
    expWorth: 200,
    goldWorth: 20
});
var minotaur = new Enemy({
    name: "Minotaur",
    health: 500,
    attack: 150,
    expWorth: 200,
    goldWorth: 20
});
var troll = new Enemy({
    name: "Troll",
    health: 500,
    attack: 150,
    expWorth: 200,
    goldWorth: 20
});
var harpy = new Enemy({
    name: "Harpy",
    health: 500,
    attack: 150,
    expWorth: 200,
    goldWorth: 20
});

//rares//
var fairyorb = new Enemy({
    name: "fairy orb",
    health: 5,
    attck: 1,
    expWorth: 500,
    goldWorth: 100
});
var phoenix = new Enemy({
    name: "Phoenix",
    health: 100,
    attck: 50,
    expWorth: 800,
    goldWorth: 200
});
//bosses//
var dragon = new Enemy({
    name: "Destroyer of Worlds",
    health: 9001,
    attack: 500,
    expWorth: 5000,
    goldWorth: 1000
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
var zone = forestArr;
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
}

newEnemy(zone);
