// ! al click di play rimuovi d-none
const btnPlay = document.querySelector("#btn-play");
btnPlay.addEventListener("click", function(){
    const squareContainer = document.querySelector("#square-container");    
    squareContainer.classList.remove("d-none");
})
// ! al click di reset aggiungi d-none
const btnReset = document.querySelector("#btn-reset");
btnReset.addEventListener("click", function(){
    const squareContainer = document.querySelector("#square-container");    
    squareContainer.classList.add("d-none");
})



const squareContainer = document.getElementById("square-container")
// ! crea un quadrato * 100 e assegna al quadrato il suo numero
for (let i = 1; i <= 100; i++){
    // ! crea un div con classe square da aggiungere
    const newDiv = document.createElement('div');
    newDiv.classList.add('square');
    newDiv.innerHTML = i;

    // ! al click fai pari o dispari? a seconda del risultato aggiungi una classe
    newDiv.addEventListener('click', function(){
    if (i % 2 === 0){
        newDiv.classList.toggle("bg-success");
    }else{
        newDiv.classList.toggle("bg-danger");
    }
})

    // ! conneecting
    squareContainer.append(newDiv)
} 

