const convertToCelsius = function(f) {
  let c = (f - 32) * 5 / 9;
  return roundNumberToOnePlace(c);
};

const convertToFahrenheit = function(c) {
  let f = (c * 9 / 5) + 32;
  return roundNumberToOnePlace(f);
};

function roundNumberToOnePlace(num){
  num *= 10;
  num = Math.round(num);
  num /= 10;
  return num;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
