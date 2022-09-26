//Create a button that adds 1 to a botScore stored in localStorage 

if (!localStorage.getItem('botScore')) {localStorage.setItem('botScore', 0)}
//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', addOne)

function addOne(){
    
    let botScoreV = Number(localStorage.getItem('botScore'))
    botScoreV += 1;
    localStorage.setItem('botScore', botScoreV)
    console.log(typeof localStorage)
 }