// https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript


function sentence(List) {

    const entries = List.map(element => {
        for (const value of Object.entries(element)) {
            return value
        }
    })
        .map(array => {
            return [+array[0], array[1]]
        })
        .sort((a, b) => {
            return a[0] - b[0]
        })
        .map(array => {
            return array[1]
        }).join(' ')

    return entries
}
