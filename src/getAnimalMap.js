const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function verificaChave(arrayObject) {
  const chaveRetornado = Object.keys(arrayObject).some((chave) => chave.includes('includeNames'));
  return chaveRetornado;
}

function verificaValor(arrayObject) {
  const valorRetornado = Object.values(arrayObject).some((valor) => valor === true);
  return valorRetornado;
}

function geraEspecieTodosAnimais(ne, nw, se, sw) {
  const location = {
    NE: ne.map((animal) => animal.name),
    NW: nw.map((animal) => animal.name),
    SE: se.map((animal) => animal.name),
    SW: sw.map((animal) => animal.name),
  };
  return location;
}

function filtraNomes(nomeanimal) {
  const encontraAnimal = species.filter((animals) => animals.name === nomeanimal);
  return encontraAnimal.map((cadaAnimal) => {
    const valorResidentes = cadaAnimal.residents;
    return valorResidentes;
  });
}

function geraAnimaisPorNome(ne, nw, se, sw) {
  const location = {
    NE: ne.reduce((acc, nome) => {
      acc[nome.name] = filtraNomes('lions');
      return acc;
    }, {}),
    NW: nw.reduce((acc, nome) => {
      acc[nome.name] = 2;
      return acc;
    }, {}),
    SE: se.reduce((acc, nome) => {
      acc[nome.name] = 2;
      return acc;
    }, {}),
    SW: sw.reduce((acc, nome) => {
      acc[nome.name] = 2;
      return acc;
    }, {}),
  }; return location;
}

function getAnimalMap(options) {
  const ne = species.filter((especie) => especie.location === 'NE');
  const nw = species.filter((especie) => especie.location === 'NW');
  const se = species.filter((especie) => especie.location === 'SE');
  const sw = species.filter((especie) => especie.location === 'SW');

  if (options === undefined) {
    return geraEspecieTodosAnimais(ne, nw, se, sw);
  }
  if (verificaChave(options) && verificaValor(options)) {
    return geraAnimaisPorNome(ne, nw, se, sw);
  }
}

const options = { includeNames: true };
console.log(getAnimalMap(options));

module.exports = getAnimalMap;
