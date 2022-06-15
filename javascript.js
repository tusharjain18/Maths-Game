var playing = false;
var score;

// click on start/reset
document.getElementById("startreset").onclick = 
    function(){
    // if we are playing
    if(playing == true){
        location.reload();//reload page
    }else{//iif not playing
        // set score=0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("timeremaining").style.display = "block";
    }
}