const sumAll = function(startNumber,endNumber) {
    let total = 0
    if (endNumber < startNumber) {
        let lover = endNumber
        let crow = startNumber
        startNumber = lover
        endNumber = crow
    }
    if (endNumber < 1 || startNumber < 1) {
        return "ERROR"
    }
    if (!Number.isInteger(endNumber) || !Number.isInteger(startNumber)) {
        return "ERROR"
    }
    if (typeof startNumber !== "number" || typeof startNumber !== "number" ) {
        return "ERROR"
    }
    for (let i = startNumber; i <= endNumber; i++ ) {
        total += i
    }
    return total
}
// Do not edit below this line
module.exports = sumAll;
