function check(){
    let inventori="mobile,lap,tav,desk,smart,cam";
    let valuez=document.getElementById("searche").value;
    document.writeln(valuez)
    
    if(inventori.includes(valuez)){
        document.writeln("found")
        let finalSize=valuez.length;
        let intialSize=inventori.indexOf(valuez)
        let slicing=inventori.slice(initialSize,intialSize+finalSize)
        document.writeln(slicing)
    }
    else{
        document.writeln("not found")
    }
}