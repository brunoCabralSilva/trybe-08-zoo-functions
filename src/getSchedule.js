const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const eachSpecie = species.map((animal) => animal.name);
const eachWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

function listaAnimais(dia) {
  const animaisDoDia = species.filter((animal) => animal.availability.includes(dia));
  const nomeAnimais = animaisDoDia.map((nome) => nome.name);
  return nomeAnimais;
}

function retornaHorarioDaSemana(semana, dia) {
  if (dia === 'Monday') {
    const horarioSemanal = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
    return horarioSemanal;
  }
  const horarioSemanal = {
    officeHour: `Open from ${semana.open}am until ${semana.close}pm`,
    exhibition: listaAnimais(dia),
  };
  return horarioSemanal;
}

function diasDoAnimal(animalEscolhido) {
  const diasAnimalAvaliability = species.find((animal) => animal.name === animalEscolhido);
  const animalDiasConcluido = diasAnimalAvaliability.availability;
  return animalDiasConcluido;
}
function retorObjetodaSemana3(dias) {
  if (dias === 'Monday') {
    const horasSemana = hours.Monday;
    const retornaObj = { Monday: retornaHorarioDaSemana(horasSemana, dias) };
    return retornaObj;
  }
}
function retorObjetodaSemana2(dias) {
  if (dias === 'Friday') {
    const horasSemana = hours.Friday;
    const retornaObj = { Friday: retornaHorarioDaSemana(horasSemana, dias) };
    return retornaObj;
  }

  if (dias === 'Saturday') {
    const horasSemana = hours.Saturday;
    const retornaObj = { Saturday: retornaHorarioDaSemana(horasSemana, dias) };
    return retornaObj;
  }
  if (dias === 'Sunday') {
    const horasSemana = hours.Sunday;
    const retornaObj = { Sunday: retornaHorarioDaSemana(horasSemana, dias) };
    return retornaObj;
  }
  return retorObjetodaSemana3(dias);
}

function retorObjetodaSemana(dias) {
  if (dias === 'Tuesday') {
    const horasSemana = hours.Tuesday;
    const retornaObj = { Tuesday: retornaHorarioDaSemana(horasSemana, dias) };
    return retornaObj;
  }

  if (dias === 'Wednesday') {
    const horasSemana = hours.Wednesday;
    const retornaObj = { Wednesday: retornaHorarioDaSemana(horasSemana, dias) };
    return retornaObj;
  }
  if (dias === 'Thursday') {
    const horasSemana = hours.Thursday;
    const retornaObj = { Thursday: retornaHorarioDaSemana(horasSemana, dias) };
    return retornaObj;
  }
  return retorObjetodaSemana2(dias);
}

function getSchedule(scheduleTarget) {
  if (eachSpecie.includes(scheduleTarget)) {
    return diasDoAnimal(scheduleTarget);
  }
  if (eachWeek.includes(scheduleTarget)) {
    return retorObjetodaSemana(scheduleTarget);
  }
  const horarioSemanal = {
    Tuesday: retornaHorarioDaSemana(hours.Tuesday, 'Tuesday'),
    Wednesday: retornaHorarioDaSemana(hours.Wednesday, 'Wednesday'),
    Thursday: retornaHorarioDaSemana(hours.Thursday, 'Thursday'),
    Friday: retornaHorarioDaSemana(hours.Friday, 'Friday'),
    Saturday: retornaHorarioDaSemana(hours.Saturday, 'Saturday'),
    Sunday: retornaHorarioDaSemana(hours.Sunday, 'Sunday'),
    Monday: retornaHorarioDaSemana(hours.Monday, 'Monday'),
  };
  return horarioSemanal;
}

console.log(getSchedule('Thursday'));

module.exports = getSchedule;
