function printDetails(name ,cb1 ,cb2){
   console.log(name)
   cb1('Jain')
   cb2(18)
}

function printLastName(lastName){
  console.log(lastName)
}

function printAge(age){
  console.log(age)
}

printDetails('Tanishq' , printLastName ,printAge)

