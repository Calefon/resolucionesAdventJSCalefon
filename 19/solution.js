function learn(time, courses) {
  let maxSum = 0;
  let currentSum=0;
  let result = null;
  
  for(let i = 0;i < courses.length;i++){
    for(let j = i+1; j < courses.length;j++){

      currentSum = courses[i]+courses[j];

      if(currentSum === time) return [i, j];

      if(currentSum > maxSum && !(currentSum>time)){
        maxSum=currentSum;
        result = [i,j];
      };
      
    }
  }
  return result;
}