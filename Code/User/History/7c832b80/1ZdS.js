const FREEZING_POINT = 32;
const convertToCelsius = function (temperatureInFahrenheit) {
  const PROPORTIONALITY = 5 / 9;
  let convertedNumber =
    (temperatureInFahrenheit - FREEZING_POINT) * PROPORTIONALITY;
  if (Number.isInteger(convertedNumber)) return convertedNumber;
  else return Math.round(convertedNumber * 10) / 10;
}

const convertToFahrenheit = function (tempInCelsius) {
  const PROPORTIONALITY = 9 / 5;
  let convertedNumber = tempInCelsius * PROPORTIONALITY + FREEZING_POINT;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
