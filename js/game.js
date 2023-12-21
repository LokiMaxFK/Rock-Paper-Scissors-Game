const types = {
    rock:{
        id: 1,
        name: "rock",
        beats: "scissors"
    },
    scissors:{
        id: 2,
        name: "rock",
        beats: "papper"
    },
    papper: {
        id: 2,
        name: "papper",
        beats: "rock"
    }
}

const board = document.querySelector(".board");
const results = document.querySelector(".result");

board.addEventListener("click", (e)=>{
    console.log(e);
    if(e.target.matches(".option")){
        const type = e.target.dataset.type;
        toggleShowSections();
    }
});


function toggleShowSections(){
    board.classList.toggle("board--hidde");
    results.classList.toggle("result--hidde");
}