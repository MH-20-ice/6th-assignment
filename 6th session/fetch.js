let buttonTwo= document.getElementById('two');
let divTwo =document.getElementsByTagName('div')[0];

buttonTwo.addEventListener('click',()=>{
    fetch('https://icanhazdadjake.com',{
        headers: {"Accept":"application/json"}
    })
    .then((response)=>{
        return response.json()
    })

    .then(jokeObject=> {
        return jokeObject.joke.toUpperCase();
    })

    .then(joke=>{
        divTwo.innerText=joke;
    })

    .catch(e=>{
        console.log('oh no man, There is an Error',e);
    })
})