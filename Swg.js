function PickComputerMove(){
    let randomNo=Math.random();
    let computerMove;
   
    if(randomNo>=0 && randomNo<1/3)
    {
        computerMove='snake';

    }
    else if(randomNo>=1/3 && randomNo <2/3){
        computerMove='gun';

    }
    else if(randomNo>=2/3 && randomNo<1){
        computerMove='water';
    }
return computerMove;
}




const score={
    win:0,
    loss:0,
    tie:0
};

function GameScore(){  

     
     if(result==='Bad luck! you lose!'){
        score.loss+=1;
     }
     else if(result==='Its a tie'){
         score.tie+=1;
     }
     else if(result==='Good luck! you won!'){
         score.win+=1;
         
     } 
     document.querySelector('.js-score').innerHTML=`wins: ${score.win} losses: ${score.loss}  ties: 
     ${score.tie}`;

     localStorage.getItem('score');
 }

 
 let result;
function PickplayerMove(playerMove){
    //Snake beats Water, Water beats Gun, and Gun beats Snake
    let computerMove=PickComputerMove();
   

    if(playerMove==='snake'){
        if(computerMove==='gun'){
            result= 'Bad luck! you lose!';
        }
        else if(computerMove==='water'){
            result='Good luck! you won!';

        }
        else if(computerMove==='snake'){
            result='Its a tie';
        }
    }

    else if(playerMove==='gun'){
        if(computerMove==='gun'){
            result= 'Its a tie';
        }
        else if(computerMove==='water'){
            result='Bad luck! you lose!';

        }
        else if(computerMove==='snake'){
            result='Good luck! you won!';
        }
        
    }

    else if(playerMove==='water'){
        if(computerMove==='gun'){
            result= 'Good luck! you won!';
        }
        else if(computerMove==='water'){
            result='Its a tie';

        }
        else if(computerMove==='snake'){
            result='Bad luck! you lose!';
        }
        
    }

    //this line shows the result on screen
    document.querySelector('.js-result').innerHTML=` ${result}`;

    document.querySelector('.js-moves').innerHTML=`You choosed ${playerMove} computer choosed ${computerMove}`;
    
    
    GameScore();
}


function resetScore(){
score. win= 0;
score. loss= 0;
score.tie= 0;
document.querySelector('.js-score').innerHTML=`Wins: ${score.win} losses: ${score.loss} ties:   ${score.tie}`;

}   
