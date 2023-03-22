// https://www.codewars.com/kata/543ddf69386034670d000c7d/train/javascript

function handAngle(date) {
    const minutes = date.getMinutes();
    const hour = date.getHours();
    const minuteAngle = minutes * 6;
    const hourAngle = (hour * 30) + (minutes * 0.5);
    const angle = Math.abs(hourAngle - minuteAngle);
    const minAngel = Math.min(angle, 360 - angle);
    return minAngel / 180 * Math.PI
}