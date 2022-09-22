//https://www.codewars.com/kata/62eb800ba29959001c07dfee/train/javascript


const calculateV = function (color) {
    const R = parseInt(color.slice(1, 3), 16)
    const G = parseInt(color.slice(3, 5), 16)
    const B = parseInt(color.slice(5, 7), 16)
    return Math.max(R, G, B)
}

function brightest(colors) {
    const colorBrightestArray = colors.map((color) =>
    ({
        color,
        V: calculateV(color)
    })
    )

    const arrayOfV = colorBrightestArray.map((object) => object.V)
    const maxOfV = Math.max(...arrayOfV)
    return colorBrightestArray.find((result) =>
        result.V === maxOfV
    ).color;
}