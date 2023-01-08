// https://www.codewars.com/kata/566d5e2e57d8fae53c00000c/train/javascript

function getArray(a, b, c) {

    function getRandomInteger(a, b) {
        const lower = Math.ceil(Math.min(a, b));
        const upper = Math.floor(Math.max(a, b));
        const result = Math.random() * (upper - lower + 1) + lower;
        return Math.floor(result);
    }

    const B = Array.from({ length: 15 }, () => getRandomInteger(a, b))
    return Array.from(new Set(B)).slice(0, c)
}


function getCard() {
    const B = getArray(1, 15, 5).map(item => 'B' + item)
    const I = getArray(16, 30, 5).map(item => 'I' + item)
    const N = getArray(31, 45, 4).map(item => 'N' + item)
    const G = getArray(46, 60, 5).map(item => 'G' + item)
    const O = getArray(61, 75, 5).map(item => 'O' + item)

    return [B, I, N, G, O].flat()
}