let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const runnerAge = 27;

if (runnerAge > 18 && registeredEarly === true) {
  raceNumber++;
}

if (runnerAge > 18 && registeredEarly === true) {
  console.log("Over 18s who registerd eary, you will run at 9.30am. Your number is " + raceNumber);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log("Late adults run at 11:00 am Your number is " + raceNumber);
} else if (runnerAge < 18) {
  console.log("Youth registrants run at 12:30 pm (regardless of registration) " + raceNumber);
} else {
  console.log("Come to the registration desk");
}