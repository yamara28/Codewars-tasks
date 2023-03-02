//https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

function nthFibo(n) {
    const array = [0, 1];

    for (let i = 0; i < 50; i++) {
        array.push(array[i] + array[i + 1])
    }
    return array[n - 1]
}