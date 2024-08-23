let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset-btn");
let turnO=true;
let newgamebtn=document.querySelector(".new-btn");
let msgcont=document.querySelector(".msg-cont");
let msg=document.querySelector(".msg");  
let count=0;
const winpattern=[
    [0,1,2],
    [0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetgame= ()=>{
    turnO=true;
    enablebtns(); 
    msgcont.classList.add("hide");
    }
    

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if (turnO){
            box.innerText="O";
            box.style.color="black";
            turnO=false;

        }
        else{
            box.innerText="X";
            box.style.color="white";
       
            turnO=true;
           
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count===9 &&! iswinner){
            gamedraw()
        }
    });
    });
const disablebtns= ()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enablebtns= ()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
};
const gamedraw=()=>{
    msg.innerText="It is a Draw";
    msgcont.classList.remove("hide");
    disablebtns();
};

const showwinner = (winner) => {
        msg.innerText=`Congratulations, winner is player ${winner}`;
        msg.style.fontFamily="futura";
        msgcont.classList.remove("hide");
        disablebtns();
};

const checkwinner=() =>{
    for (let pattern of winpattern){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log(`Player ${pos1} Wins`);
            showwinner(pos1);
        }
        
        
    }
    }
};

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

gsap.from(".box",{
    x:791,
    y:323,
    opacity:0,
    rotate:360,
    duration:1.3,
    delay:1
})

