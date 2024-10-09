

// Write three functions to calculate the 
// area , circumferene and diameter 
// of the circle for these Radiuses
// Create functions to do this
// Create new arrays to store these values
// original array should not be mutated

// You should have three respective arrays 
// area - []
// circumfernce - []
// diameter = []
let MyRadius = [1 ,2 ,4 ,5 ,4]
function calculateArea(radiusArr){
    let areas = []

    for(let i=0 ; i<radiusArr.length ; i++){
        areas.push(3.14*radiusArr[i]*radiusArr[i])
    }

    return areas
}


let finalAreas= calculateArea(MyRadius)
console.log(finalAreas)

// Diameters and circumference

function calculateDiameter(radiusArr){
    let diameters = []

    for(let i=0 ; i<radiusArr.length ; i++){
        diameters.push(2*radiusArr[i])
    }

    return diameters
}

let finaldiameters= calculateDiameter(MyRadius)
console.log(finaldiameters)



function calculateCircumference(radiusArr){
    let circumferences = []

    for(let i=0 ; i<radiusArr.length ; i++){
        circumferences.push(2*radiusArr[i])
    }

    return circumferences
}

let finalCircumferences= calculateCircumference(MyRadius)
console.log(finalCircumferences)