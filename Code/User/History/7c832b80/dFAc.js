const FREEZING_POINT = 32;
const convertToCelsius = function (temperatureInFahrenheit) {
  const PROPORTIONALITY = 5 / 9;
  (temperatureInFahrenheit - FREEZING_POINT) * PROPORTIONALITY;
};

const convertToFahrenheit = function (tempInCelsius) {
  const PROPORTIONALITY = 9 / 5;
  return tempInCelsius * PROPORTIONALITY + FREEZING_POINT;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
