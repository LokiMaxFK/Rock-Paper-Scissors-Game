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


let score = 0;
const scoreElement = document.querySelector("[data-score]");
const resetGameButton = document.querySelector("[data-id='reset-game']");
const optionsHouse = ["rock", "scissors", "paper"];

const board = document.querySelector(".board");
const results = document.querySelector(".result");

const optionPlayer = document.querySelector(".result__option--player");
const optionHouse = document.querySelector(".result__option--house");
const resultFinallyText = document.querySelector(".result__finally");


//Detectamos a que botón le dimos click
board.addEventListener("click", (e)=>{
    console.log(e);
    if(e.target.matches(".option")){
        const type = e.target.dataset.type;
        console.log(type);
        setWinner(types[type]);
    }
});

//Reiniciamos el juego
resetGameButton.addEventListener("click", ()=>{
    toggleShowSections();

    console.log("Hecho")
    // Quitamos los valores establecidos anteriormente
    optionPlayer.firstElementChild.remove()
    optionHouse.firstElementChild.remove()

});

//Establecemos al ganador
function setWinner(playerType){
    toggleShowSections();

    //Obtenemos el botón y los resultados del jugador y casa
    const buttonPlayer = getElementByType(playerType.name);
    const houseOptionName = houseOption(playerType.name);
    const buttonHouse = getElementByType(houseOptionName);
    const houseType = types[houseOptionName];



    //Agregamos los botones a la UI
    optionPlayer.prepend(buttonPlayer);
    optionHouse.prepend(buttonHouse);


    // Determinamos el ganador.
    if(playerType.beats === houseType.name){
        resultFinallyText.textContent = "YOU WIN";
        score++;
        scoreElement.dataset.score = score;
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
    const template = document.querySelector(`.${type}`);
    console.log(template);
    const content = template.content.cloneNode(true);

    return content;
}

//Elegimos la opción que escogerá la casa
function houseOption(optionPlayer){
    const currentOptions = optionsHouse.filter((option) => option!==optionPlayer );
    const getRandomNumber = Math.round(Math.random());

    return currentOptions[getRandomNumber];
}
