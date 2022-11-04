export default function sumPairs(numbers, result) {
    let sumandos = [];
  
    function findSumandos(array){
      let number1 = array[0];
      let restOfArray = array.slice(1);
      for(const number2 of restOfArray){
        if(number1 + number2 == result){
          sumandos = [number1, number2];
          break;
        }
      }
      if(sumandos.length || !restOfArray.length)
        return sumandos;
      
      return findSumandos(restOfArray);
    }
  
    findSumandos(numbers);
    
    if(!sumandos.length)
      return null;
    
    return sumandos;
  }