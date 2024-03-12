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
      street: 'ken St40',
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


  function calculator(operation, num1, num2){
    let result;

    switch (operation){
        case '+':
        result = num1 + num2;
        break;
    }
  }