const { Battle, Team, Unit } = require('./base-classes');
// const { Vampire } = require('./vampire');
// const { FocusFireTeam } = require('./focus-fire-team');

const teamA = new Team('Team A', [
  new Unit('A1'),
  new Unit('A2'),
  new Unit('A3'),
  // new Unit('A4'),
  // new Unit('A5'),
]);
const teamB = new Team('Team B', [
  new Unit('B1'),
  new Unit('B2'),
  new Unit('B3'),
  // new Unit('B4'),
  // new Unit('B5'),
]);

const battle = new Battle(teamA, teamB);
battle.start();
