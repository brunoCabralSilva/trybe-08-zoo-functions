const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  const arrayAdms = [];
  const adms = employees.map((valor) => valor.managers);
  for (let i = 0; i < adms.length; i += 1) {
    for (let j = 0; j < adms[i].length; j += 1) {
      arrayAdms.push(adms[i][j]);
    }
  }
  return arrayAdms.some((ids) => ids === id);
}

function getRelatedEmployees(managerId) {
  try {
    if (isManager(managerId)) {
      const pessoasSubordinadas = employees.filter((pessoa) => pessoa.managers.includes(managerId));
      const nC = pessoasSubordinadas.map((n) => `${n.firstName} ${n.lastName}`);
      return nC;
    }
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } catch (error) {
    throw error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
