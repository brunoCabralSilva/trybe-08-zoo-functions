const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especieNome = species.find((especie) => especie.name === animal);
  const { residents } = especieNome;
  const idade = residents.every((especie) => especie.age >= age);
  return idade;
}

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('lions', 14));