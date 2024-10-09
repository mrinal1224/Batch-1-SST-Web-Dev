
let MyRadius = [1, 2, 4, 5, 4];

function calculateArea(radius) {
  return 3.14 * radius * radius;
}

function calculateDiameter(radius) {
  return 2 * radius;
}

function calculateCircumference(radius) {
  return 2 * 3.14 * radius;
}




function calculateData(radiusArr, cb) {
  let data = [];

  for (let i = 0; i < radiusArr.length; i++) {
    data.push(cb(radiusArr[i]));
  }

  return data;
}

let finalAreas = calculateData(MyRadius, calculateArea);
let finalCircumferences = calculateData(MyRadius, calculateCircumference);
let finalDiameters = calculateData(MyRadius, calculateDiameter);
console.log(finalAreas);
console.log(finalCircumferences);
console.log(finalDiameters);

// Diameters and circumference
