function convertToCelsius(fahTemp) {
  const temperature = (fahTemp - 32) * (5/9);
  return Number(temperature.toFixed(1));
};



function convertToFahrenheit(celTemp) {
  const temperature = (celTemp * (9/5)) + 32;
  return Number(temperature.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
