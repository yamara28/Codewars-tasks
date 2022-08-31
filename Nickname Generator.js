// https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript

function nicknameGenerator(name) {
    if (name.length < 4) {
        return "Error: Name too short";
    }
    const thirdLetter = name.substr(2, 1);

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(thirdLetter)) {
        return name.substr(0, 4)
    } else {
        return name.substr(0, 3)
    }
}