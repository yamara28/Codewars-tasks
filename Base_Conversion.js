// https://www.codewars.com/kata/526a569ca578d7e6e300034e/train/javascript

var Alphabet = {
    BINARY: '01',
    OCTAL: '01234567',
    DECIMAL: '0123456789',
    HEXA_DECIMAL: '0123456789abcdef',
    ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

const convertToDecimal = (input, source) => {
    const array = input.split('').reverse();
    const toNumbers = array.map((item, index) => {
        return source.indexOf(item) * Math.pow(source.length, index)
    }).reduce((acc, item) => acc + item, 0)

    return toNumbers
}

const convertToTarget = (num, source) => {
    const base = source.length 
    let result = [];
    if (num === 0) {
        return source[0]
    }
    while (num > 0) {
        result.unshift(source[num % base]);
        num = Math.floor(num / base);
    }
    return result.join('');
}

function convert(input, source, target) {
    const inputToSource = convertToDecimal(input, source);
    const result = convertToTarget(inputToSource, target)

    return result
}
