// a constand(wont change later) variable is being created
const kelvin = 200;

// getting celsius value
let celsius = kelvin - 273;
// rounding down to nearist whole number
celsius = Math.floor(celsius);
console.log(`The temperature is ${celsius} degrees Celsius.`);

// value of fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// rounding down to nearist whole number
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ' + celsius + ' degrees Fahrenheit.');

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);