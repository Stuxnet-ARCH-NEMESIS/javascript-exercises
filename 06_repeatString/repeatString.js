const repeatString = function(string, num) {
    string = string.toString()
    let emptyArray = []
    let number = num
    for (let loopCounter = 0; loopCounter < number; loopCounter++ ){
        emptyArray.push(string)
    }
    let fullString = emptyArray.join('')
    return fullString
};

// Do not edit below this line
module.exports = repeatString;
