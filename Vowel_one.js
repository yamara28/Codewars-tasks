// https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript

function vowelOne(s){
   const array =   s.toLowerCase().split("");
console.log(array)
   const vowelLetters = ['e', 'u', 'i', 'o', 'a'];
   const convertedArray = array.map(letter => {
    if (vowelLetters.includes(letter)) {
        return 1
    } else {return 0}
   })
   return convertedArray.join("")
}

                     