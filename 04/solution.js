export default function createXmasTree(height) {
    let arbolito = '';
    let maxWidth = 0;
    switch(height){
      case 0:
        arbolito = '#\n#'
        break;
      case 1:
        maxWidth = 1;
        break;
      default:
        maxWidth = 2*height-1;
    }
  
    let ast = '';
  
    for(let i = 1; i<=height;i++){
      let cantAst = 2*i-1;
  
        ast = ast.padStart(cantAst,'*');
        arbolito = arbolito.concat(ast.padStart((maxWidth-cantAst)/2+ast.length,'_').padEnd(maxWidth,'_'),'\n');
    }
  
    let lineaTronco = '#'.padStart((maxWidth/2)+1,'_').padEnd(maxWidth,'_');
    arbolito = arbolito.concat(lineaTronco,'\n',lineaTronco);
  
    return arbolito;
  }