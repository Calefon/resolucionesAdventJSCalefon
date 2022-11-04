export default function getCoins(change) {
  
  let coinsInv = [change,0,0,0,0];
  let invCoinValues = [50,20,10,5,2]
  
  for(let [i,coin] of coinsInv.entries()){
    change /= invCoinValues[i];
    coin %= invCoinValues[i];
  }
    
  return coinsInv.reverse();
}
