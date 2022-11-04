export default function listGifts(letter) {
    let arrayFiltrado = letter.trim().split(/\s/);
   
     let regalos = {};
   
    arrayFiltrado.forEach( regalo => {
      if(!regalo.startsWith("_")){
      if(regalos.hasOwnProperty(regalo)){
       regalos[regalo]++;
       }else{
       regalos[regalo] = 1;
       }
     }
    });
    
    return regalos;
   }