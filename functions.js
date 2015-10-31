var onLvl = function(){
  this.level = this.level + 1;
  this.experience = this.experience - this.expNeeded;
  this.expNeeded = this.expNeeded*2;
  this.bonusAtk = this.bonusAtk *2;
  this.health = 100 * this.level;
    if(this.experience > this.expNeeded){
      onLvl();
    }
};
