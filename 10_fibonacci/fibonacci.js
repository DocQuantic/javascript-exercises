const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }
    fib = [0, 1];
    for(let i=2; i<=parseInt(num); i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[parseInt(num)];
};

// Do not edit below this line
module.exports = fibonacci;
