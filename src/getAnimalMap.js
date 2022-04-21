const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function geraEspecieTodosAnimais(ne, nw, se, sw) {
  const location = {
    NE: ne.map((animal) => animal.name),
    NW: nw.map((animal) => animal.name),
    SE: se.map((animal) => animal.name),
    SW: sw.map((animal) => animal.name),
  };
  return location;
}

function filtraNomes(objeto, nomeanimal) {
  const encontraAnimal = species.find((animals) => animals.name === nomeanimal);
  const arrayNomes = encontraAnimal.residents.map((cadaAnimal) => cadaAnimal.name);
  return arrayNomes;
}

function filtraNomesSexo(objeto, nomeanimal) {
  const encontraAnimal = species.find((animals) => animals.name === nomeanimal);
  const sexoEsc = encontraAnimal.residents.filter((sexoAnimal) => sexoAnimal.sex === objeto.sex);
  const arrayNomes = sexoEsc.map((cadaAnimal) => cadaAnimal.name);
  return arrayNomes;
}

function verificaIncludeESex(obj, arrayLocation, sorted, includeNames, sex) {
  if (sex && includeNames) {
    return arrayLocation.map((nome) => ({
      [nome.name]: (filtraNomesSexo(obj, nome.name)),
    }));
  }
}

function verificaIncludeESorted(obj, arrayLocation, sorted, includeNames, sex) {
  if (includeNames && Object.keys(obj).length === 1) {
    return arrayLocation.map((nome) => ({
      [nome.name]: (filtraNomes(obj, nome.name)),
    }));
  }
  if (sorted && includeNames) {
    return arrayLocation.map((nome) => ({
      [nome.name]: (filtraNomes(obj, nome.name)).sort(),
    }));
  }
  return verificaIncludeESex(obj, arrayLocation, sorted, includeNames, sex);
}

function verificaTresOpcoes(obj, arrayLocation) {
  const sorted = Object.keys(obj).includes('sorted');
  const includeNames = Object.keys(obj).includes('includeNames');
  const sex = Object.keys(obj).includes('sex');

  if (sorted && includeNames && sex) {
    return arrayLocation.map((nome) => ({
      [nome.name]: (filtraNomesSexo(obj, nome.name)).sort(),
    }));
  }
  return verificaIncludeESorted(obj, arrayLocation, sorted, includeNames, sex);
}

function geraAnimaisPorNome(objeto, ne, nw, se, sw) {
  const locationFinal = {
    NE: verificaTresOpcoes(objeto, ne),
    NW: verificaTresOpcoes(objeto, nw),
    SE: verificaTresOpcoes(objeto, se),
    SW: verificaTresOpcoes(objeto, sw),
  };
  return locationFinal;
}

function getAnimalMap(op) {
  const ne = species.filter((especie) => especie.location === 'NE');
  const nw = species.filter((especie) => especie.location === 'NW');
  const se = species.filter((especie) => especie.location === 'SE');
  const sw = species.filter((especie) => especie.location === 'SW');

  if (op === undefined || !(Object.keys(op).includes('includeNames'))) {
    return geraEspecieTodosAnimais(ne, nw, se, sw);
  }
  return geraAnimaisPorNome(op, ne, nw, se, sw);
}

const options = { includeNames: true, sex: 'female' };
console.log(getAnimalMap(options));

module.exports = getAnimalMap;
