export default function countPackages(carriers, carrierID) {
  let packCount = 0;

  let carrier = getCarrier(carriers,carrierID);
  packCount += carrier[1];
  let subs = [];
  
  if(carrier[2]!==[]){
    subs=carrier[2].map(
      element => countPackages(carriers,element)
    );
  }
  
  packCount += subs.reduce(
    (prev,element) => prev+element,0
  );
  
  return packCount;
}

const getCarrier = (carriers,carrierID) => {  
    for(let element of carriers){
      if(element[0] === carrierID){
        return element;
      }
    }
    return [];
  }