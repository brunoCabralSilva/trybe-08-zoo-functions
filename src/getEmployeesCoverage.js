const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function localizaAnimal(arrayAnimais) {
  const animals = species.filter((specie) => arrayAnimais.includes(specie.id));
  return animals.map((valor) => valor.name);
}

function localizaSetor(animais) {
  const animals = species.filter((specie) => animais.includes(specie.id));
  return animals.map((valor) => valor.location);
}

function getEmployeesCoverage(dados) {
  if (dados === undefined) {
    const todosFuncionarios = employees.map((nomeChave) => ({
      id: nomeChave.id,
      fullName: `${nomeChave.firstName} ${nomeChave.lastName}`,
      species: localizaAnimal(nomeChave.responsibleFor),
      locations: localizaSetor(nomeChave.responsibleFor),
    }));
    return todosFuncionarios;
  }
  if (Object.keys(dados).includes('name')){
    return  'minha benga';
  }
  if (Object.keys(dados).includes('id')){
    return  'mopa';
  }

}

console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
