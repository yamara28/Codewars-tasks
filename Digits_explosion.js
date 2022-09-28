// https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript


function explode(s) {
    const array = s.split('')

    const repeatElement = array.map((element) =>
        element.repeat(element)
    )
    return repeatElement.join('');
}