//Ask the user to enter his/her name as input.

let username = prompt("Please enter your name.");


//Ask the user to enter his/her gender as input.
// The answer should be either (male or female).

let gender = prompt("Please enter your gender. (male/female)");


//Ask the user to enter his/her age as input and 
//alert the user if the age is less than or equal to zero.

let age = prompt('How old are you?');
if(age<=0)
    alert("age is less than or equal to zero");

//Ask the user to confirm if he/she wants to skip the welcoming message.

//Alert a welcoming message with the name of the user and the 
//title Mr if the user is male and Ms if the user is female,
// and if the gender input is not correct alert the welcoming 
//message without the title, according to the confirmation.

let confirmation= confirm("Do you want to skip the welcoming message?");

if(confirmation==0){
    if(gender=== "female")
    alert("Welcome to our website, Ms." + username +"! <3")
    else if(gender==="male")
    alert("Welcome to our website, Mr." + username +"!");
    else
        alert("Welcome to our website, " + username +"!");
}

//As a user, I would like to answer more questions, 
//so you should add new three (Yes/No) questions.
let instagramFollower= confirm("Do you follow us on instagram?")
let pet = confirm("Do you like pets?")
let sara = confirm("Do you know a girl called sara?")
let answers = [instagramFollower, pet, sara];
for (let i = 0; i<answers.length; i++){
    if(answers[i] == 0){
        console.log(" No ");
    } else if(answers[i] == 0)
    console.log(" Yes ")
}
