//https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript   
   
const unluckyDays = (year) => {
    let count = 0;
    for (let month = 0; month < 12; month++) {
        let d = new Date(year, month, 13);
        if (d.getDay() == 5) {
            count++;
        }
    }
    return count;
}