export default function getMinJump(obstacles) {
    obstacles.sort(function (a, b) {  return a - b;  });
    let currMinJump = 1;
  
    do{
    let obsFlag = 0;
    let position = 0;
    for(let i = 1; i<=obstacles.at(-1)+1;i++){
      position += currMinJump;
      if(obstacles.includes(position)){
        obsFlag = 1;
        break;
      }
    }
    if(obsFlag){
    currMinJump++;
    }else{
      break;
    }
    }while(currMinJump<obstacles.at(-1)+1);
  
    return currMinJump;
  }

  //WAY BETTER - NOT MY CODE

  export default function getMinJump(obstacles) {
	const maxPositionObstacle = Math.max(...obstacles);
	let distance = 1;
  let iterator = 0;
  while (iterator <= maxPositionObstacle) {
    if (obstacles.includes(iterator)) {
      iterator = 0;
      distance++;
    }
    iterator += distance;
  }
  return distance;
}