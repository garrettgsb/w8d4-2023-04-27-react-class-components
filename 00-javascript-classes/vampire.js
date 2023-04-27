const { Unit } = require('./base-classes');

class Vampire extends Unit {
  hitPoints = 6;
  type = '🧛‍♀️';
  attack(target) {
    const targetInitialHp = target.hitPoints;
    super.attack(target);
    const targetDamageTaken = targetInitialHp - target.hitPoints;
    this.gainHp(targetDamageTaken);
  }

  gainHp(amount) {
    this.hitPoints += amount;
    console.log(`🩸 ${this.title} gains ${amount}HP (now has ${this.hitPoints}HP)`);
  }
}

module.exports = {
  Vampire
}
