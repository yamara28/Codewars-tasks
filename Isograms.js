//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript



function isIsogram(str) {
    const newArray = str.toLowerCase().split('');
    const unicArray = [];
    const repeatedArray = [];


    newArray.forEach((c) => {
        if (!unicArray.includes(c)) {
            unicArray.push(c);
        } else { repeatedArray.push(c) }
    })

    if (repeatedArray.length === 0) {
        return true
    } return false

}
