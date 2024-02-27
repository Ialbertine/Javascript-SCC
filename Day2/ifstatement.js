//If statement help us to decide whether or not to run some code
//here example of if statement 

if (true){
    console.log('Hello javascript if statement') //this will display the message in console.log because the statement is true 
    // if we put false in blacket it will display nothing because the statement is false 
}

//if else statement 
// here is example of the code that will check if someone is old enough to drive 

const myAge = 18;
if (myAge >= 18){
    console.log('Yeah, you can Drive')
}else{
    console.log('Nop, You can not Drive')
}

// if statement where there is more than one condition
    const age = 25;
    if (age >= 18){
        console.log('You can drive')
    }else if (age >= 17){
        console.log('you almost there!')
    }else{
        console.log('You are not allowed to drive')
    }