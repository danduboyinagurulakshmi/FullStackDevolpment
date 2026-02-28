function Arrays(){
let arr=[10,12,13,14]
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i]+2;
    document.writeln(arr[i]+"<br>")
}
}
function greater(){
    var marks=[10,20,30,40,50]
    let num=marks.filter((i)=>i+2)
    document.writeln(num+"<br>")
}
function greater1(){
    var marks=[10,20,30,40,50]
    let num=marks.map((i)=>i+2)
    document.writeln(num+"<br>")
}
function dark(){
    document.body.style.backgroundColor="black";
}
function light(){
    document.body.style.backgroundColor="orange";
}
function test(){
   alert("hello")
   confirm("hellowrold")
}

function test1(){
    let paragraph=document.createElement("h1");
    paragraph.textConents="this is created by js";
    document.getElementsByClassName("example")[0].appendChild(paragraph);

    let header=document.createElement("h2");
    header.textContents="this js";
    document.getElementsByClassName("example")[1].appendChild(header);
}
