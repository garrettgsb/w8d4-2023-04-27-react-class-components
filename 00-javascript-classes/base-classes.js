class Battle {
  constructor(blueTeam, redTeam) {
    this.blueTeam = blueTeam;
    this.redTeam = redTeam;
    this.activeTeam = Math.random() > 0.5 ? blueTeam : redTeam;
    // this.turn.bind(this);
  }

  get otherTeam() { return this.activeTeam === this.blueTeam ? this.redTeam : this.blueTeam }

  start() {
    console.log(`----==== Starting battle ⚔️ ====----
    ${this.blueTeam.name}: ${this.blueTeam.unitTitles})
    ${this.redTeam.name}: ${this.redTeam.unitTitles})
    `);
    this.turn();
  }

  turn() {
    if (this.activeTeam.isDefeated) return this.endGame();
    this.activeTeam.takeTurn(this.otherTeam);
    this.activeTeam = this.otherTeam;
    setTimeout(() => this.turn(), 10);
  }

  endGame() {
    console.log(`\n*~*~*~*~*~*~*~*~*\n${this.activeTeam.name} is defeated!\n${this.otherTeam.name} wins!\n*~*~*~*~*~*~*~*~*\n`);
  }
}

class Team {
  name = 'Generic Team';
  constructor(name, units) {
    this.name = name;
    this.units = units;
  }

  takeTurn(otherTeam) {
    console.log(`\n----\n${this.name}'s Turn (${this.targets.length}/${this.units.length})`);
    this.units.forEach(unit => {
      unit.takeTurn(otherTeam.targets);
    });
  }

  get targets() { return this.units.filter(unit => !unit.isDefeated) }
  get isDefeated() { return this.units.every(unit => unit.isDefeated) }
  get unitTitles() { return this.units.map(unit => unit.title) }
}

class Unit {
  hitPoints = 10;
  attackPower = 5;
  armor = 2;
  type = '🤺';
  name = 'Anonymous'

  constructor(name) {
    this.name = name;
  }

  takeTurn(targets) {
    if (this.isDefeated) return;
    const selectedTarget = this.selectTarget(targets);
    if (!selectedTarget) return;
    this.attack(selectedTarget);
  }

  selectTarget(targets) {
    const target = targets[Math.floor(Math.random() * targets.length)];
    return target;
  }

  attack(target) {
    target.defend(this);
  }

  defend(attacker) {
    const damage = attacker.attackPower - this.armor;
    this.hitPoints -= Math.min(this.hitPoints, damage);
    console.log(`${attacker.title} 🗡 ${this.title} for ${damage} damage (${this.hitPoints}HP remaining)`);
    if (this.isDefeated) { console.log(`💀 ${this.title} is defeated!`) }
  }

  get title() { return `${this.name} (${this.type})` }
  get isDefeated() { return this.hitPoints <= 0 }
}

module.exports = {
  Battle,
  Team,
  Unit,
}
