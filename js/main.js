// ! al click di hard avvia square hard
const difficultyHard = document.getElementById(`difficulty-hard`);
difficultyHard.addEventListener('click', function(){
    const squareContainer = document.getElementById("square-container")
    squareContainer.textContent ="";
    // ! crea un quadrato * 100 e assegna al quadrato il suo numero
    for (let i = 1; i <= 100; i++){
        // ! crea un div con classe square da aggiungere
        const newDiv = document.createElement('div');
        newDiv.classList.add('square-hard');
        newDiv.innerHTML = i;
        // // ! aggiungi la classe container-hard 
        // squareContainer.classList.add('container-hard');

        // ! al click fai pari o dispari? a seconda del risultato aggiungi una classe
        newDiv.addEventListener('click', function(){
        if (i % 2 === 0){
            newDiv.classList.toggle("bg-success");
            console.log(`hai cliccato la casella numero ${i}`);
        }else{
            newDiv.classList.toggle("bg-danger");
            console.log(`hai cliccato la casella numero ${i}`);
        }
        })
        // ! conneecting
        squareContainer.append(newDiv)
        squareContainer.classList.remove("d-none");
    }
})
// // ! al click di MEDIUM avvia square hard
// const difficultyMedium = document.getElementById(`difficulty-medium`);
// difficultyHard.addEventListener('click', function(){
//     const squareContainer = document.getElementById("square-container")
//     squareContainer.textContent ="";
//     // ! crea un quadrato * 100 e assegna al quadrato il suo numero
//     for (let i = 1; i <= 100; i++){
//         // ! crea un div con classe square da aggiungere
//         const newDiv = document.createElement('div');
//         newDiv.classList.add('square-medium');
//         newDiv.innerHTML = i;
//         // // ! aggiungi la classe container-hard 
//         // squareContainer.classList.add('container-hard');

//         // ! al click fai pari o dispari? a seconda del risultato aggiungi una classe
//         newDiv.addEventListener('click', function(){
//         if (i % 2 === 0){
//             newDiv.classList.toggle("bg-success");
//             console.log(`hai cliccato la casella numero ${i}`);
//         }else{
//             newDiv.classList.toggle("bg-danger");
//             console.log(`hai cliccato la casella numero ${i}`);
//         }
//         })
//         // ! conneecting
//         squareContainer.append(newDiv)
//         squareContainer.classList.remove("d-none");
//     }
// })
// ! al click di reset aggiungi d-none
const btnReset = document.querySelector("#btn-reset");
btnReset.addEventListener("click", function(){
    const squareContainer = document.querySelector("#square-container");    
    squareContainer.textContent ="";
})

