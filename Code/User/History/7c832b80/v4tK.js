const convertToCelsius = function (temperatureInFahrenheit) {
  const PROPORTIONALITY = 5 / 9;
  return (temperatureInFahrenheit - 32) * PROPORTIONALITY;
};

const convertToFahrenheit = function (tempInCelsius) {
  return tempInCelsius * (9 / 5) + 32
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
