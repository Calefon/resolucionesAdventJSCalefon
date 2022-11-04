export default function isValid(letter) {
 
    if(letter.search(/[\[\]{}]/) != -1)
      return false
    
    let parentesisStack = [];
    let contadorCaracteres = 0;
  
    for (const c of letter){
      switch(c){
        case "(":
          parentesisStack.push(c);
          contadorCaracteres = 0;
        break;
        case ")":
          if(contadorCaracteres === 0)
            return false;
  
          parentesisStack.pop();
        break;
        default:
          contadorCaracteres++;
        break;
      }  
    }
    if(parentesisStack.length != 0 ){
        return false;
      }
      
    return true
  }