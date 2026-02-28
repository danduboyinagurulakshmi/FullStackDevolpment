import "./Landing.css"
// function Landing({name,age,branch}){
//     return (
//         <>
//         <p>
//         {name}
//         {age}
//         {branch}
//         </p>
        
//         </>
//     )

function Landing(){
    let student={
        name:"guru",
        age:20
    }
    let {name,age}=student

    return(
    <>
    {student.name}
    {student.age}
    <p>{name},{age}</p>
    <h1>Displaying Landing page</h1>
    <p> {name}
        {age}
    </p>
    </>
    )
}
export default Landing;