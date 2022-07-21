

// https://www.codewars.com/kata/16-plus-18-equals-214




function add(num1, num2) {

    const arr1 = String(num1).split("").reverse().map((num1) => {
        return Number(num1);
    });

    const arr2 = String(num2).split("").reverse().map((num2) => {
        return Number(num2);
    });

    const sum = [];
    const maxNumberCount = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxNumberCount; i++) {
        if (arr1[i] === undefined) {
            sum.push(arr2[i]);
        } else if (arr2[i] === undefined) {
            sum.push(arr1[i]);
        } else {
            sum.push(arr2[i] + arr1[i]);
        }
    }
    const sumOfNumbers = Number(sum.reverse().join(""));
    return sumOfNumbers;
};