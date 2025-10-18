const removeFromArray = function(array, ...removal) {
        function remove (parameter) {
            return !removal.includes(parameter);
        }
    array = array.filter(remove)
    return array
};


// Do not edit below this line
module.exports = removeFromArray;
