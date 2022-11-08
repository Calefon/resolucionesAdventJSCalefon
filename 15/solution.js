function checkSledJump(heights) {
    console.time('la mia')
    let highestValue = Math.max(...heights);
    let state = false; //it means up
    let previousValue = heights[0]-1;
  
    let result = heights.every(
      (height) => {
        if(previousValue===highestValue){
            state=true;
          }
        
        if(!state && height>previousValue){
          previousValue=height;
          return true;
        }
        
        if(state && height<previousValue){  
          previousValue=height;
          return true;
        }
        return false;
        }
    );
    
    return result && state;
  }

  //********************** NOT MY CODE - FOR COMPARISON ***************************
  function checkSledJump2(heights) {
    console.time('no mia');
	const maxHeight = Math.max(...heights);
	const length = heights.length;
	let height = heights[length - 1];

	if (maxHeight === height) return false;

	let prevHeight = 0;
	let comp = 1;
	let ok;

	for (let i = 1; i < length; i++) {
		height = heights[i];
		prevHeight = heights[i - 1];
		if (prevHeight === maxHeight) comp = -1;
		ok = comp === 1 ? height - prevHeight > 0 : prevHeight - height > 0;
		if (!ok) return false;
	}
	return true;
}

function areItemsAsc(items) {
    if (items.length !== [...new Set(items)].length) {
      return false;
    }
    return items
      .slice(0, -1)
      .reduce((result, item, index) => item < items[index + 1], false);
  }
  
  function checkSledJump3(heights) {
    const maxIndex = heights.indexOf(Math.max(...heights));
    const itemsBefore = heights.slice(0, maxIndex + 1);
    const itemsAfter = heights.slice(maxIndex).reverse();
    return areItemsAsc(itemsBefore) && areItemsAsc(itemsAfter);
  }

