let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let mgscontainer=document.querySelector(".mgs-container");
let mgs=document.querySelector("#mgs");

let turn0=true;
const winpatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];

const resetGame = () =>{
    turn0=true;
    enabledboxes();
    mgscontainer.classList.add("hide");

};

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log('box was click');
        if(turn0){
        box.innerText="o";
        turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
    box.disabled=true;
    checkWinner();
});
});

const disabledboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }

};

const enabledboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};


const showWinner = (winner) => {
    console.log(winner);
   // mgs.innerText= 'congratulations,winner  is ${winner}';
    mgs.innerText = "Congratulations, winner is " + winner;

    mgscontainer.classList.remove("hide");
    disabledboxes();
};


const checkWinner = () => {
    for(let pattern of winpatterns){
            //console.log(pattern);
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!="" ){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
            
    }
};

newgamebtn.addEventListener("click" , resetGame);
resetbtn.addEventListener("click" , resetGame);