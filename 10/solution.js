 export default function getCoins(change) {
  
  let coins = [0,0,0,0,0];
  let invCoinValues = [2,5,10,20,50];
  
  for(let i = 4; i>=0; i--){
    coins[i] = Math.floor(change / invCoinValues[i]);
    change %= invCoinValues[i];
  }

  coins.unshift(change);

    
  return coins;
}
