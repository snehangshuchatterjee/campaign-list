export const abbreviateNumber = function (number) {
    if (number === null || number < 0) { return null; }
    if (number === 0) { return '0'; }
    let fixed = number < 1 ? 1 : 0,
        pow = (number).toPrecision(2).split("e"),
        stringIndex = pow.length === 1 ? 0 : Math.floor(Math.min(pow[1].slice(1), 14) / 3),
        finalNum = stringIndex < 1 ? number.toFixed(0 + fixed) : (number / Math.pow(10, stringIndex * 3)).toFixed(1 + fixed),
        output = finalNum + ['', 'K', 'M', 'B', 'T'][stringIndex];
    return output;
}
