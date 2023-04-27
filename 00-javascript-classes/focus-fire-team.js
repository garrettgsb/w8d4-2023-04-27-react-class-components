const { Team } = require('./base-classes');

class FocusFireTeam extends Team {
  takeTurn(otherTeam) {
    console.log(`\n----\n${this.name}'s (Focus Fire) Turn (${this.targets.length}/${this.units.length})`);
    this.units.forEach(unit => {
      unit.takeTurn([this.weakestTarget(otherTeam.targets)]);
    });
  }

  weakestTarget(targets) {
    if (!targets.length) return;
    return targets.reduce((acc, next) => acc.hitPoints > next.hitPoints ? next : acc);
  }
}

module.exports = {
  FocusFireTeam,
}
