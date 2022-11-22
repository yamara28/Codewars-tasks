// https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript

const myLanguages = (results) => Object.entries(results)
    .filter(([, score]) => { return score >= 60; })
    .sort((array1, array2) => { return array2[1] - array1[1] })
    .map((array) => { return array[0] });
