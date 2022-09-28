function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays) {
        return 0;
    }

    if (arrayOfArrays.length === 0) {
        return 0;
    }

    if (arrayOfArrays.some(array => !array)) {
        return 0;
    }

    const lengthOfArrays = arrayOfArrays.map((array) => array.length);

    if (lengthOfArrays.includes(0)) {
        return 0;
    } else {
        const sortedArray = lengthOfArrays.sort((a, b) => (a - b))
        for (let i = 0; i <= sortedArray.length; i++) {
            if (sortedArray[i + 1] - sortedArray[i] !== 1) return sortedArray[i] + 1
        }

        return sortedArray
    }
}