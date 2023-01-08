// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript


function numberOfPairs(gloves) {
    const coutingGloves = {};

     gloves.forEach(element => { coutingGloves[element] = (coutingGloves[element] || 0) + 1; })

    const convertingToPairs = Object.entries(coutingGloves).filter((coutedGlove) =>
        coutedGlove[1] > 1).map((pairs) =>
        [pairs[0], Math.floor(pairs[1] / 2)]
    );

    const countingTotal = convertingToPairs.reduce((acc, pairedGloves) => acc + pairedGloves[1], 0)

    const result = convertingToPairs.map( (pairedGloves) => {
        const ending = pairedGloves[1] >= 2 ? 's':''
        
        return `${pairedGloves[1]} ${pairedGloves[0]} pair${ending}`
        
    }).join(' + ');

    return `${countingTotal} (${result})`
}


