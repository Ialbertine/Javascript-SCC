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

// boolean and if statement exercises

/* create a variable called "hour" and save the current hour of the day 
(use 24-hour format and save it as a number between 0 and 23).
if hour is between 6 and 12 display 'Good morning' in the console
if hour is between 6 and 12 display 'Good afternoon' in the console
otherwise display 'Good nigth' in the console
*/

const hour = 10;

if (hour >= 6 && hour < 12){
    console.log('Good morning');
}else if (hour >= 12 && hour < 18){
    console.log('Good afternoon');
}else{
    console.log('Good night');
}

const hours = 2;
const myName= 'tina';

if (hours >= 6 && hours < 12){
    console.log(`Good morning ${myName}!`);
}else if (hours >= 13 && hours < 18){
    console.log(`Good afternoon ${myName}!`);
}else{
    console.log(`Good night ${myName}!`);
}








  