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

const options = ["rock", "scissors", "paper"];

const board = document.querySelector(".board");
const results = document.querySelector(".result");
const optionPlayer = document.querySelector(".result__option--player");
const optionHouse = document.querySelector(".result__option--house");

board.addEventListener("click", (e)=>{
    console.log(e);
    if(e.target.matches(".option")){
        const type = e.target.dataset.type;
        console.log(type);
        setWinner(types[type]);
    }
});


function setWinner(playerType){
    toggleShowSections();
    console.log(playerType);


    const buttonPlayer = getElementByType(playerType.name);
    
    const houseOptionName = houseOption(playerType.name);
    const buttonHouse = getElementByType(houseOptionName);
    


    optionPlayer.prepend(buttonPlayer);
    optionHouse.prepend(buttonHouse);
}


function toggleShowSections(){
    board.classList.toggle("board--hidde");
    results.classList.toggle("result--hidde");
}

function getElementByType(type){
    console.log(type);
    const template = document.querySelector(`.${type}`);
    console.log(template);
    const content = template.content;

    return content;
}

function houseOption(optionPlayer){

    const currentOptions = options.filter((option) => option!==optionPlayer );
    const getRandomNumber = Math.round(Math.random());
    console.log(getRandomNumber);
    return currentOptions[getRandomNumber];
}