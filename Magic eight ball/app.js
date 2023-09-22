let userName = "Keeno";

userName ?  console.log("Hello " + userName + "!") : console.log("Hello");

let userQuestion = "Will i buy a new car?";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 4);

let eightBall = "";

switch(randomNumber){
    case 0:
        eightBall = 'It is certain';
        break;
    case 1: 
        eightBall = 'It is decidedly so';
        break;
    case 2: 
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'My sources say no';
        break;
    case 4:
        eightBall = 'Signs point to yes';
        break;
}

console.log('The magic 8 ball says: '+ eightBall);

/*
if (randomNumber === 0) {
  eightBall = "It is certain";
} else if (randomNumber === 1) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 3) {
  eightBall = "Reply hazy try again";
} else if (randomNumber === 4) {
  eightBall = "My sources say no";
} else if (randomNumber === 5) {
  eightBall = "Signs point to yes";
} else {
  console.log("error with 8 ball");
}
*/
