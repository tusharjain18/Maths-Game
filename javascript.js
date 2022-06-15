var playing = false;
var score;
var action;
var timeremaining;

// click on start/reset
document.getElementById("startreset").onclick = 
    function(){
    // if we are playing
    if(playing == true){
        location.reload();//reload page
    }else{//if not playing
        
        //change mode to playing 
        playing = true;
        
        // set score=0
        score = 0;
        
        document.getElementById("scorevalue").innerHTML = score;
        
        //show countdown
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide game over box;
        hide("gameOver");
        
        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        //start countdown
        startCountdown();
        
        //generate a new Q&A
        generateQA();
    }
}

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){//game over
            stopCountdown();
            
            show("gameOver");
            
            document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your Score is " + score +".</p>";
            
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    },1000);
}

//stop counter
function stopCountdown(){
      clearInterval(action);
}

//hide element
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

//show element 
function show(Id){
    document.getElementById(Id).style.display = "block";
}

//generate question
function generateQA(){
    
}
