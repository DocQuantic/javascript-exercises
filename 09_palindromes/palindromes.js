const palindromes = function (string) {
    simpleString = string.replaceAll("!", "").replaceAll(",", "").replaceAll(".", "").replaceAll(" ", "").toLowerCase();
    console.log(simpleString)

    revertString = simpleString.split("").reverse().join("");
    return simpleString === revertString;
};

// Do not edit below this line
module.exports = palindromes;
