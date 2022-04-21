const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const eachSpecie = species.map((animal) => animal.name);
const eachWeek = Object.keys(hours);

function getExhibition(dia) {
  if (dia === 'Monday') {
    return 'The zoo will be closed!';
  }
  const animaisDoDia = species.filter((animal) => animal.availability.includes(dia));
  const nomeAnimais = animaisDoDia.map((nome) => nome.name);
  return nomeAnimais;
}

function geraFraseHorario(dia) {
  if (dia === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${hours[dia].open}am until ${hours[dia].close}pm`;
}

// https://trybecourse.slack.com/files/U0329SLS2TH/F03CAD3DQP5/gothroughobj.jpg

function retornaAnimaisHorarios() {
  return eachWeek.reduce((acc, week) => {
    acc[week] = {
      officeHour: geraFraseHorario(week),
      exhibition: getExhibition(week),
    };
    return acc;
  }, {});
}

function retornaTodosOsDias(scheduleTarget) {
  const objetoSemana = {
    [scheduleTarget]: {
      officeHour: geraFraseHorario(scheduleTarget),
      exhibition: getExhibition(scheduleTarget),
    },
  };
  return objetoSemana;
}

function retornaDiasDoAnimal(scheduleTarget) {
  const encontraObjetoAnimal = species.find((nome) => nome.name === scheduleTarget);
  return encontraObjetoAnimal.availability;
}

function getSchedule(scheduleTarget) {
  if (eachWeek.includes(scheduleTarget)) {
    return retornaTodosOsDias(scheduleTarget);
  }
  if (eachSpecie.includes(scheduleTarget)) {
    return retornaDiasDoAnimal(scheduleTarget);
  }
  return retornaAnimaisHorarios();
}

module.exports = getSchedule;
