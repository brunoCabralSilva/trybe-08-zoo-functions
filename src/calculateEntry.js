const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const dadosEntry = entrants.reduce((acc, dados) => {
    if (dados.age < 18) {
      return { adult: acc.adult, child: acc.child + 1, senior: acc.senior };
    }
    if (dados.age >= 18 && dados.age < 50) {
      return { adult: acc.adult + 1, child: acc.child, senior: acc.senior };
    }
    return { adult: acc.adult, child: acc.child, senior: acc.senior + 1 };
  }, { adult: 0, child: 0, senior: 0 });
  return dadosEntry;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visit = countEntrants(entrants);
  const adultos = visit.adult * prices.adult;
  const criancas = visit.child * prices.child;
  const senior = visit.senior * prices.senior;
  const totalCobrado = adultos + criancas + senior;
  return totalCobrado;
}

module.exports = { calculateEntry, countEntrants };
