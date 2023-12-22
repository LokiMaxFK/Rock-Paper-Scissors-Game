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
const resetGame = document.querySelector("[data-id='reset-game']");
const options = ["rock", "scissors", "paper"];
const board = document.querySelector(".board");
const results = document.querySelector(".result");
const optionPlayer = document.querySelector(".result__option--player");
const optionHouse = document.querySelector(".result__option--house");
const resultFinally = document.querySelector(".result__finally");


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
resetGame.addEventListener("click", ()=>{
    toggleShowSections();

});

//Establecemos al ganador
function setWinner(playerType){
    toggleShowSections();

    const buttonPlayer = getElementByType(playerType.name);
    const houseOptionName = houseOption(playerType.name);


    const buttonHouse = getElementByType(houseOptionName);
    const houseType = types[houseOptionName];

    optionPlayer.prepend(buttonPlayer);
    optionHouse.prepend(buttonHouse);

    if(playerType.beats === houseType.name){
        resultFinally.textContent = "YOU WIN";
        score++;
        scoreElement.dataset.score = score;
    }else{
        resultFinally.textContent = "YOU LOOSE";
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
    const content = template.content;

    return content;
}

//Elegimos la opción que escogerá la casa
function houseOption(optionPlayer){
    const currentOptions = options.filter((option) => option!==optionPlayer );
    const getRandomNumber = Math.round(Math.random());

    return currentOptions[getRandomNumber];
}
