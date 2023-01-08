// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript

const sumTwoObjs = (obj1, obj2) => {
    const valueKeyArray2 = Object.entries(obj2);

    const arrayWithSymmirisedRepeatedKeys = valueKeyArray2.map(array => {
        if (obj1.hasOwnProperty(array[0])) {
            let value = obj1[array[0]] + array[1];
            let fka = array[0]
            return [fka, value]

        } else { return array }
    });

    const obj = {};
    arrayWithSymmirisedRepeatedKeys.forEach(function (array) {
        obj[array[0]] = array[1]
    });

    return { ...obj1, ...obj }
}


function combine(...params) {
    const objects = [...params];

    return objects.reduce((acc, obj) => sumTwoObjs(obj, acc), {});
}