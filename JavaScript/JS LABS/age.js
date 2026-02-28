function checkEligibility() {
    let age=document.getElementById("age").value;
    if(age>=18){
        document.getElementById("result").innerHTML="Eligible to vote";
    }
    else{
        document.getElementById("result").innerHTML="Not eligible to vote";
    }
}
