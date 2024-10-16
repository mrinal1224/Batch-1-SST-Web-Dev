// Exercise1-

// You are given an array , 
//you have to calucalte sqaure of each element
//  and return all the 
//sqaure values in a new array

let arr1 = [1 ,2 ,3 ,4 ,5]

function calucalteSqaure(arr){
  let newArr = []

  for(let i=0 ; i<arr.length ; i++){
    newArr.push(arr[i]*arr[i])
  }

  return newArr
}

let sqrArr = calucalteSqaure(arr1)
console.log(sqrArr)

// Imperative and Declarative

// Map method - 

function square(val){
 return val*val
}

let squaresFromMap = arr1.map(square)
console.log(squaresFromMap)

// Exercise2

const transactions = [1000 ,2000 ,4000 ,7000]
const inrToUsd = 83

// Convert all these transcations in rupees to dollars



let dollarsTransactions = transactions.map(function(val){
  return (val/83).toFixed(2)
})

console.log(dollarsTransactions)