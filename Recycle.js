// https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript

function recycle(array) {
    const paperContainer = array.filter((object) => {
        if (object.material === 'paper' || object.secondMaterial === 'paper') {
            return object.type
        }
    }).map((element) => {
        return element.type
    })

    const glassContainer = array.filter((object) => {
        if (object.material === 'glass' || object.secondMaterial === 'glass') {
            return object.type
        }
    }).map((element) => {
        return element.type
    })

    const organicContainer = array.filter((object) => {
        if (object.material === 'organic' || object.secondMaterial === 'organic') {
            return object.type
        }
    }).map((element) => {
        return element.type
    })

    const plasticContainer = array.filter((object) => {
        if (object.material === 'plastic' || object.secondMaterial === 'plastic') {
            return object.type
        }
    }).map((element) => {
        return element.type
    })

    return [paperContainer, glassContainer, organicContainer, plasticContainer]
}
