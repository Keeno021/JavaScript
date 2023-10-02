/* The behavior of async / await is similar to combining generators and promises. Async functions always return a promise.*/

const url = 'https://rickandmortyapi.com/api/character/3';

async function getData() {
const request = new Request(url,{
    // fetching api when api token is needed
    // headers : {
    //     'Authorization': 'Bearer BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11'
    // }
}) 

const response = await fetch(request);
const data = await response.json();
console.log(data);

//name
const div = document.getElementById("name");
const name = data.name;
const heading = document.createElement("h1");
heading.innerHTML = name;
div.appendChild(heading);

//img
const img = document.createElement("img");
  img.src = data.image;
  div.appendChild(img);
  document.body = "url('" + data.image + "')";

}

getData()
     