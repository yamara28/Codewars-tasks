// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

function minSum(arr) {
    const sortedArray = arr.sort((a,b)=> a-b)
    
    const A = [];
    const B = [];
      let result;
      const mediumOfSortedArray = sortedArray.length/2
      
      for (let i=0; i<sortedArray.length; i++ ) {
        if(i<mediumOfSortedArray) {
          A.push(sortedArray[i])
        } else B.push(sortedArray[i])
      }
      const reversedB = B.reverse()
    
    return   (A.reduce(function(r,a,i){return r+a*reversedB[i]},0));
    }