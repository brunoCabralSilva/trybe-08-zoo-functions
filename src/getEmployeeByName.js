const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const objF = employees.find((n) => n.firstName === employeeName || n.lastName === employeeName);
  return objF;
}

module.exports = getEmployeeByName;
