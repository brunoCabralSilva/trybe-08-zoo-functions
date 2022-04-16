const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animals) {
  if (animals === undefined) {
    return species.reduce((acc, especie) => {
      acc[especie.name] = especie.residents.length;
      return acc;
    }, {});
  }
  if (Object.keys(animals).length === 1) {
    const encontraAnimal = species.find((especie) => especie.name === Object.values(animals)[0]);
    return encontraAnimal.residents.length;
  }
  if (Object.keys(animals).length === 2) {
    const encontraAnimal = species.find((especie) => especie.name === Object.values(animals)[0]);
    const { residents } = encontraAnimal;
    const filtradosPorSexo = residents.filter((animal) => animal.sex === Object.values(animals)[1]);
    return filtradosPorSexo.length;
  }
}

console.log(countAnimals({ specie: 'giraffes', sex: 'male' }));

module.exports = countAnimals;
