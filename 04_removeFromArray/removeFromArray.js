const removeFromArray = function(array, elementsToRemove) {
    for(let i=1; i<arguments.length; i++){
        for(let j=array.length; j>=0; j--){
            if(array[j]===arguments[i]){
                array.splice(j, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
