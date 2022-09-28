// https://www.codewars.com/kata/54592a5052756d5c5d0009c3/train/javascript


const head = function (array) {
    return array[0]
};

const tail = function (array) {
    return array.slice(1)
}

const init = function (array) {
    return array.slice(0, -1)
}

const last = function (array) {
    return array[array.length - 1]
}