// https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

function bingo(ticket, win) {
    let count = 0;

    ticket.forEach(item => {
        const word = item[0]
        const wordWithoutRepeatedLeters = removeDups(word)
        for (let i = 0; i < wordWithoutRepeatedLeters.length; i++) {
            if (item[1] === wordWithoutRepeatedLeters[i].charCodeAt(0)) {
                count++
            }
        }
    })
    if (count >= win) {
        return 'Winner!'
    } else {
        return 'Loser!'
    }

}



function removeDups(s) {
    let charArray = s.split("");
    for (let i = 0; i < charArray.length; i++) {
        for (let j = i + 1; j < charArray.length; j++)
            if (charArray[i] == charArray[j]) {
                charArray.splice(j, 1);
                j--;
            }
    }
    return charArray.join("");
}