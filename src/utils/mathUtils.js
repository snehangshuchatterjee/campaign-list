export const abbreviateNumber = function (number, fixed) {
    if (number === null) { return null; }
    if (number === 0) { return '0'; }
    fixed = (!fixed || fixed < 0) ? 0 : fixed;
    var pow = (number).toPrecision(2).split("e"),
        stringIndex = pow.length === 1 ? 0 : Math.floor(Math.min(pow[1].slice(1), 14) / 3),
        numByPow = stringIndex < 1 ? number.toFixed(0 + fixed) : (number / Math.pow(10, stringIndex * 3)).toFixed(1 + fixed),
        finalNum = numByPow < 0 ? numByPow : Math.abs(numByPow),
        output = finalNum + ['', 'K', 'M', 'B', 'T'][stringIndex];
    return output;
}
