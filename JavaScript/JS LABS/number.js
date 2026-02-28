let randomNumber=Math.floor(Math.random()*10)+1;
function checkGuess() {
    let userGuess=document.getElementById("guess").value;
    if(userGuess==randomNumber){
        document.getElementById("result").innerHTML="Congratulations! You guessed it right.";
    }
    else if(userGuess>randomNumber){
        document.getElementById("result").innerHTML="Too high! Try again.";
    }
    else{
        document.getElementById("result").innerHTML="Too low! Try again.";
    }   
}