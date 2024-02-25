let userScore=0;
let compScore=0;


const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");
const genCompChoice=()=>{
        const option=["rock","paper","scissors"]
       const randInd= Math.floor(Math.random()*3);
       return option[randInd]


}
const drawGame=()=>{
    
    msg.innerText="Game was Draw. Play again";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
       
        msg.innerText=`You lose.${compChoice} beats ${userChoice}`;
    }

}

const playGame  =(userChoice)=>{
        console.log("user choice=",userChoice)
        const compChoice=genCompChoice();
        console.log("comp choice=",compChoice)

        if(userChoice===compChoice){
            drawGame();
        } else{
            let userWin=true;
            if(userChoice==="rock"){
                userWin=compChoice==="paper"? false:true;
            }
            else if(userChoice==="paper"){
                userWin= compChoice==="scissors"? false:true;
            }
            else{
                userWin=compChoice==="rock"?false:true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
}

choices.forEach((choice)=>{
 
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
       
        playGame(userChoice)
    })
    
})