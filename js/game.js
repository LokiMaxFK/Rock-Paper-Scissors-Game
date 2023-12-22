const types = {
    rock:{
        id: 1,
        name: "rock",
        beats: "scissors"
    },
    scissors:{
        id: 2,
        name: "scissors",
        beats: "paper"
    },
    paper: {
        id: 2,
        name: "paper",
        beats: "rock"
    }
};


let scoreGlobal = 0;
const optionsHouse = ["rock", "scissors", "paper"];

const scoreElementText = document.querySelector(".header__result");
const modalOpenButton = document.querySelector(".btn--rules");
const modalCloseButton = document.querySelector(".modal__button");
const resetGameButton = document.querySelector("[data-id='reset-game']");

const board = document.querySelector(".board");
const results = document.querySelector(".result");
const modal = document.querySelector(".modal");

const optionPlayer = document.querySelector(".result__option--player");
const optionHouse = document.querySelector(".result__option--house");
const resultFinallyText = document.querySelector(".result__finally");


//Detectamos si dimos click a una opción
board.addEventListener("click", (e)=>{

    if(e.target.matches(".option")){
        const type = e.target.dataset.type;
        setWinner(types[type]);
    }

});

//Reiniciamos el juego
resetGameButton.addEventListener("click", ()=>{
    toggleShowSections();

    // Quitamos los valores establecidos anteriormente
    optionPlayer.firstElementChild.remove()
    optionHouse.firstElementChild.remove()

});

//Abrimos modal
modalOpenButton.addEventListener("click", ()=>{
    modal.showModal();
});

// Cerrar modal
modalCloseButton.addEventListener("click", ()=>{
    modal.close();
});


//Establecemos al ganador
function setWinner(playerType){
    toggleShowSections();

    //Obtenemos el botón y los resultados del jugador y casa
    const playerElement = getElementByType(playerType.name);
    const houseOptionName = getHouseOption(playerType.name);

    const houseElement = getElementByType(houseOptionName);
    const houseType = types[houseOptionName];



    //Agregamos los botones a la UI
    optionPlayer.prepend(playerElement);
    optionHouse.prepend(houseElement);


    // Determinamos el ganador.
    if(playerType.beats === houseType.name){
        resultFinallyText.textContent = "YOU WIN";
        scoreGlobal++;
        scoreElementText.dataset.score = scoreGlobal;
    }else{
        resultFinallyText.textContent = "YOU LOSE";
    }
}

//Quitamos y mostramos a las secciones interactivas
function toggleShowSections(){
    board.classList.toggle("board--hidde");
    results.classList.toggle("result--hidde");
}

//Extraemos el tipo de imagen que vamos a poner
function getElementByType(type){
    const templateOption = document.querySelector(`.${type}`);
    const contentOption = templateOption.content.cloneNode(true);

    return contentOption;
}

//Elegimos la opción que escogerá la casa
function getHouseOption(optionPlayer){
    const currentOptions = optionsHouse.filter((option) => option!==optionPlayer );
    const getRandomNumber = Math.round(Math.random());

    return currentOptions[getRandomNumber];
}
