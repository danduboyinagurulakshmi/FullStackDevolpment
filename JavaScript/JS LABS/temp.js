function convertToCelsius() {
    let f=document.getElementById("temp").value;
    let c=(f-32)*5/9;
    document.getElementById("result").innerHTML="Temperature in celsius:"+c;
}
function convertToFahrenheit() {
    let c=document.getElementById("temp").value;
    let f=(c*9/5)+32;
    document.getElementById("result").innerHTML="Temperature in fahrenheit:"+f;
}