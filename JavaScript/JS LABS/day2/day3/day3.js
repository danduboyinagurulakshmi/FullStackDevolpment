let sum=function(){
let a=Number(document.getElementById("a").value);
let b=Number(document.getElementById("b").value);
    let add=a+b;
    document.writeln("the sum is:",+add);

}
let sub=function(){
let a=Number(document.getElementById("a").value);
let b=Number(document.getElementById("b").value);
    let sub=a-b;
    document.writeln("the sum is:",-sub);

}
function Arrays(){
    let student=["a","n","j","u","d"]
    for(let i=0;i<student.length;i++){
        document.write(student[i]+"<br>");
    }
}
function Arrays1(){
    let student1=["a","n","j","u","d"]
    for(let i in student1){
        document.write(student1[i]+"<br>");
    }
}
function Arrays2(){
    let student2=["a","n","j","u","d"]
    for(let i of student2){
        document.write(student2[i]+"<br>");
    }
}
function click(){
    arr=[1,2,3,4]
    document.writeln(arr);
}