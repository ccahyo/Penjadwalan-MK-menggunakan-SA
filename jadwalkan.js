const simulatedAnnealing = require('simulated-annealing');
const mkname = 8, mkklas = 12, gedungA = 7, gedungB = 6, paralelklas = gedungA+gedungB;

// Shuffles array in place
function generateSolution(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function getEnergy(state) {
    var energy = 0;
    for (i = 0; i < state.length; i+=paralelklas) {
        for ( j=i; j<paralelklas; j++ ) {
            if ( state[j] != undefined ) {
                for ( l=i; l<paralelklas; l++ ) {
                    if ( state[l] != undefined ) {
                        if ( state[j].getName() == state[l].getName() )
                            energy --;
                        if ( state[j].getklas() == state[l].getklas() )
                            energy ++;
                    }
                }
            }
        }
    }
    return energy;
}

// copy array and invert subsequence
function newState(prevState) {
    var from = Math.floor(Math.random() * (prevState.length - 2));
    var to = from + 1 + Math.floor(Math.random() * (prevState.length - 2 - from));

    var state = [];
    for (i = 0; i < from; i++) {
        state.push(prevState[i]);
    }
    for (i = to; i >= from; i--) {
        state.push(prevState[i]);
    }
    for (i = to+1; i < prevState.length; i++) {
        state.push(prevState[i]);
    }
    return state;
}

// linear temperature decreasing
function getTemp(prevTemperature) {
    return prevTemperature - 0.1;
}


class MK {
    constructor( name, sks, klas ) {
        this.name = name;
        this.sks = sks;
        this.klas = klas;
    }
    getName() {
        return this.name;
    }
    getSKS() {
        return this.sks;
    }
    getklas() {
        return this.klas;
    }
}

var solution = [];
for ( j=0; j<mkname; j++ )      //nama MK
    for ( i=0; i<mkklas; i++ )  //kelas MK
        solution[solution.length] = new MK( j, 3, i );
solution[260] = undefined;      //slot maks

var initialState = generateSolution(solution);
    var result = simulatedAnnealing({
        initialState: initialState,
        tempMax: 1000000,
        tempMin: 1,
        newState: newState,
        getTemp: getTemp,
        getEnergy: getEnergy,
    });

console.log(result);
