function addNumbers(a, b) {
    return a + b;
  }
  let result = addNumbers(3, 5);
  console.log(addNumbers(3, 5));


//   nested object

let person = {
    name: 'Solange',
    age: 30,
    address: {
      street: '123 St',
      city: 'Kigali',
      country: 'Rwanda'
    }
  };
  console.log(person.name);
  console.log(person.address.city);

//   nested array

const arrayNumbers = [["Ramona" , 30], ["Tina" , 40], ["innocente" , 50], "pam", 60];
console.log(arrayNumbers[4]);

// for In loop

let personinfo = {
    name: 'Ramona',
    age: 30,
    city: 'MUSANZE'
  };
  
  for (let key in personinfo) {
    console.log(key + ': ' + personinfo[key]);
  }