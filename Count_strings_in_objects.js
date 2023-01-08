// https://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript

function strCount(obj) {
    let count = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            count+=1
        } else if (typeof obj[key] === 'object') {
            count += strCount(obj[key]);
        }
    };
    return count;
}
