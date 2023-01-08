// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

const countBits = function (n) {
    return n.toString(2)
        .split('')
        .map(item => parseInt(item))
        .reduce((acc, num) => { return acc + num }, 0)
};
