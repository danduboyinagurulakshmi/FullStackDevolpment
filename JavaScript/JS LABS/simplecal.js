let result=document.getElementById("result");
function appendValue(value)
{
    result.value+=value;
}
function clearresult()
{
    result.value="";
}
function deleteLast(){
    result.value=result.value.slice(0,-1);
}
function calculateResult()
{
    try
    {
        result.value=eval(result.value);
    }
    catch(error)
    {
        result.value="Error";
    }   
}
