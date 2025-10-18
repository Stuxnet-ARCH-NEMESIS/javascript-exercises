const convertToCelsius = function(temperature) {
  let celsius = (temperature - 32) * 5 / 9;
  if (Number.isInteger(celsius)) {
    return celsius
  }
  else {
    celsius = Math.round(celsius*10)/10
    return celsius
  }
};

const convertToFahrenheit = function(temperature) {
  let celsius = (temperature*9)/5 + 32
  if (Number.isInteger(celsius)) {
    return celsius
  }
  else {
    celsius = Math.round(celsius*10)/10
    return celsius
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
