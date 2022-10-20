// https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript

function deepCount(a) {
    let count = 0;
    a.forEach((element) => {
        if (!Array.isArray(element)) {
            count += 1;
        }
        else {
            count = count + 1 + deepCount(element)
        }
    })
    return count
}