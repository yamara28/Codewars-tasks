// // https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
    const arrayOfWord = word.toLowerCase().split('');

    const duplicates = arrayOfWord.filter((item, index) => index !== arrayOfWord.indexOf(item));

    const convertedWord = arrayOfWord.map((letter) => {
        if (duplicates.includes(letter)) {
            return ')'
        }
        return '('
    }
    ).join('')

    return convertedWord
}

