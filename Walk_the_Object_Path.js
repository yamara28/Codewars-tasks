// https://www.codewars.com/kata/59418db3f5c394eca80000ef/train/javascript

function find(object, path) {
    const arrayOfPath = path.split('.');

    let result = object;

    for (let i = 0; i < arrayOfPath.length; i++) {
        if (res.hasOwnProperty(arrayOfPath[i])) {
            result = result[arrayOfPath[i]];
        } else {
            return undefined
        }
    }
    return result
}