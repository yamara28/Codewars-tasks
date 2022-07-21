// https://www.codewars.com/kata/colour-association


function colourAssociation(array) {
    const arrayOfObj = [];
    for (let i = 0; i < array.length; i++) {

        const key = array[i][0];
        const value = array[i][1];

        const obj = {
            [key]: value,
        };
        arrayOfObj.push(obj);

    }
    return arrayOfObj;
}