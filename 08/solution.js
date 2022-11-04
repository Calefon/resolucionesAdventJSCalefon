export default function maxProfit(prices) { 

    function getMaxProfit(prices, profit){
      
      const restOfPrices = prices.slice(1);
      for(const price of restOfPrices){
        if(price-prices[0]>profit)
          profit = price-prices[0];
      }
      if(restOfPrices.length){
        return getMaxProfit(restOfPrices, profit);
      }
      return profit;
    }
    
    let profit = getMaxProfit(prices,0);
  
    return (profit>0)?profit:-1;
  }