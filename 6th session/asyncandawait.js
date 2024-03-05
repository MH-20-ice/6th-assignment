let buttonThree= document.getElementById('three');
let divThree =document.getElementsByTagName('div')[0];

buttonThree.addEventListener('click,displayJoke');

async function displayJoke() {
    const response =await fetch("https://icanhazdadjoke.com",{
        headers:{"Accept":"application/json"}
    });

    const jokeObject = await response.json();
    const lowercaseJoke =jokeObject.joke.toLowerCase();

    divThree.innerHTML=lowercaseJoke;
}
