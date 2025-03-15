const sumAll = function(numMin, numMax) {
    let sum = 0;

    if(numMin<0 || numMax <0 || !Number.isInteger(numMin) || !Number.isInteger(numMax) || typeof(numMin) !== "number" || typeof(numMax) !== "number"){
        return "ERROR";
    }

    for(let i=Math.min(numMin, numMax); i<=Math.max(numMin, numMax); i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
