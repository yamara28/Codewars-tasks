// https://www.codewars.com/kata/55c211cce1ef691d9b000061/train/javascript

function sum(arr) {
    return arr.reduce((acc, arg) => acc + arg, 0)
}

function calculate(...args) {
    const firstSum = sum([...args]);

    return function (...args2) {
        return sum([...args2]) + firstSum;
    }
}

