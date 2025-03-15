const convertToCelsius = function(farenheitTemp) {
  const celsiusTemp = (farenheitTemp-32)/1.8;

  return parseFloat(celsiusTemp.toFixed(1));
};

const convertToFahrenheit = function(celiusTemp) {
  const farenheitTemp = celiusTemp*1.8+32;

  return parseFloat(farenheitTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
