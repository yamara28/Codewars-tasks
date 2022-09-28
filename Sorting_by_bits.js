// https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

function calculateOneBits(element) {
    return (element.toString(2).match(/1/g) || []).join('').length
}

function sortByBit(arr) {
    const arrOfBit = arr.map((element) => ({
        element,
        bits: element.toString(2).match(/1/g || []).join('').length
    }));

    arr.sort((a, b) => {
        const a1 = calculateOneBits(a);
        const b1 = calculateOneBits(b);
        if (a1 === b1) {
            return a - b
        } else {
            return a1 - b1
        }

    });

    return arr;

    // OR another solution:


    // arrOfBit.sort((a, b) => {
    //     if (a.bits === b.bits) {
    //         return a.element - b.element
    //     } else {
    //         return a.bits - b.bits
    //     }
    // });

    // return arrOfBit.map((el) => el.element)

}

console.log(sortByBit([1, 3, 9, 4, 6, 3, 10]))