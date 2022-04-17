const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function localizaAnimais(arrayAnimais) {
  const animals = species.filter((specie) => arrayAnimais.includes(specie.id));
  return animals.map((valor) => valor.name);
}

function localizaSetor(animais) {
  const animals = species.filter((specie) => animais.includes(specie.id));
  return animals.map((valor) => valor.location);
}

function geraDados(objeto) {
  const arrayPessoa = {
    id: objeto.id,
    fullName: `${objeto.firstName} ${objeto.lastName}`,
    species: localizaAnimais(objeto.responsibleFor),
    locations: localizaSetor(objeto.responsibleFor),
  };
  return arrayPessoa;
}

function dadosIndefinidos(dados) {
  const todosFuncionarios = employees.map((nomeChave) => ({
    id: nomeChave.id,
    fullName: `${nomeChave.firstName} ${nomeChave.lastName}`,
    species: localizaAnimais(nomeChave.responsibleFor),
    locations: localizaSetor(nomeChave.responsibleFor),
  }));
  return todosFuncionarios;
}

function dadosPorNomeSobrenome(nomeSobrenome) {
  const afirstName = employees.map((nome) => nome.firstName);
  const alastName = employees.map((nome) => nome.lastName);
  try {
    if (afirstName.includes(nomeSobrenome.name)) {
      const localizaAnimal = employees.find((pessoa) => pessoa.firstName === nomeSobrenome.name);
      return geraDados(localizaAnimal);
    }
    if (alastName.includes(nomeSobrenome.name)) {
      const localizaAnimal = employees.find((pessoa) => pessoa.lastName === nomeSobrenome.name);
      return geraDados(localizaAnimal);
    }
    throw new Error('Informações inválidas');
  } catch (error) {
    throw error.message;
  }
}

function dadosPorId(dados) {
  const todosIds = employees.map((nome) => nome.id);
  try {
    if (todosIds.includes(dados.id)) {
      const localizaPorId = employees.find((pessoa) => pessoa.id === dados.id);
      return geraDados(localizaPorId);
    }
    throw new Error('Informações inválidas');
  } catch (error) {
    throw error.message;
  }
}

function getEmployeesCoverage(dados) {
  if (dados === undefined) {
    return dadosIndefinidos(dados);
  }
  if (Object.keys(dados).includes('name')) {
    return dadosPorNomeSobrenome(dados);
  }
  if (Object.keys(dados).includes('id')) {
    return dadosPorId(dados);
  }
  return 'Dados inseridos são inválidos. Por favor, tente novamente!';
}

module.exports = getEmployeesCoverage;
