function test(){
    var v1=document.getElementById("para")
    v1.innerText="hello world"
    document.writeln(v1.innerText)
    v1.style.backgroundColor="green"
    document.writeln(v1.style)

}
function test1(){
    let paragraph=document.createElement("h1");
    paragraph.textConents="this is created by js";
    document.getElementsByClassName("example")[0].appendChild(paragraph);

    let header=document.createElement("h2");
    header.textContents="this js";
    document.getElementsByClassName("example")[1].appendChild(header);
}
function check(){
    let username=prompt("enter ur name")
    let message=document.getElementById("hello".innerHtml="welcome")
}
