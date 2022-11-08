function decodeNumber(symbols) {
    let symbolValues = [];
    for(let sym of symbols){
      switch (sym){
        case '.': symbolValues.push(1); break;
        case ',': symbolValues.push(5); break;
        case ':': symbolValues.push(10); break;
        case ';': symbolValues.push(50); break;
        case '!': symbolValues.push(100); break;
        default:
          return NaN;
      }
    }
    let next;
    let sign;
    return symbolValues.reduce(
      (result,value,index,array) => {
        next = array[index+1];
        sign = Math.sign(value-(next || 0)) || 1;
        return result + value*sign;
      },0
    );
  }