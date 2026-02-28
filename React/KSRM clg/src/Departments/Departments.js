import Navbar from "../Navbar/Navbar";
import "./Departments.css"
function Departments() {
    return (
        <>
        <Navbar/>
        <div className="departments">
            <h1>College Departments</h1>
            <ul>
                <li>Computer Science</li>
                <li>Civil</li>
                <li>Mechanical</li>
                <li>Ece</li>
                <li>Aiml</li>
                <li>AI(ds)</li>
                <li>MBA</li>
                <li>Diploma</li>
            </ul>
        </div>
         <div className="footer-clg1">
            <footer>
                <p>&copy; 2026 KSRM COLLEGE OF Engineering.</p>
            </footer>

        </div>
        
        
        </>
    )
}
export default Departments;




