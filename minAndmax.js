
function getMinAndMax(arrayNum){

  if (Array.isArray(arrayNum)) {
    for (let num in arrayNum) {
      if (isNaN(num)) {
        return null
      }
    }
    const numbers = arrayNum.sort((a,b) => a - b);
    const arrayMinAndMax = [];
    arrayMinAndMax.push(numbers[0])
    arrayMinAndMax.push(numbers[numbers.length - 1]);
    return arrayMinAndMax
  }

  if(isNaN(arrayNum)){
    return false;

  }else {
    return [arrayNum, arrayNum];
  }
}

//getMinAndMax([2, 4, 10, -2, 1])
module.exports = getMinAndMax;
