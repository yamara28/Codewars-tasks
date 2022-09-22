//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript


function disemvowel(str) {
    const array = str.split("")
    const vowellLetters = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const filterredArray = array.filter((letter) =>
        !vowellLetters.includes(letter)
    )
    return filterredArray.join("");
}