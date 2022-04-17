const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((valor) => valor.id === id);
  const primeiroAnimal = employee.responsibleFor.find((valor) => valor[0]);
  const objAnimal = species.find((valor) => valor.id === primeiroAnimal);
  const { residents } = objAnimal;
  const comparaIdade = residents.reduce((acc, idade) => {
    if (idade.age >= acc) {
      return idade.age;
    }
    return acc;
  }, 0);

  const encontraMaisVelho = residents.find((valor) => valor.age === comparaIdade);
  const dadosAnimal = [encontraMaisVelho.name, encontraMaisVelho.sex, encontraMaisVelho.age];
  return dadosAnimal;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
