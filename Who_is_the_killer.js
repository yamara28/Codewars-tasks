// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript

function killer(suspectInfo, dead) {
    const entries = Object.entries(suspectInfo);

    const mydrer = entries.find(dictionary =>
        dead.every(people =>
            dictionary[1].includes(people)
        )
    )
    return mydrer[0]
}
