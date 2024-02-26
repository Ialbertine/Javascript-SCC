const myname = 'Albertine';
const district = 'Gasabo';
const issheaboy = false;
console.log("My name is " +myname+ " and i live at " +district+ " District");
console.log(`my name is  ${myname} and i live at ${district} district`);

//array

const array = ['string' , 1, 2, false]
const myfavorite = ['ubugari', 'eggs', 'meat'];

console.log(array);
console.log(myfavorite)
//functions 
function mylastname(){
    let last_name = 'Ingabire';
    console.log(last_name);
}
mylastname();
last_name= 'Tina';
console.log(last_name);

//object is a set of key pair value
//declaration and definition


let frontendclass = {
    team1:{
        member: 12,
        gender: 'female',
        single: false,
    },
    team2:{
        member: 13,
        gender: 'male',
        single: true,
    }
}
console.log(frontendclass);