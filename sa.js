const simulatedAnnealing = require('simulated-annealing');
 
function getEnergy(v) {
    return Math.abs(v * v - 16);
}
 
function newState(x) {
    return x + (Math.random() - 0.5);
}
 
// linear temperature decreasing
function getTemp(prevTemperature) {
    return prevTemperature - 0.001;
}
 
var result = simulatedAnnealing({
    initialState: Math.random() * 16,
    tempMax: 15,
    tempMin: 0.001,
    newState: newState,
    getTemp: getTemp,
    getEnergy: getEnergy,
});

console.log(result);