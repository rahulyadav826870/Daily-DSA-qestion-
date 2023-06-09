var maxProfit = function(prices) {
 
    let minBuy=prices[0]   
   let max=0
    for(let i=0;i<prices.length;i++){
        let sellPrice=prices[i]  
   
        minBuy=Math.min(minBuy,prices[i])  
        let profit=sellPrice -minBuy   
        max =Math.max(max,profit)  
    }
    return max
   };


   console.log(maxProfit([7,1,5,3,6,4]))