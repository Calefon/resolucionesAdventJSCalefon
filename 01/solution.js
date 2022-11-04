export default function contarOvejas(ovejas) {
 
    let ovejasFiltradas = [];
  
    ovejas.forEach(
      oveja => {
        let name = oveja.name.toLowerCase();
        if(( name.includes("n") && name.includes("a") ) && (oveja.color === "rojo"))     {
          ovejasFiltradas.push(oveja);
        }
      }
    );
  
    return ovejasFiltradas;
  }