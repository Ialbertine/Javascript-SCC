// 1.function that returns the sum of two numbers
function sum(num1, num2){
    return num1 + num2
}
console.log('The sum of the two numbers is: ' +sum(10, 20));

// 2.function that returns the product of two numbers
function product(num1, num2){
    return num1 * num2
}
console.log('The product of the two numbers is: '+product(10, 40));


// 3.function that returns the difference of two numbers
function difference(num1, num2){
    return num1 - num2
}
console.log('The difference of the two numbers is: '+difference(60, 20));

// 4.function that returns the division of two numbers
function division(num1, num2){
    return num1 / num2
}
console.log('The division of the two numbers is: '+division(60, 20));

// 5.Create a function that receives an array and returns the sum of all the elements inside the array
function sumArray(array){
    let sum = 0;
    for (let i=0; i<array .length; i++)
        sum = sum + array[i];
    return sum;
    
}
console.log('The sum of the array is: '+sumArray([20, 10, 5, 8, 15, 30]));

// 6.Create a function that receives an array and returns the greatest value inside that array

function greaterValue(array){
    let max = array[0];
    for (let i=0; i < array .length; i++){
        if (array[i] > max)
            max = array[i];
    }
    return max;
}
console.log('The greatest value is: '+greaterValue([20, 10, 5, 8, 15, 30]));

// 7.Create a function that receives an array and returns the smallest number from that array

function smallerValue(array){
    let min = array[0];
    for (let i=0; i < array .length; i++){
        if (array[i] < min)
            min = array[i];
    }
    return min;
}
console.log('The smallest value is: '+smallerValue([20, 10, 5, 8, 15, 30]));

/* 8.Create a function that receives an array of numbers and returns the average of the
numbers*/
function average(array){
    let sum = 0;
    for (let i=0; i < array .length; i++){
        sum = sum + array[i];
    }
    return sum/array.length;
}
console.log('The average of the array is: '+average([20, 10, 5, 8, 15, 30]));

/*Create a function that combines two arrays into one single array.
Use the following arrays:
arrange = [a,b,c,d]
array to = [e,f,g]
*/

function arrangeArray(array1, array2){
    return array1.concat(array2);
}
console.log('The combined array is: '+arrangeArray(['a', 'b', 'c', 'd'], ['e', 'f', 'g']));

// 20. Create a function that display an even number between 1 and 100

function evenNumber(){
    for (let i=1; i<=100; i++){
        if(i % 2 == 0)
            console.log(i);
    }
}
evenNumber();

// 21.Write a function that calculates the square of a number
function square(number){
    return number * number
} 
console.log('The square of the number is: '+square(10));

// 22, 23 .Write a function that checks if a number is even

function even(){
    let number = 30;
    if(number % 2 == 0){
        console.log('The number is even');
    }else{
        console.log('The number is odd');
    }
}
even();

// 24. write function that returns the maximum of two numbers
function max(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
console.log('The maximum of the two numbers is: '+max(10, 20));

// 25. write function that returns the minimum of two numbers
function min(num1, num2){
    if(num1 < num2){
        return num1;
    }else{
        return num2;
    }
}
console.log('The minimum of the two numbers is: '+min(10, 20));

// 26. write function that calculate the factorial of a number
function factorial(number){
    let factorial = 1;
    for (let i=1; i<=number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
console.log('The factorial of the number is: '+factorial(5));

// 27. write function that reverses a string

function reverse(string){
    return string.split('').reverse().join('');
}
console.log('The reversed string is: '+reverse('Albertine'));

// 28. Write a function that checks if a string is a palindrome

function ispalindrome(string){
    if (string === reverse(string)){
        return true;
    }else{
        return false;
    }
}
console.log('The string is palindrome: '+ispalindrome('level'));

// 29. Create a function that displays multiples of 5 between 1 and 100
function multiplesOf5(){
    for (let i=1; i<=100; i++){
        if(i % 5 == 0)
            console.log(i);
    }
}
multiplesOf5();
console.log('All the the numbers above are multiplies of 5 between numbers 1 to 100');

// 30.Create a function that returns the square root of a given number
function squareRoot(number){
    return Math.sqrt(number)
}
console.log('The square root of the number is: '+squareRoot(25));

// 31. Create a function that receives a string and changes it into capital letters

function capital(string){
    return string.toUpperCase();
}
console.log('The string in capital letters is: '+capital('Albertine'));

/* 32. Create a function called “stringModifier”. This function allows a user to provide a string,
and then provide the position they want to modify, and a character to replace the
modified one from the string. This function will receive 3 arguments the first argument
will be a string, the second will be the position of a specific*/

function stringModifier(string, position, character){
    return string.slice(0, position) + character + string.slice(position + 1);
}
console.log('The string after modification is: '+stringModifier('Albertin', 9, 'e'));

// 33. Write a function that counts the number of vowels in a string
function countVowels(string){
    let count = 0;
    for (let i=0; i<string.length; i++){
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u')
            count = count + 1;
    }
    return count;
}
console.log('The number of vowels in the string is: '+countVowels('Albertine'));

// 34. Write a function that checks if a number is prime
function isPrime(number){
    for (let i=2; i<number; i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}
console.log('The number is prime: '+isPrime(5));

// 35. Write a function that counts the number of consonants in a string

function countConsonants(string){
    let count = 0;
    for (let i=0; i<string.length; i++){
        if (string[i] !== 'a' && string[i] !== 'e' && string[i] !== 'i' && string[i] !== 'o' && string[i] !== 'u')
            count = count + 1;
    }
    return count;
}
console.log('The number of consonants in the string is: '+countConsonants('Albertine'));

// 36. write a function that finds the index of a given character in a string

function findIndex(string, character){
    for (let i=0; i<string.length; i++){
        if (string[i] == character)
            return i;
    }
}
console.log('The index of the character is: '+findIndex('communications', 'n'));