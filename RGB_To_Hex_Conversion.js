// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

const toHEX = (part) => {
    if (part > 255) {
        return 'FF'
    } else if (part < 0) {
        return '00'
    } else {
        const converted = part.toString(16).toUpperCase();
        if (converted.length === 1) {
            return '0' + converted
        } else return converted
    }
}


function rgb(r, g, b) {
    return `${toHEX(r)}${toHEX(g)}${toHEX(b)}`
}
