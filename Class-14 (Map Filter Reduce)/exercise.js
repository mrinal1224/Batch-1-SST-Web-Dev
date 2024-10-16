const transactions = [1000 ,-500 ,3000 ,-1000 ,4000]

// Filter out the deposits 
// convert them to dollars and 
// provide the total amount in dollars

let deposits = transactions.filter(function(val){
  return val>0
})

let depositsInDollars = deposits.map(function(val){
   return val/83
})

let totalAmount = depositsInDollars.reduce(function(acc , curr){
     acc = acc+curr
     return acc

})
