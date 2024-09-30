// let person1 = {
//   name: "Kanishk",
//   age: 18,
//   ownsAcar: true,
// };

// let person2 = {
//   name: "Mrinal",
//   age: 25,
//   ownsAcar: false,
// };
// console.log(person1);
// console.log(person2);

// Working with an Object

let cap = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 105,
  allies: ["Bucky", "Tony Stark", "Thor"],
  address: {
    country: "USA",
    state: "New York",
    city: {
      cityName: "Brooklyn",
      pin: 123456,
    },
  },

  isAvenger: true,

  sayHi: function () {
    console.log("Cap says Hi");
  },
};

// console.log(cap)


// Access  a property of an  Object

//Dot notation

console.log(cap.age)

// Bracket notation

console.log(cap['firstName'])

// cityName

console.log(cap.address.city.cityName)

cap.allies.push('The Hulk')

console.log(cap)

cap.sayHi()

cap.isAvenger = false

console.log(cap)

delete cap.age

console.log(cap)



