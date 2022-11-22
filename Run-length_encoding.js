// https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript

function runLengthEncoding(string) {
    const result = [];
    const array = string.split('');

    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            result.push([1, array[0]])
        } else {
            if (array[i] === array[i - 1]) {
                const returndValue = result.pop();
                result.push([(returndValue[0] + 1), array[i]])
            } else {
                result.push([1, array[i]])
            }
        }
    }
    return result;
}

