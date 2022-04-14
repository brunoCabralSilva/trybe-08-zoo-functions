const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length >= 1) {
    const mapa = ids.map((valor) => species.find((especie) => especie.id === valor));
    return mapa;
  }
}

module.exports = getSpeciesByIds;
