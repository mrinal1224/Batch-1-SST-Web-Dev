let nums = [1 , 2 ,3 ,4 ,5 ,6]

// calculate the sum of all elements in the array
// Write Imperative code for this

function calculateSum(arr){
    let sum = 0

    for(let i=0 ; i<arr.length ; i++){
        sum = sum+arr[i]
    }
    return sum
}
let total = calculateSum(nums)
console.log(total)

// reduce

let totalSum = nums.reduce(function(acc , currVal){
    acc = acc+currVal
    return acc
}, 0)

console.log(totalSum)

