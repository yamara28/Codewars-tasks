// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript


function generatePart(value, part) {
    return value === 0 ? '' : `${value} ${part}${value > 1 ? 's' : ''}`;
}

function formatDuration(seconds) {
    if (seconds === 0) {
        return 'now';
    }

    const y = 365 * 24 * 60 * 60
    const d = 24 * 60 * 60
    const h = 60 * 60
    const m = 60
    const years = Math.floor(seconds / y)
    const days = Math.floor((seconds - (years * y)) / d)
    const hours = Math.floor((seconds - (years * y) - (days * d)) / h)
    const mins = Math.floor((seconds - (years * y) - (days * d) - (hours * h)) / m)
    const sec = Math.floor((seconds - (years * y) - (days * d) - (hours * h) - (mins * m)))
    const yearsPart = generatePart(years, 'year');
    const daysPart = generatePart(days, 'day');
    const hoursPart = generatePart(hours, 'hour');
    const minsPart = generatePart(mins, 'minute');
    const secPart = generatePart(sec, 'second');
    const presentParts = [yearsPart, daysPart, hoursPart, minsPart, secPart].filter(part => !!part);
    if (presentParts.length === 1) {
        return presentParts[0];
    }
    const lastComponent = presentParts.splice(-1, 1);
    return `${presentParts.join(', ')} and ${lastComponent}`;
}


console.log(formatDuration(94608121))
