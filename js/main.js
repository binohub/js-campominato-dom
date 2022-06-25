document.querySelector("#btn-reset").addEventListener("click", function () {
    functionCreateNewGame();
});


// ### functions ### functions ### functions ### functions ### functions
function functionCreateNewGame() {
    const squareContainer = document.querySelector("#square-container");
    squareContainer.innerHTML = "";

    // ! number cycle & class square dynamic
    let n = 0; 
    let c = "";
    if (document.querySelector("#difficulty-hard").selected === true) {
        n = 100;
        c = "square-hard";
    }else if(document.querySelector("#difficulty-medium").selected === true) {
        n = 81;
        c = "square-medium";
    }else{
        n = 49;
        c = "square-easy";
    }

    // ! crea un quadrato * 100 e assegna al quadrato il suo numero
    for (let i = 1; i <= n; i++) {
        // ! crea un div con classe square da aggiungere
        const newDiv = document.createElement('div');
        newDiv.classList.add(c);
        newDiv.innerHTML = i;
        // ! al click fai pari o dispari? a seconda del risultato aggiungi una classe
        newDiv.addEventListener('click', function () {
            if (i % 2 === 0) {
                newDiv.classList.toggle("bg-success");
                console.log(`hai cliccato la casella numero ${i}`);
            } else {
                newDiv.classList.toggle("bg-danger");
                console.log(`hai cliccato la casella numero ${i}`);
            }
        }
        )
        // ! conneecting
        squareContainer.append(newDiv)
        // squareContainer.classList.remove("d-none");
    }
}