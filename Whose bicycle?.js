// https://www.codewars.com/kata/5a2cb4bff28b820c33000082/train/javascript

function calculateMarks(diary) {
    const marks = Object.values(diary);
    const sum = marks.reduce((acc, value) => acc + value, 0);
    return sum;
}

function whoseBicycle(diary1, diary2, diary3) {
    const firstSon = {
        name: 'first',
        totalMarksSum: calculateMarks(diary1),
        age: 14
    }
    const secondSon = {
        name: 'second',
        totalMarksSum: calculateMarks(diary2),
        age: 9
    }

    const thirdSon = {
        name: 'third',
        totalMarksSum: calculateMarks(diary3),
        age: 8
    }

    const allSons = [firstSon, secondSon, thirdSon]

    allSons.sort((a, b) => {
        if (a.totalMarksSum > b.totalMarksSum) {
            return -1
        }

        if (a.totalMarksSum < b.totalMarksSum) {
            return 1
        }


        if (a.age > b.age) {
            return 1
        }

        if (a.age < b.age) {
            return -1
        }
    })

    const winner = allSons[0];
    return `I need to buy a bicycle for my ${winner.name} son.`

}