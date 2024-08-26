let arr = [1 ,2,3,4,5]

let sum = 0

for(let i=0 ; i<arr.length ; i++){
    sum = sum+arr[i]
}

console.log(sum)

// Reduce

arr.reduce(function(acc , initial){
    return acc = acc + initial
} , 0)







