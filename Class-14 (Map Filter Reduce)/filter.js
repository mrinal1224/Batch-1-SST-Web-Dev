let nums = [1, 12 ,13 ,15 ,14 ,18 ,9 ,8]

// newArr
// NewArr should have al the even numbers
// create a function for this

function getEven(arr){
  let newArr = []

  for(let i=0 ; i<arr.length ; i++){
    if(arr[i]%2==0){
        newArr.push(arr[i])
    }
  }

  return newArr
}

let evenArr = getEven(nums)
console.log(evenArr)
console.log(nums)


// get all even numbers

function filterEven(num){
 return num%2==0
}

let EvenNums = nums.filter(filterEven)
console.log("From Filter method  " , EvenNums)


// Exercise

const transactions = [1000 ,7000, -2000 ,-4000 , 1500]
// You have deposits and withdrawls , 
// filter out all the deposits

let deposits= transactions.filter(function(val){
  return val>0
})

console.log(deposits)
