// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
function toWeirdCase(string) {
    const array = string.split(' ');

    return array.map(word => [...word])
        .map(array => array
            .map((letter, index) => 
                 index % 2 === 0 ? letter.toUpperCase(): letter 
            ).join('')
        ).join(' ')
}
