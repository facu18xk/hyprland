const FREEZING_POINT = 32;
const TEN = 10;
const convertToCelsius = function (temperatureInFahrenheit) {
  const PROPORTIONALITY = 5 / 9;
  let convertedNumber =
    (temperatureInFahrenheit - FREEZING_POINT) * PROPORTIONALITY;
  if (Number.isInteger(convertedNumber)) return convertedNumber;
  return Math.round(convertedNumber * TEN) / TEN;
}

const convertToFahrenheit = function (tempInCelsius) {
  const PROPORTIONALITY = 9 / 5;
  let convertedNumber = tempInCelsius * PROPORTIONALITY + FREEZING_POINT;
  if (Number.isInteger(convertedNumber)) return convertedNumber;
  return Math.round(convertedNumber * TEN) / TEN;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
