// https://www.codewars.com/kata/merge-two-sorted-arrays-into-one


function mergeArrays(arr1, arr2) {
    const concatArray = arr1.concat(arr2);
    const sortConcatArray = concatArray.sort(function (a, b) {
        return a - b;
    });
    const mergeArray = [];
    for (let i = 0; i < sortConcatArray.length; i++) {
        if (sortConcatArray[i] != sortConcatArray[i + 1]) {
            mergeArray.push(sortConcatArray[i]);
        }
    }

    return mergeArray;

}
