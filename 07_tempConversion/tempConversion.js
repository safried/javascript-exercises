const ftoc = function(inputDegrees) {
//x Fahrenheit = ((x-32) + (5/9)) Celsius
  let outputDegrees;
  outputDegrees = ((inputDegrees - 32) * (5/9));
  outputDegrees = parseFloat(outputDegrees.toFixed(1));
  return outputDegrees;

};

const ctof = function(inputDegrees) {
//x Celsius = (x * (9/5) + 32) Fahrenheit
  let outputDegrees;
  outputDegrees = (inputDegrees * (9/5) + 32);
  outputDegrees = parseFloat(outputDegrees.toFixed(1));
  return outputDegrees;
};


//test
//ftoc(32);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
