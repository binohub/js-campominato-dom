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