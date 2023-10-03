/* The behavior of async / await is similar to combining generators and promises. Async functions always return a promise.*/
async function fetchCharacter() {
  const characterId = document.getElementById('characterId').value;

  if (characterId) {
    const apiUrl = `https://rickandmortyapi.com/api/character/${characterId}`;

    try {
      const request = new Request(apiUrl,{
        // fetching api when api token is needed
        headers : {
          //api token
          // 'Authorization': 'Bearer BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11'
        }
      })
      const response = await fetch(request);
      const data = await response.json();
      // console.log(data);
      displayCharacter(data);
    } catch (error) {
      console.error('Error fetching character:', error);
    } 
  } else {
    console.log('Please enter a valid character ID.');
  }
}

function displayCharacter(character) {
  const characterInfoDiv = document.getElementById('characterInfo');
  characterInfoDiv.innerHTML = `
    <h2>Character Information:</h2>
    <p>Name: ${character.name}</p>
    <p>Status: ${character.status}</p>
    <p>Species: ${character.species}</p>
    <p>Location: ${character.location.name}</p>
    <p>Image:<br> <img src="${character.image}" alt="${character.name}"></p>
  `;
}

     