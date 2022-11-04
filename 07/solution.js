export default function contains(store, product) {
  

    function isProductInSubStore(subStore){
      for(const prop in subStore){
        if (
          typeof subStore[prop] === 'object' &&
          subStore[prop] !== null &&
          !Array.isArray(subStore[prop])
        ){
          return isProductInSubStore(subStore[prop]);
        }
  
        if(subStore[prop] === product){
          return true;
        }
      }
  
      return false;
    }
  
    for(const prop in store){
      if (
        (typeof store[prop] === 'object' )&&
        (store[prop] !== null )&&
        (!Array.isArray(store[prop]))
      ){
         if(isProductInSubStore(store[prop]))
          return true; 
      }
      if(store[prop]===product){
        return true;
      }
    }
    return false;
  }