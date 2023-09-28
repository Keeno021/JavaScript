let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 
'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', 
'-2015', 'Chris', 'Pine', 'Learn', 'JavaScript'];

//removes last element in array
secretMessage.pop();

//length shows how many elements are in the array
console.log(secretMessage.length);

// push adds new elements to the end of the array
secretMessage.push('to', 'program');

//indexing 7th element and changing value
secretMessage[7] = 'right';

// removes first element
secretMessage.shift(); 

// add element to the beginning of array
secretMessage.unshift('Programming');

//removes elements between 6,5 and adds string
secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join(' '));




