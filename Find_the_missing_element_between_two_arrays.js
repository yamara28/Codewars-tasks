// https://www.codewars.com/kata/find-the-missing-element-between-two-arrays


function findMissing(arr1, arr2) {

    let sumFirst = 0;
    for (let i = 0; i < arr1.length; sumFirst += arr1[i++]);

    let sumSecond = 0;
    for (let k = 0; k < arr2.length; sumSecond += arr2[k++]);


    return (sumFirst - sumSecond);
}
